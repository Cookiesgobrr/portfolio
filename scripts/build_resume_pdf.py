import os
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, PageBreak

font_dir = Path("/usr/share/fonts/truetype/ebgaramond")
if (font_dir / "EBGaramond12-Regular.ttf").exists():
    for name, file in [("EBG", "EBGaramond12-Regular.ttf"), ("EBGB", "EBGaramond12-Bold.ttf"), ("EBGI", "EBGaramond12-Italic.ttf")]:
        pdfmetrics.registerFont(TTFont(name, str(font_dir / file)))
    pdfmetrics.registerFontFamily("EBG", normal="EBG", bold="EBGB", italic="EBGI", boldItalic="EBGB")
    regular, bold = "EBG", "EBGB"
else:
    regular, bold = "Times-Roman", "Times-Bold"

sty = {
    "name": ParagraphStyle("name", fontName=bold, fontSize=20.5, leading=22, spaceAfter=4),
    "sub": ParagraphStyle("sub", fontName=regular, fontSize=10, leading=12, spaceAfter=4),
    "section": ParagraphStyle("section", fontName=bold, fontSize=10.8, leading=13, spaceBefore=13, spaceAfter=6),
    "body": ParagraphStyle("body", fontName=regular, fontSize=9.7, leading=11.5, spaceAfter=3),
    "item": ParagraphStyle("item", fontName=regular, fontSize=9.4, leading=11.1, spaceAfter=3, leftIndent=10, firstLineIndent=-10),
    "cert": ParagraphStyle("cert", fontName=regular, fontSize=9.1, leading=10.8, spaceAfter=3.6, leftIndent=10, firstLineIndent=-10),
    "note": ParagraphStyle("note", fontName=regular, fontSize=8.3, leading=10, spaceAfter=3, textColor=HexColor("#555555")),
}
flow = []
def para(t, style="body"):
    flow.append(Paragraph(t, sty[style]))
def section(t):
    flow.append(Spacer(1, 2))
    para(escape(t.upper()), "section")
    flow.append(HRFlowable(width="100%", thickness=.45, color=HexColor("#b6b3aa"), spaceAfter=5))
def entry(name, desc, date=""):
    para(f"<b>{escape(name)}</b>  |  {escape(desc)}" + (f"  [{escape(date)}]" if date else ""))
def bullet(t):
    para("&#8226;  " + t, "item")
def hyperlink(url, label="Verify"):
    return f'<link href="{escape(url)}" color="#31566D"><u>{label} &#8599;</u></link>'

para("TARUN JACOB ABRAHAM", "name")
para("Academic Résumé  |  Software Development  |  Leadership &amp; Public Speaking", "sub")
para('Dubai, UAE  ·  <link href="mailto:tarun.jacob2927@gmail.com">tarun.jacob2927@gmail.com</link>  ·  <link href="https://www.linkedin.com/in/tarnu/">LinkedIn</link>  ·  <link href="https://github.com/Cookiesgobrr">GitHub</link>', "sub")

section("Academic profile")
para("A-Level student working across software engineering, explainable AI, economics and public communication. I enjoy learning unfamiliar technologies by building practical systems, leading initiatives and explaining ideas clearly.")
section("Education")
entry("Al Diyafah High School", "Dubai, United Arab Emirates", "Expected 2027")
bullet("A Levels: Mathematics, Economics and Accounting.")
bullet("IGCSE (2025): 3 A* and 5 A grades; school recognition for Excellent Academic Achievement.")

section("Independent technical projects")
entry("TacticLens Live", "Football simulation and explainable AI", "2026")
bullet("Built a seeded 11v11 match simulation, synchronized 2D/3D replay, synthetic match analysis, and evidence-checked Microsoft Foundry commentary. " + hyperlink("https://github.com/Cookiesgobrr/tacticlens-live", "Source"))
entry("admunOS", "Conference operations software", "2026")
bullet("Developed a Google Sheets and Apps Script-backed delegate system supporting registration reconciliation, QR attendance and meal workflows, and server-side validation. " + hyperlink("https://github.com/Cookiesgobrr/admun-logistics-demo", "Source"))
entry("EpilEducate", "Apple Swift Student Challenge submission", "2026")
bullet("Built a SwiftUI epilepsy education playground combining first-aid choices, illustrative brain-wave visualization and sensory interaction. " + hyperlink("https://github.com/Cookiesgobrr/EpilEducate", "Source"))
entry("Other projects", "Selected experiments")
bullet("Configured a Hackintosh laptop; linked Spotify activity to Microsoft Teams through Power Automate; developed a barcode generator compact enough to fit in a QR code.")

section("Speaking")
entry("TEDxAl Diyafah High School", "Selected student speaker")
bullet("“Between Creation and Becoming: How Artificial Intelligence Is Growing Faster Than We Can Control.” " + hyperlink("https://www.youtube.com/watch?v=JCxpD2Mlkg8", "Watch"))
entry("TED-Ed Student Speaker", "Student talk")
bullet("“Cybersecurity’s Importance in Today’s Growing Society,” on the need for cybersecurity in a connected world.")

