// Editable desktop portfolio data. Add a category or tags here and the
// Collections menu will automatically include the project in that filter.
// Categories (Product, Brand, Impact, Web) and tags must match the
// data-filter values generated for the filter menu. Each url points to a
// case study in portfolio/ — keep "?embedded=1" on the end.
// Projects with `external: true` are live-site shortcuts: the folder gets a
// small alias arrow and clicking it opens the live site in a new tab
// instead of opening a case study window.
const projects = [
  {
    id: "employee-engagement-app-redesign", number: "VE", title: "Vodacom Engage", subtitle: "Employee App",
    category: "Product", tags: ["Enterprise", "Mobile App"], modal: "project",
    url: "./portfolio/employee-engagement-app-redesign.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "33%", top: "23%" }, colors: ["#e60000", "#f59494"], ariaLabel: "Open Vodacom Engage"
  },
  {
    id: "foodiezone-pwa", number: "FZ", title: "FoodieZone", subtitle: "Ordering PWA",
    category: "Impact", tags: ["PWA", "Small Business"], modal: "project",
    url: "./portfolio/foodiezone-pwa.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "60%", top: "calc(81% - 3px)" }, colors: ["#c2410c", "#e5af99"], ariaLabel: "Open FoodieZone"
  },
  {
    id: "designops-design-system", number: "DO", title: "DesignOps", subtitle: "Design System",
    category: "Product", tags: ["Recent", "Design Systems"], modal: "project",
    url: "./portfolio/designops-design-system.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "74%", top: "62%" }, colors: ["#6d28d9", "#c2a5ef"], ariaLabel: "Open DesignOps"
  },
  {
    id: "lula-gazette", number: "LG", title: "LulaGazette", subtitle: "Legal Intelligence",
    category: "Impact", tags: ["Recent", "Civic Tech"], modal: "project",
    url: "./portfolio/lula-gazette.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "22%", top: "13%" }, colors: ["#a16207", "#d8bd97"], ariaLabel: "Open LulaGazette"
  },
  {
    id: "nerdma-website", number: "NM", title: "Nerdma", subtitle: "Web & Dashboards",
    category: "Web", tags: ["SEO & CRM"], modal: "project",
    url: "./portfolio/nerdma-website.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "88%", top: "34%" }, colors: ["#0f766e", "#9ac5c2"], ariaLabel: "Open Nerdma"
  },
  {
    id: "snb-website", number: "SN", title: "SNB", subtitle: "Accounting Website",
    category: "Web", tags: ["Small Business", "SEO & CRM"], modal: "project",
    url: "./portfolio/snb-website.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "88%", top: "57%" }, colors: ["#2f6b3a", "#a8c1ac"], ariaLabel: "Open SNB"
  },
  {
    id: "toyota-mobility-brand", number: "TM", title: "Toyota Mobility Brand", subtitle: "Brand · Design system · Apps",
    category: "Brand", tags: ["Enterprise", "Mobile App", "Design Systems"], modal: "project",
    url: "./portfolio/toyota-mobility-brand.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "30%", top: "47%" }, colors: ["#00708d", "#eb0a1e"], ariaLabel: "Open Toyota Mobility Brand"
  }
];
