// Profile Image
import profile from "@/assets/profile.jpg";

// Enter your Personal Details here
export const personalDetails = {
  name: "Ritesh Sahu",
  img: profile,
  resume: {
    link: "https://drive.google.com/uc?export=download&id=1b0wExD1mK4FF0Jg07MX9uAD2jRagg64e", // one page
    // link: "https://drive.google.com/uc?export=download&id=1acBObx7TcsxguW4im8JEiSLcAjY5TKFQ", // two page
    title: "Download Ritesh Sahu's CV",
  },
  mail: "riteshsahu314@gmail.com",
  about: `I'm a passionate software engineer based in Indore, India, with over 4 years of experience in the Computer Software industry. My expertise lies in Front-end Development, particularly with React.js, React Native, JavaScript, HTML, and CSS. I take pride in delivering clean, maintainable code and have successfully brought numerous web projects to life from scratch.
  
  Beyond front-end, I have a solid understanding of backend technologies, including Node.js, Nest.js, and MongoDB, along with knowledge of Firebase. I am always eager to learn and explore emerging technologies, striving to create intuitive and impactful user experiences that drive business success.`,
};

export const metaDetails = {
  author: personalDetails.name,
  title: "Ritesh Sahu | Web Developer",
  description:
    "Seasoned web development expert with a passion for creating intuitive and impactful user experiences",
  url: "https://riteshsahu.github.io/",
  twitterId: "@__ritesh",
  keywords:
    "design, development, web, riteshsahu314, ritesh, sahu, javascript, indore, nodejs, fabricjs, konvajs",
  ogImg: {
    url: "https://riteshsahu.github.io/og.png",
    width: "1280",
    height: "800",
    type: "image/png",
  },
};

// Enter your Work Experience here
export const workDetails = [
  {
    position: "Development Engineer",
    company: `AVIZVA Solutions`,
    location: "Indore, India",
    type: "Full Time",
    duration: "Nov 2019 - June 2022",
  },
  {
    position: "Full Stack Developer",
    company: `Webiwork Technologies`,
    location: "Indore, India",
    type: "Full Time",
    duration: "June 2022 - Present",
  },
];

// Enter your Education Details here
export const educationDetails = [
  {
    position: "Bachelor of Computer Applications",
    company: "Indira Gandhi National Open University",
    location: "Indore, India",
    duration: "2019",
  },
];
