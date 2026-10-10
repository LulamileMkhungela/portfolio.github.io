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
    "id": "vodacom-employee-experience-lead",
    "name": "Employee Experience Lead",
    "role": "HRIT",
    "company": "Telecommunications group",
    "avatar": "./assets/testimonials/vodacom-employee-experience-lead.svg",
    "preview": "Lulamile came in, listened properly to how people actually use the app, and rebuilt the navigation around that…",
    "testimonial": "Lulamile came in, listened properly to how people actually use the app, and rebuilt the navigation around that. The search and grouped sections changed the way staff talk about the platform — the \"where do I find\" questions mostly stopped.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "Lulamile came in, listened properly to how people actually use the app, and rebuilt the navigation around that. The search and grouped sections changed the way staff talk about the platform — the \"where do I find\" questions mostly stopped."
      }
    ]
  },
  {
    "id": "addmoredigital-founder",
    "name": "Founder",
    "role": "Digital agency",
    "company": "Client (anonymised)",
    "avatar": "./assets/testimonials/addmoredigital-founder.svg",
    "preview": "We had the work, we just could not present it…",
    "testimonial": "We had the work, we just could not present it. Lulamile restructured the site around our portfolio and then set up the pipeline behind it. Proposals stopped being a scramble and enquiries started arriving with context.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "We had the work, we just could not present it. Lulamile restructured the site around our portfolio and then set up the pipeline behind it. Proposals stopped being a scramble and enquiries started arriving with context."
      }
    ]
  },
  {
    "id": "nerdma-managing-director",
    "name": "Managing Director",
    "role": "Technology services",
    "company": "Client (anonymised)",
    "avatar": "./assets/testimonials/nerdma-managing-director.svg",
    "preview": "Rare to find someone who can design a site this sharp and then think through the sales pipeline behind it…",
    "testimonial": "Rare to find someone who can design a site this sharp and then think through the sales pipeline behind it. The site finally explains what we do, and the CRM means nothing gets answered from memory.",
    "messages": [
      {
        "type": "text",
        "direction": "incoming",
        "text": "Rare to find someone who can design a site this sharp and then think through the sales pipeline behind it. The site finally explains what we do, and the CRM means nothing gets answered from memory."
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
