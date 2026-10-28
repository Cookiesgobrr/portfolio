export {};

const dialog = document.querySelector<HTMLDialogElement>(
  "[data-resume-dialog]",
);
const triggers = document.querySelectorAll<HTMLAnchorElement>(
  "[data-resume-trigger]",
);
const direct = dialog?.querySelector<HTMLAnchorElement>("[data-resume-direct]");
const status = dialog?.querySelector<HTMLElement>("[data-resume-status]");
const display = dialog?.querySelector<HTMLElement>("[data-press-display]");
const close = dialog?.querySelector<HTMLButtonElement>("[data-resume-close]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (
  dialog &&
  direct &&
  status &&
  display &&
  close &&
  typeof dialog.showModal === "function"
) {
  let run: AbortController | undefined;
  let returnTo: HTMLAnchorElement | undefined;
  let downloadStarted = false;
  let resumeFile: Promise<Blob>;
  let previousOverflow = "";

  function setPhase(phase: string, message: string, screen: string) {
    dialog!.dataset.phase = phase;
    status!.textContent = message;
    display!.textContent = screen;
  }

  function pause(ms: number, signal: AbortSignal): Promise<void> {
    return new Promise((resolve, reject) => {
      if (signal.aborted) {
        reject(signal.reason);
        return;
      }
      const cancel = () => {
        window.clearTimeout(timer);
        reject(signal.reason);
      };
      const timer = window.setTimeout(() => {
        signal.removeEventListener("abort", cancel);
        resolve();
      }, ms);
      signal.addEventListener("abort", cancel, { once: true });
    });
  }

  function finish(message: string) {
    setPhase("ready", message, "YOUR COPY IS READY");
    direct!.innerHTML = 'Download PDF <span aria-hidden="true">↓</span>';
  }

  async function download(signal?: AbortSignal) {
    if (downloadStarted || !dialog!.open || signal?.aborted) return;
    try {
      const file = await resumeFile;
      if (downloadStarted || !dialog!.open || signal?.aborted) return;
      downloadStarted = true;
      const objectUrl = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = direct!.download;
      dialog!.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 30000);
      finish(
        "Your copy is ready. If the download didn’t start, use the link below.",
      );
    } catch {
      if (!downloadStarted && dialog!.open && !signal?.aborted) direct!.click();
    }
  }

  async function printResume(signal: AbortSignal) {
    try {
      setPhase(
        "gathering",
        "Gathering education, projects, speaking, and leadership…",
        "01 / GATHERING DETAILS",
      );
      await pause(1900, signal);
      setPhase("printing", "Printing your copy…", "02 / PRINTING YOUR COPY");
      await pause(1500, signal);
      if (signal.aborted || !dialog!.open) return;
      await download(signal);
    } catch (error) {
      if (!signal.aborted) {
        setPhase(
          "ready",
          "The animation was interrupted. You can download the PDF below.",
          "DOWNLOAD AVAILABLE",
        );
        direct!.textContent = "Download PDF ↓";
      }
    }
  }

  triggers.forEach((trigger) => {
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.addEventListener("click", (event) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        reducedMotion.matches
      )
        return;
      event.preventDefault();
      if (dialog.open) return;
      returnTo = trigger;
      run?.abort();
      run = new AbortController();
      downloadStarted = false;
      resumeFile = fetch(direct.href).then((response) => {
        if (!response.ok) throw new Error("Resume unavailable");
        return response.blob();
      });
      void resumeFile.catch(() => {});
      direct.innerHTML =
        'Skip animation &amp; download <span aria-hidden="true">↓</span>';
      previousOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      dialog.showModal();
      void printResume(run.signal);
    });
  });

  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    run?.abort();
    document.documentElement.style.overflow = previousOverflow;
    returnTo?.focus({ preventScroll: true });
  });
  direct.addEventListener("click", () => {
    downloadStarted = true;
    run?.abort();
    finish("Your PDF download has started. You can download it again below.");
  });
  reducedMotion.addEventListener("change", (event) => {
    if (!event.matches || !dialog.open) return;
    run?.abort();
    void download();
  });
  window.addEventListener("pagehide", () => run?.abort());
}
