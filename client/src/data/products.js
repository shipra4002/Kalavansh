import saree1 from "../assets/images/product.jpg";
import saree2 from "../assets/images/detail.jpg";
import artisan1 from "../assets/images/artisan.jpg";

import meena1 from "../assets/images/product1.jpg";
import meena2 from "../assets/images/detail.jpg";

import loom1 from "../assets/images/product.jpg";

const products = [
  {
    id: "saree001",
    name: "Chikankari Saree",
    location: "Lucknow, India",
    image: saree1,

    description:
      "Handcrafted over weeks, this chikankari saree represents generations of delicate embroidery work passed down through artisans in Lucknow.",

    images: [saree1, saree2],

    artisanImage: artisan1,

    artisanStory:
      "Rukhsar Begum has been practicing chikankari embroidery for over 20 years, continuing a legacy rooted in patience, precision, and cultural heritage.",
  },

  {
    id: "meena002",
    name: "Meenakari Jewelry",
    location: "Jaipur, India",
    image: meena1,

    description:
      "A royal craft once patronized by kings, meenakari involves intricate enamel work that brings vibrant colors to life on metal surfaces.",

    images: [meena1, meena2],

    artisanImage: artisan1,

    artisanStory:
      "Rajesh Kumar is a third-generation meenakari artist who continues to preserve the legacy of this intricate art form.",
  },

  {
    id: "loom003",
    name: "Handwoven Fabric",
    location: "Varanasi, India",
    image: loom1,

    description:
      "Each thread in this handwoven fabric is carefully placed using traditional looms, taking days to create a single piece.",

    images: [loom1],

    artisanImage: artisan1,

    artisanStory:
      "Suresh Yadav has spent decades working on traditional looms, crafting textiles that carry both tradition and identity.",
  },
];

export default products;