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
    id: "service-waze", number: "SW", title: "ServiceWaze", subtitle: "Civic Tech PWA",
    category: "Impact", tags: ["Recent", "PWA", "Civic Tech", "Open Source"], modal: "redirect", external: true,
    url: "https://lulamilemkhungela.github.io/ServiceWaze/", icon: "./public/icons/project-folder.png",
    position: { left: "69%", top: "33%" }, colors: ["#1d4ed8", "#a0b5ef"], ariaLabel: "Open the live ServiceWaze site"
  },
  {
    id: "brand-strategy-programme", number: "TB", title: "Toyota Brand Programme", subtitle: "Brand Strategy · KINTO",
    folderTitle: "Toyota Brand", category: "Brand", tags: ["Enterprise", "Design Systems"], modal: "project",
    url: "./portfolio/brand-strategy-programme.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "23%", top: "63%" }, colors: ["#01718e", "#94c3d0"], ariaLabel: "Open Toyota Brand Programme"
  },
  {
    id: "foodiezone-pwa", number: "FZ", title: "FoodieZone", subtitle: "Ordering PWA",
    category: "Impact", tags: ["PWA", "Small Business"], modal: "project",
    url: "./portfolio/foodiezone-pwa.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "60%", top: "81%" }, colors: ["#c2410c", "#e5af99"], ariaLabel: "Open FoodieZone"
  },
  {
    id: "designops-design-system", number: "DO", title: "DesignOps", subtitle: "Design System",
    category: "Product", tags: ["Recent", "Design Systems"], modal: "project",
    url: "./portfolio/designops-design-system.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "74%", top: "62%" }, colors: ["#6d28d9", "#c2a5ef"], ariaLabel: "Open DesignOps"
  },
  {
    id: "lula-gazette", number: "LG", title: "LulaGazette", subtitle: "Legal Intelligence",
    category: "Impact", tags: ["Recent", "Civic Tech", "Open Source"], modal: "project",
    url: "./portfolio/lula-gazette.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "22%", top: "13%" }, colors: ["#a16207", "#d8bd97"], ariaLabel: "Open LulaGazette"
  },
  {
    id: "addmoredigital-website", number: "AD", title: "AddmoreDigital", subtitle: "Website, SEO & CRM",
    folderTitle: "Addmore Digital", category: "Web", tags: ["Small Business", "SEO & CRM"], modal: "project",
    url: "./portfolio/addmoredigital-website.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "84%", top: "14%" }, colors: ["#2563eb", "#a3bdf7"], ariaLabel: "Open AddmoreDigital"
  },
  {
    id: "africa-cuisine-pwa", number: "AC", title: "Africa Cuisine", subtitle: "Restaurant PWA",
    category: "Impact", tags: ["PWA", "Small Business"], modal: "redirect", external: true,
    url: "https://africa-cuisine-pro.vercel.app", icon: "./public/icons/project-folder.png",
    position: { left: "12%", top: "33%" }, colors: ["#b45309", "#e0b798"], ariaLabel: "Open the live Africa Cuisine site"
  },
  {
    id: "toyota-connected-apps", number: "TC", title: "Toyota Connected Apps", subtitle: "MyToyota · Remote · Lexus",
    folderTitle: "Toyota Apps", category: "Brand", tags: ["Enterprise", "Mobile App", "Design Systems"], modal: "project",
    url: "./portfolio/toyota-connected-apps.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "10%", top: "81%" }, colors: ["#eb0a1e", "#f798a1"], ariaLabel: "Open Toyota Connected Apps"
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
    id: "wandisplace-pwa", number: "WP", title: "WandisPlace", subtitle: "Booking PWA",
    category: "Impact", tags: ["PWA", "Small Business"], modal: "redirect", external: true,
    url: "https://wandies.vercel.app/", icon: "./public/icons/project-folder.png",
    position: { left: "88%", top: "81%" }, colors: ["#9a3412", "#d5aa9b"], ariaLabel: "Open the live WandisPlace site"
  },
  {
    id: "sk-finds-pwa", number: "SK", title: "SK Finds", subtitle: "WhatsApp Storefront",
    category: "Impact", tags: ["PWA", "Small Business"], modal: "redirect", external: true,
    url: "https://skautos.vercel.app/", icon: "./public/icons/project-folder.png",
    position: { left: "76%", top: "81%" }, colors: ["#be123c", "#e49bad"], ariaLabel: "Open the live SK Finds site"
  }
];
