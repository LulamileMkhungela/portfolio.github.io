// Editable desktop portfolio data. Add a category or tags here and the
// Collections menu will automatically include the project in that filter.
// Categories (Product, Brand, Impact, Web) and tags must match the
// data-filter values generated for the filter menu. Internal project URLs point
// to case studies in portfolio/ — keep "?embedded=1" on the end.
// Projects with `external: true` are shortcuts: the folder gets a small alias
// arrow and clicking it opens the destination in a new tab instead of opening
// a case-study window.
// Projects with `highlight: true` show a blinking red/green indicator light to
// draw attention to featured folders.
const projects = [
  {
    id: "employee-engagement-app-redesign", number: "VE", title: "Vodacom Engage", subtitle: "Employee App",
    category: "Product", tags: ["Enterprise", "Mobile App"], modal: "project",
    url: "./portfolio/employee-engagement-app-redesign.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "33%", top: "23%" }, colors: ["#e60000", "#f59494"], ariaLabel: "Open Vodacom Engage"
  },
  {
    id: "foodiezone-pwa", number: "FZ", title: "FoodieZone", subtitle: "Ordering PWA",
    category: "Impact", tags: ["PWA", "Small Business"], modal: "project", highlight: true, highlightStep: 4, highlightTone: "green",
    url: "./portfolio/foodiezone-pwa.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "60%", top: "calc(81% - 3px)" }, colors: ["#c2410c", "#e5af99"], ariaLabel: "Open FoodieZone"
  },
  /* Parked for now — I'll use it again later. Delete the comment markers
     around this entry to put the LulaFind App folder back on the desktop.
  {
    id: "lula-find-app", number: "LF", title: "LulaFind App", subtitle: "Project Link",
    category: "Product", tags: ["Mobile App"], modal: "project", external: true,
    url: "https://drive.google.com/file/d/1lEjaRWSbDKzmyDqiPEY1LMoxTPgi2-Ln/view?usp=sharing", icon: "./public/icons/project-folder.png",
    position: { left: "51%", top: "25%" }, colors: ["#15803d", "#a7d9b4"], ariaLabel: "Open LulaFind App project link"
  },
  */
  {
    id: "designops-design-system", number: "DO", title: "DesignOps", subtitle: "Tokens & Linter",
    category: "Product", tags: ["Recent", "Design Systems", "Figma", "React", "Angular"], modal: "project", highlight: true, highlightStep: 1, highlightTone: "red",
    url: "./portfolio/designops-design-system.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "73%", top: "28%" }, colors: ["#65a30d", "#c8e867"], ariaLabel: "Open DesignOps case study"
  },
  {
    id: "forma-design-system", number: "FM", title: "Forma Design System", subtitle: "Design System · WIP",
    category: "Product", tags: ["Recent", "Design Systems", "Figma", "React", "Angular"], modal: "project", highlight: true, highlightStep: 3, highlightTone: "red",
    url: "./portfolio/forma-design-system.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "74%", top: "62%" }, colors: ["#27563d", "#c8e867"], ariaLabel: "Open Forma Design System work-in-progress case study"
  },
  // Shortcut redirect — paste the destination URL into `url` below when ready.
  {
    id: "prodops", number: "PO", title: "ProdOps", subtitle: "In progress",
    category: "Product", tags: ["Recent"], modal: "project", external: true, highlight: true, highlightStep: 2, highlightTone: "green",
    url: "#", icon: "./public/icons/project-folder.png",
    position: { left: "88%", top: "57%" }, colors: ["#2f6b3a", "#a8c1ac"], ariaLabel: "Open ProdOps"
  },
  {
    id: "toyota-mobility-brand", number: "TM", title: "Toyota Mobility Brand", subtitle: "Brand · Design system · Apps",
    category: "Brand", tags: ["Enterprise", "Mobile App", "Design Systems"], modal: "project",
    url: "./portfolio/toyota-mobility-brand.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "30%", top: "47%" }, colors: ["#00708d", "#eb0a1e"], ariaLabel: "Open Toyota Mobility Brand"
  }
];
