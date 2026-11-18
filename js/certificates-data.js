/*
 * Certificates app content.
 *
 * Shown newest first, exactly as listed here. Each entry needs:
 *
 *   slug    file name (no extension) inside assets/certificates/. The app looks
 *           for "<slug>-thumb.jpg" in the grid and "<slug>.jpg" when opened.
 *   title   what the certificate is
 *   issuer  who issued it
 *   year    display year
 *   remote  file name on the hosted portfolio, used as a fallback if the local
 *           copy in assets/certificates/ is missing (set to "" to disable).
 *
 * To add one: drop "<slug>.jpg" (and optionally "<slug>-thumb.jpg") into
 * assets/certificates/ and add a line at the top of the list.
 */
const CERTIFICATES_APP = {
  id: "certificates",
  number: "CT",
  title: "Certificates",
  colors: ["#b8863b", "#f2d9a0"]
};

const CERTIFICATES_LOCAL_BASE = "./assets/certificates/";
const CERTIFICATES_REMOTE_BASE = "https://lulamilemkhungela.github.io/portfolio.github.io/projects/lulamile/certs/";

const CERTIFICATES_INTRO = {
  heading: "The credentials behind the work.",
  subheading: "Newest first. Open any certificate to read it in full.",
  footnote: "School-leaving certificate: the Grade 12 (matric) certificate is available on request."
};

const CERTIFICATES = [
  {
    slug: "udemy-certificate",
    title: "Udemy Certificate",
    issuer: "Course completion · Udemy",
    year: "2026",
    remote: "uc-3d757af2-c1d8-4c4f-b442-3a60acbf23a6--1.png"
  },
  {
    slug: "data-driven-product-research",
    title: "Data-Driven Product Research and Design",
    issuer: "Course · LinkedIn Learning",
    year: "2025",
    remote: "certificateofcompletion_datadriven-product-research-and-design.png"
  },
  {
    slug: "ai-driven-product-designer",
    title: "The AI-Driven Product Designer",
    issuer: "Course · LinkedIn Learning",
    year: "2025",
    remote: "certificateofcompletion_the-aidriven-product-designer.png"
  },
  {
    slug: "ai-for-ux-design-research",
    title: "Using AI for UX Design and Research",
    issuer: "Course · LinkedIn Learning",
    year: "2025",
    remote: "certificateofcompletion_using-ai-for-ux-design-and-research--1.png"
  },
  {
    slug: "fnb-full-stack",
    title: "Full Stack Development",
    issuer: "FNB App of the Year Academy",
    year: "2025",
    remote: "fnb-certificate.png"
  },
  {
    slug: "meta-principles-ux-ui",
    title: "Principles of UX/UI Design",
    issuer: "Meta via Coursera",
    year: "2024",
    remote: "coursera-principle-of-ux.png"
  },
  {
    slug: "michigan-xr-interaction-design",
    title: "UX & Interaction Design for AR/VR/MR/XR",
    issuer: "University of Michigan · Coursera",
    year: "2024",
    remote: "coursera-vr-mr-ar-design.png"
  },
  {
    slug: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google via Coursera",
    year: "2024",
    remote: "ai-google.jpeg"
  },
  {
    slug: "interaction-design-patterns",
    title: "Interaction Design: Software & Web Design Patterns",
    issuer: "Course · LinkedIn Learning",
    year: "2023",
    remote: "certificateofcompletion_interaction-design-software-and-web-design-patterns.png"
  },
  {
    slug: "google-ux-design",
    title: "Google UX Design",
    issuer: "Professional Certificate · Google via Coursera",
    year: "2023",
    remote: "ux-design-g.png"
  },
  {
    slug: "google-project-management",
    title: "Google Project Management",
    issuer: "Professional Certificate · Coursera",
    year: "2023",
    remote: "project-management.jpeg"
  },
  {
    slug: "become-a-software-developer",
    title: "Become a Software Developer",
    issuer: "Learning Path · LinkedIn Learning",
    year: "2021",
    remote: "certificateofcompletion_become-a-software-developer.png"
  },
  {
    slug: "mtn-business-app-academy",
    title: "MTN Business App Academy",
    issuer: "NQF Level 5 · Mobile & Web Development",
    year: "2021",
    remote: "mtn-business-app-academy-lulamile-mkhungela.png"
  },
  {
    slug: "programming-foundations-databases",
    title: "Programming Foundations: Databases",
    issuer: "Course · LinkedIn Learning",
    year: "2020",
    remote: "certificateofcompletion_programming-foundations-databases.png"
  },
  {
    slug: "succeeding-in-web-development",
    title: "Succeeding in Web Development: Full Stack & Front End",
    issuer: "Course · LinkedIn Learning",
    year: "2020",
    remote: "certificateofcompletion_succeeding-in-web-development-full-stack-and-front-end.png"
  },
  {
    slug: "microsoft-data-science",
    title: "Microsoft Data Science Skills Programme",
    issuer: "Microsoft Official Course",
    year: "2020",
    remote: "lulamile-mkhungela---microsoft-certificate-1.png"
  },
  {
    slug: "digital-academy",
    title: "Digital Academy Certificate",
    issuer: "Certified programme · The Digital Academy",
    year: "2019",
    remote: "dacertificateoriginal.png"
  },
  {
    slug: "jcse-wits-ux",
    title: "UX Experience Design",
    issuer: "JCSE · Wits",
    year: "2017",
    remote: "jcse---copy.png"
  },
  {
    slug: "sololearn-beginner-tutorials",
    title: "Beginner Tutorials",
    issuer: "C#, HTML, CSS, Java & SQL · SoloLearn",
    year: "2017",
    remote: "soloc.png"
  }
];
