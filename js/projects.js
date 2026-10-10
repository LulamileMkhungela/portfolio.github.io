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
    id: "brand-strategy-programme", number: "TB", title: "Toyota Brand Programme", subtitle: "Brand Strategy · KINTO",
    folderTitle: "Toyota Brand", category: "Brand", tags: ["Enterprise", "Design Systems"], modal: "project",
    url: "./portfolio/brand-strategy-programme.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "23%", top: "63%" }, colors: ["#01718e", "#94c3d0"], ariaLabel: "Open Toyota Brand Programme"
  },
  {
    id: "designops-design-system", number: "DO", title: "DesignOps", subtitle: "Design System",
    category: "Product", tags: ["Recent", "Design Systems"], modal: "project",
    url: "./portfolio/designops-design-system.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "74%", top: "62%" }, colors: ["#6d28d9", "#c2a5ef"], ariaLabel: "Open DesignOps"
  },
  {
    id: "toyota-connected-apps", number: "TC", title: "Toyota Connected Apps", subtitle: "MyToyota · Remote · Lexus",
    folderTitle: "Toyota Apps", category: "Brand", tags: ["Enterprise", "Mobile App", "Design Systems"], modal: "project",
    url: "./portfolio/toyota-connected-apps.html?embedded=1", icon: "./public/icons/project-folder.png",
    position: { left: "10%", top: "81%" }, colors: ["#eb0a1e", "#f798a1"], ariaLabel: "Open Toyota Connected Apps"
  }
];
