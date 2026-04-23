import glass from "../assets/images/story/glass.jpg";
import glass1 from "../assets/images/story/glass1.0.jpg";
import glassMain from "../assets/images/story/glassMain.jpg";
import artisan from "../assets/images/story/sagar.jpg";
import video from "../assets/videos/glassVideo.mp4";

import dhokra from "../assets/images/story/dhokra.jpeg";
import dhokra1 from "../assets/images/story/dhokra1.jpeg";
import dhokraMain from "../assets/images/story/dhokraMain.jpeg";
import rajendra from "../assets/images/story/rajendra.png";
import dVideo from "../assets/videos/dhokraVideo.mp4";

import dupatta from "../assets/images/story/dupatta.jpeg";
import dupatta1 from "../assets/images/story/dupatta1.png";
import dupattaMain from "../assets/images/story/dupattaMain.jpeg";
import ravi from "../assets/images/story/ramesh.jpeg";
import dDupatta from "../assets/videos/dupattaVideo.mp4";

const products = [
  {
    id: "meenakari001",

    name: "Meenakari Glass",
    location: "Rajasthan & Gujarat, India",

    images: [glass, glass1],
    mainImage: glassMain,

    video: video,

    artisanImage: artisan,

    description:
      "Meenakari is a traditional enamel art form known for its vibrant colors and intricate detailing, originating from Rajasthan and Gujarat.",

    artisanStory:
      "Sagar, the artisan behind this craft, turned to meenakari after struggling to find a job post graduation. Today, his work keeps both tradition and livelihood alive.",

    quote:
      "Degree ka kya kare? Degree toh bas ek kaagaz ka tukda hai.",
  },

  {
    id: "silk001",
    name: "Silk Woven Dupatta",
    location: "West Bengal",
    images: [dupatta, dupatta1],
    mainImage: dupattaMain,
    video: dDupatta,
    artisanImage: ravi,
    description: "Originating from Bishnupur, the silk weaving tradition is one of India’s most intricate crafts. Inspired by Baluchari sarees, each piece carries stories woven into fabric — not just patterns, but culture itself.",
    artisanStory: "Ravindranath has been weaving silk day and night for years. Despite the high value of these pieces in the market, his life remains unchanged. For him, weaving is not luxury — it is labor, routine, and survival.",
    quote:"Log lakhon mein kharidte hain, par hum toh bas mazdoor hain... kaam karte hain aur de dete hain.",
    subQuote: "Mera beta yeh kaam nhi karega, usse joh pasand hai wo karega.",
    featured: true,
  },
  
  {
  id: "dhokra001",
  name: "Dhokra Art",
  location: "Bastar, Chhattisgarh",

  images: [dhokra, dhokra1], // replace later with real dhokra images
  mainImage: dhokraMain,
  video: dVideo,

  artisanImage: rajendra, // replace with Rajendra's image later

  description:
    "Dhokra is one of the oldest metal casting techniques in the world, dating back over 4,000 years. Each piece is made using the lost-wax process, where no two creations are ever the same.",

  artisanStory:
    "Rajendra is one of the few artisans still practicing Dhokra today. For him, this craft is not just a livelihood but a legacy passed down through generations. Despite the effort and time it takes, the demand is slowly fading.",

  quote:
    "Yeh sirf kala nahi hai, yeh hamari pehchaan hai.",
}

];

export default products;