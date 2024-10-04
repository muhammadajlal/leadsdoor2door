/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And IntroductionPage Section

const illustration = {
  animated: true // Set to false to use static SVG
};
//introduction page
const greeting = {
  username: "www.leadsd2d.de",
  title: "Door 2 Door Leads Kaufen",
  subTitle: emoji(
    "Wir Besuchen potenzielle Kunden personlich  vor ort (Door 2 Door) und summeln bie Bedarf umfassende Informationen (Frageliste), um diese fur den Vertrieb zur Verfugung zu stellen."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  showResumeButton: false
};

const FAQ = {
  username: "Häufige Fragen",
  title: "Häufige Fragen",
  subTitle: emoji(
    "Für welche Photovoltaik-Firmen sind Ihre Kundenanfragen geeignet?\n" +
    "\n" +
    "\n" +
    "Unsere Kundenanfragen sind für Photovoltaik-Firmen jeglicher Größe geeignet, unabhängig davon, ob sie regional oder deutschlandweit tätig sind. Die ausgewählten Unternehmen  erhalten exklusiven Zugang zu vorqualifizierten Kundenkontakten.\n" +
    "\n" +
    "Sie als Photovoltaikfirma geben uns Ihre individuellen Kriterien wie Region, Start des Projektes etc. vor. Anschließend erhalten Sie von uns passgenaue und hochwertige Leads, mit denen Sie erfolgreich Kunden gewinnen.\n" +
    "\n" +
    "Jetzt Beratungstermin vereinbaren!"
  ),
  displayGreeting: true, // Set false to hide this section, defaults to true
  showResumeButton: false
};

// Social Media Links

const socialMediaLinks = {
  //github: "https://github.com/saadpasta",
  //linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "ajlalruddy@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/muhammad.ajlal.7587/",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


// PhotovoltaikLeads Section
const skillsSection = {
  title: "Unsere Leistungen für Ihren Vertriebserfolg:",
  //subTitle: "Alle Anfragen werden personlich gemacht Door2Door, kiene Online Anfragen",
  skills: [
    emoji(
      "⚡ Alle Anfragen werden persönlich gemacht Door2Door, keine Online Anfrage"
    ),
    emoji("⚡ Sie definieren das Zielgebiet für Ihre Leads"),
    emoji(
      "⚡ Es sind auch verschiedene Gebiete bzw. komplexe Vertriebsgebiete realisierbar"
    ),
    emoji(
      "⚡ Es sind jederzeit Änderungen möglich"
    ),
    emoji(
      "⚡ Kurze Mindestlaufzeit und keine Mindestmenge - fester Leadpreis"
    ),
    emoji(
      "⚡ Anlieferung der Leads erfolgt per E-Mail"
    ),

  ],
 section: "Buchen Sie sich jetzt Ihren persönlichen telefonischen Beratungstermin:",

  display: true // Set false to hide this section, defaults to true
};//

// individualle leads
const NewPageSection = {
  title: "Variante 1: Door2 Door Kontakte nach Fragebogen\n" +
    "Variante 2: Door2Door Kontakte nach Fragebogen und telefonisches Nachfassen",
  subTitle: "Durch die Anwendung festgelegter Qualitätsgrundlagen werden alle Anfragen sorgfältig geprüft und ausgewählt.\n" +
    "\n" +
    "Ein Bestandteil dieses Prozesses ist ein Telefonat zwischen dem Interessierten und einem Servicemitarbeiter von unserem team, in dem die wesentlichen Informationen der Anfrage besprochen und überprüfen!.\n" +
    "\n" +
    "Nur Anfragen, bei denen ausdrücklich der Wunsch besteht, dass sich Anbieter zwecks Beratung und Angebotserstellung mit ihnen in Verbindung setzen, werden weiterverarbeitet. Nur diese geprüften Anfragen leiten wir an Sie weiter.\n" +
    "\n" +
    "Die Anlieferung der Leads erfolgt per E-Mail.",
  skills: [

  ],

  display: true // Set false to hide this section, defaults to true
};//



// So functioneret's
const educationInfo = {
  title: "Verkauf durch Ihren Vertrieb",
  subTitle: "Nachdem Sie als ausgewählter Anbieter identifiziert wurden, werden Sie oder Ihre Vertriebspartner/Handelsvertreter mit den Interessierten in Kontakt treten.\n" +
    "\n" +
    "Sie werden diese telefonisch oder persönlich beraten und maßgeschneiderte Angebote erstellen.\n" +
    "Durch Ihre qualifizierte Beratung überzeugen Sie den Kunden von Ihren Dienstleistungen.",
  skills: [

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  ],
  display: true // Set false to hide this section, defaults to true
};//

// Your top 3 proficient stacks/tech experience

const contactInfo = {
  title: emoji("Contact Us ☎️"),
  subtitle:
    "",
  number: "+4917688409447",
  email_address: "info@leadsd2d.de",
  companyName: "Leads door 2 door",
  address: "1234 Street Name, City, Country"
};


//All are hidden
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Variante 1",

      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  NewPageSection,
  FAQ
};