flow.append(PageBreak())
section("Leadership and activities")
entry("ADMUN 2.7", "Director of Logistics (appointed)", "2026")
bullet("Lead logistics preparation; previously co-chaired House of Heroes and attended four ADMUN conferences as a delegate.")
entry("Wharton Global High School Investment Competition", "School team founder and lead")
bullet("Introduced the competition at school and helped develop asset-allocation and security-selection strategy against a simulated client brief.")
entry("Entrepreneurial Club and Student Representative Council", "School leadership")
bullet("Founding core club member supporting the NextGen Entrepreneurial League; co-organized English and IT skills support for school staff.")

section("Awards and qualifications")
bullet("Runner-Up Best Delegate, NMSMUN 2023; Honourable Mention, ADMUN 2.3; third place, Sustainovation Challenge.")
bullet("Trinity College London: Rock &amp; Pop Vocals Grade 8 (Merit), Grade 7 (Pass), Grade 6 (Merit), Grade 5 (Distinction); Communication Skills Grade 7 (Distinction); Guitar Grade 3 (Merit).")
section("Service")
bullet("Student intern, The Hive Drama and Performing Arts Center (December 2025); facilitated sensory activities for teenagers and adults with additional support needs through Ponnomanakal.")

section("Certifications and professional training - all eight")
certifications = [
    ("Goldman Sachs - Internal Audit Job Simulation", "Forage", "Aug 2025", "Internal audit", "fNQTSXuLYJ5h5JitS", "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/dC4ChhAkhpgB7QvGd_MBA4MnZTNFEoJZGnk_9R7jx3kHJqRRK8Eab_1754315392712_completion_certificate.pdf", "Certificate"),
    ("Google - Get Started with Cloud Storage Skill Badge", "Google", "Jul 2024", "Cloud storage", "", "https://www.credly.com/badges/46b8cb20-8ef1-47bc-839a-d6a8a42939b5", "Verify"),
    ("Cisco - Introduction to Cybersecurity", "Cisco Networking Academy", "Dec 2023", "Cybersecurity, network security", "", "https://www.credly.com/badges/6589aea4-ced8-4ece-a129-be3112ffd6d6", "Verify"),
    ("IBM - Explore Emerging Tech", "IBM SkillsBuild", "Aug 2023", "Emerging technologies", "", "https://www.credly.com/org/ibm-skillsbuild/badge/explore-emerging-tech.1", "Issuer description"),
    ("Mastercard - Cybersecurity Job Simulation", "Forage", "Jun 2023", "Cybersecurity, network security", "oPmvTjDPrSyPB6gtp", "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_9R7jx3kHJqRRK8Eab_1688117718463_completion_certificate.pdf", "Certificate"),
    ("IBM - AI Foundations", "IBM SkillsBuild", "Mar 2023", "Artificial intelligence", "", "https://www.credly.com/badges/7dbc5728-9358-4226-aa91-81cf464d39ba/public_url", "Verify"),
    ("IBM - Cybersecurity Fundamentals", "IBM SkillsBuild", "Apr 2022", "Cybersecurity", "", "https://www.credly.com/badges/c14140ff-cd5c-4175-a898-7fb6ec05991c", "Verify"),
    ("IBM - Working in a Digital World: Professional Skills", "IBM SkillsBuild", "Feb 2022", "Digital communication", "", "https://www.credly.com/badges/2bbefb4d-d10b-407d-badd-aa408749eb9f", "Verify"),
]
for name, issuer, date, skills, credential_id, uri, label in certifications:
    details = f"<b>{escape(name)}</b> | {escape(issuer)} | {escape(date)} | {escape(skills)}"
    if credential_id:
        details += f" | ID: {escape(credential_id)}"
    para("&#8226;  " + details + " | " + hyperlink(uri, label), "cert")
para("The IBM Explore Emerging Tech link explains the issuer's badge, not personal verification. Forage items are virtual job simulations, not employment.", "note")
section("Technical skills")
para("Swift, SwiftUI, TypeScript, JavaScript, Python, Git/GitHub, Microsoft Foundry, Power Automate, REST APIs, Google Apps Script; interests in cybersecurity, AI, finance and music.")

def footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setStrokeColor(HexColor("#c3c0b7"))
    canvas.line(48, 42, w - 48, 42)
    canvas.setFont(regular, 8.2)
    canvas.setFillColor(HexColor("#555555"))
    canvas.drawString(48, 30, "TARUN JACOB ABRAHAM  ·  ACADEMIC RESUME")
    canvas.drawRightString(w - 48, 30, str(doc.page))
    canvas.restoreState()

output = Path(os.environ.get("PORTFOLIO_RESUME_OUTPUT", "dist/files/tarun-abraham-resume.pdf"))
output.parent.mkdir(parents=True, exist_ok=True)
SimpleDocTemplate(str(output), pagesize=A4, rightMargin=48, leftMargin=48, topMargin=40, bottomMargin=60).build(flow, onFirstPage=footer, onLaterPages=footer)
print(output)
