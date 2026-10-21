// Editable Messages app metadata and testimonial content.
// Each testimonial needs: id, name, role, company, avatar, preview, testimonial
// and messages (type "text", direction "incoming"). Avatars live in assets/testimonials/.
//
// A message can also be an attachment (type "document", with file, preview and pages).
// Clicking an attachment opens the pages in the built-in document viewer.
const MESSAGES_APP = {
  id: "messages",
  number: "MS",
  title: "Messages",
  colors: ["#34c759", "#5bf675"]
};

const TESTIMONIALS = [
  {
    "id": "cleorise-enoch",
    "name": "Cleorise Enoch",
    "role": "Business Analyst (HRIT — Business Analyst Specialist)",
    "company": "Telecommunications group",
    "avatar": "./assets/testimonials/cleorise-enoch.svg",
    "preview": "I asked Lulamile to sit with the people who actually use the app before touching the design…",
    "testimonial": "I asked Lulamile to sit with the people who actually use the app before touching the design. He did — and rebuilt the navigation around how they work, not how the org chart says they work. The search and grouped sections changed the way staff talk about the platform; the \"where do I find\" questions mostly stopped.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "I asked Lulamile to sit with the people who actually use the app before touching the design. He did — and rebuilt the navigation around how they work, not how the org chart says they work."
      },
      {
        "type": "text",
        "direction": "incoming",
        "text": "The search and grouped sections changed the way staff talk about the platform; the \"where do I find\" questions mostly stopped."
      }
    ]
  },
  {
    "id": "stanley-moloto",
    "name": "Stanley Moloto",
    "role": "Co-founder · UX/UI/Web Designer",
    "company": "AddmoreDigital",
    "avatar": "./assets/testimonials/stanley-moloto.svg",
    "preview": "We had the work, we just could not present it…",
    "testimonial": "We had the work, we just could not present it. Lulamile restructured the site around our portfolio and then set up the pipeline behind it. He was as comfortable in the copy as in the code, and proposals stopped being a scramble. Enquiries started arriving with context instead of a question mark.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "We had the work, we just could not present it. Lulamile restructured the site around our portfolio and then set up the pipeline behind it."
      },
      {
        "type": "text",
        "direction": "incoming",
        "text": "He was as comfortable in the copy as in the code, and proposals stopped being a scramble. Enquiries started arriving with context instead of a question mark."
      }
    ]
  },
  {
    "id": "gracious-mashasha",
    "name": "Gracious Mashasha",
    "role": "Full Stack Developer",
    "company": "Nerdma",
    "avatar": "./assets/testimonials/gracious-mashasha.svg",
    "preview": "We built the Nerdma site together and the handover never felt like a handover…",
    "testimonial": "We built the Nerdma site together and the handover never felt like a handover — the same component names, the same states, the same edges. He tests his own work on a phone before anyone else has to, and he asks the question that saves a rebuild two weeks later.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "We built the Nerdma site together and the handover never felt like a handover — the same component names, the same states, the same edges."
      },
      {
        "type": "text",
        "direction": "incoming",
        "text": "He tests his own work on a phone before anyone else has to, and he asks the question that saves a rebuild two weeks later."
      }
    ]
  },
  {
    "id": "foodiezone-owner",
    "name": "Owner",
    "role": "Food Retail",
    "company": "FoodieZone",
    "avatar": "./assets/testimonials/foodiezone-owner.svg",
    "preview": "Orders used to come through messages all day…",
    "testimonial": "Orders used to come through messages all day. Now customers order themselves, reorder in a tap, and I change the menu from my phone. It just works.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "Orders used to come through messages all day. Now customers order themselves, reorder in a tap, and I change the menu from my phone. It just works."
      }
    ]
  },
  {
    "id": "digital-academy-managing-director",
    "name": "Gary Bannatyne",
    "role": "Managing Director & Co-founder",
    "company": "The Digital Academy",
    "avatar": "./assets/testimonials/digital-academy-managing-director.svg",
    "preview": "I would have no hesitation recommending Lulamile for an extended internship or an intern developer role…",
    "testimonial": "I would have no hesitation recommending Lulamile for an extended internship or an intern developer role. He has acquired a technical foundation but would benefit greatly from the ability to further hone his skills before he becomes part of a development team.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "I would have no hesitation recommending Lulamile for an extended internship or an intern developer role. He has acquired a technical foundation but would benefit greatly from the ability to further hone his skills before he becomes part of a development team."
      },
      {
        "type": "text",
        "direction": "incoming",
        "text": "Selected through a 3-stage process from roughly 350 applications, inducted 1 August 2018 and completed the programme on 31 January 2019."
      }
    ]
  },
  {
    "id": "digital-academy-technical-manager",
    "name": "Ed Wrede",
    "role": "Technical Manager",
    "company": "The Digital Academy",
    "avatar": "./assets/testimonials/digital-academy-technical-manager.svg",
    "preview": "He was primarily involved with the implementation of the application from ideation and design through to logic…",
    "testimonial": "Lulamile showed a good grasp of Java OOP principles, good database proficiency and a good grasp of Git and DVCS fundamentals. He was primarily involved with the implementation of the application from ideation and design through to the logic for his team's native Android app. He is good at design for mobile apps, and he assisted the web development team in coming up with intuitive designs.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "Lulamile showed a good grasp of Java OOP principles, good database proficiency and a good grasp of Git and DVCS fundamentals."
      },
      {
        "type": "text",
        "direction": "incoming",
        "text": "He was primarily involved with the implementation of the application from ideation and design through to the logic for his team's native Android app. He is good at design for mobile apps, and he assisted the web development team in coming up with intuitive designs."
      }
    ]
  },
  {
    "id": "digital-academy-communications",
    "name": "Bongani Dlamini",
    "role": "Internal Communications Coordinator",
    "company": "The Digital Academy",
    "avatar": "./assets/testimonials/digital-academy-communications.svg",
    "preview": "Ambition — during his time at The Digital Academy, Lulamile displayed the desire to learn and improve his skills…",
    "testimonial": "Ambition — during his time at The Digital Academy, Lulamile displayed the desire to learn and improve his skills. Top three competencies: ambition, team player, communication.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "Ambition — during his time at The Digital Academy, Lulamile displayed the desire to learn and improve his skills."
      },
      {
        "type": "text",
        "direction": "incoming",
        "text": "Top three competencies: ambition, team player, communication."
      }
    ]
  }
];
