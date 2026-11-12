/* ===================================================================
   PORTFOLIO CONTENT - EDIT HERE
   Change the data below and the website updates automatically.
   An empty list hides that section and its menu link.
   =================================================================== */
const DATA = {
  education: [
    { title: "CITS Trainee (current)", place: "NSTI Kanpur", detail: "Trade: CSA | Session: 2026-27" },
    { title: "Diploma in Computer Science and Engineering", place: "SRRT Saket Nagar Girls Polytechnic", detail: "Board of Technical Education, Uttar Pradesh | 2023 - 2026" },
    { title: "ITI - Computer Operator and Programming Assistant (COPA)", place: "Government ITI, Kanpur", detail: "NCVT | 2022 - 2023" }
  ],
  skills: [
    { group: "Core Trade Skills", items: ["Operating System", "Programming Languages", "Database Management"] },
    { group: "Computer Skills", items: ["MS Office", "Advanced Excel", "PowerPoint", "Data Visualization"] },
    { group: "Software and Tools", items: ["Python", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap", "GitHub"] },
    { group: "Soft Skills", items: ["Communication", "Problem Solving", "Teamwork"] }
  ],
  projects: [
    {
      name: "Online Gift Store",
      description: "A web-based application where users can browse gifts, view products and place orders.",
      tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "Bootstrap"],
      contribution: "Developed frontend pages, product management, database connectivity and order functionality.",
      image: "assets/images/project-gift-store.jpg", // EDIT HERE: add this image file (card shows an icon until you do)
      demo: "#",   // EDIT HERE: live demo link ("#" hides the button)
      repo: "#"    // EDIT HERE: GitHub repo link ("#" hides the button)
    }
  ],
  internship: [
    {
      role: "Python Development Intern",
      org: "Digicoders Technologies Private Limited",
      duration: "June 2025 - July 2025",
      skills: ["Core Python programming", "MySQL database management", "Debugging", "Backend logic development", "Data handling"]
    }
  ],
  certificates: [ // newest first. url is optional ("" hides the link)
    { name: "AI Literacy", org: "IBM SkillsBuild", year: "2026", url: "https://www.credly.com/go/Ri1itcrI" },
    { name: "O Level", org: "AIM Computer Institute", year: "2025", url: "" },
    { name: "Python Development Training", org: "Digicoders Technologies Private Limited", year: "2025", url: "" },
    { name: "Personality Development", org: "Mahindra Pride Classroom", year: "2024", url: "" },
    { name: "ITI (COPA)", org: "NCVT", year: "2023", url: "" }
  ]
};

/* ===================== Rendering (no need to edit) ===================== */
const $ = id => document.getElementById(id);
const chips = a => `<div class="chips">${a.map(x => `<span class="chip">${x}</span>`).join("")}</div>`;
const link = (u, t, i) => u && u !== "#" ? `<a class="btn" href="${u}" target="_blank" rel="noopener noreferrer"><i class="bi ${i}"></i> ${t}</a>` : "";

const views = {
  education: [DATA.education, e => `<div class="card"><h3>${e.title}</h3><p>${e.place}</p><p class="meta">${e.detail}</p></div>`, "education-list"],
  skills: [DATA.skills, s => `<div class="group"><h3>${s.group}</h3>${chips(s.items)}</div>`, "skills-list"],
  projects: [DATA.projects, p => `<article class="card">
      <img src="${p.image}" alt="${p.name} screenshot" onerror="this.outerHTML='<div class=ph><i class=&quot;bi bi-gift&quot;></i></div>'">
      <h3>${p.name}</h3><p>${p.description}</p>
      <p class="meta"><b>My contribution:</b> ${p.contribution}</p>${chips(p.tech)}
      <div class="links">${link(p.demo, "Live Demo", "bi-box-arrow-up-right")}${link(p.repo, "GitHub Repo", "bi-github")}</div></article>`, "projects-list"],
  internship: [DATA.internship, i => `<div class="card"><h3>${i.role}</h3><p>${i.org}</p><p class="meta">${i.duration}</p>${chips(i.skills)}</div>`, "internship-list"],
  certifications: [DATA.certificates, c => `<div class="card"><h3>${c.name}</h3><p>${c.org}</p><p class="meta">${c.year}</p>${c.url ? `<div class="links">${link(c.url, "View credential", "bi-patch-check")}</div>` : ""}</div>`, "certs-list"]
};

Object.entries(views).forEach(([sec, [list, tpl, target]]) => {
  if (!list.length) { // hide empty section and its menu link
    $(sec).remove();
    document.querySelector(`[data-sec="${sec}"]`)?.remove();
  } else $(target).innerHTML = list.map(tpl).join("");
});

/* Footer year */
$("year").textContent = new Date().getFullYear();

/* Theme: saved choice, else system preference */
const root = document.documentElement, icon = $("theme").firstElementChild;
function setTheme(t) {
  root.dataset.theme = t;
  icon.className = t === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("theme").onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

/* Mobile menu */
const menu = $("menu"), burger = $("burger");
burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
menu.onclick = e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } };

/* Reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }), { threshold: .1 });
document.querySelectorAll(".reveal").forEach(s => io.observe(s));

/* Highlight active menu link */
const links = [...menu.querySelectorAll("a")];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => spy.observe(s));
