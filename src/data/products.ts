import {
  GraduationCap,
  Briefcase,
  ShieldUser,
  HardHat,
  Volleyball,
  UtensilsCrossed,
} from "lucide-react";

export const ProductCategories = [
  {
    id: "school-uniform",
    name: "School Uniforms",
    slug: "school-uniforms",
    icon: GraduationCap,
    description: "Durable and comfortable uniforms for primary, secondary schools and colleges.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1785823001/weaverbird/products/e6o1honqvhessjig9kx4.webp",
  },
  {
    id: "corporate-wear",
    name: "Corporate Wear",
    slug: "corporate-uniforms",
    icon: Briefcase,
    description: "Professional custom-made and branded uniforms for offices and businesses.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1785822986/weaverbird/products/mc9tkjk5dqao3cqi3s5s.webp",
  },
  {
    id: "security-uniform",
    name: "Security Uniforms",
    slug: "security-uniforms",
    icon: ShieldUser,
    description: "Professional attire for security personnel and guard services.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1785823005/weaverbird/products/tafnpdsf3j4mkciqdu2v.webp",
  },
  {
    id: "hospitality-uniform",
    name: "Hospitality Uniforms",
    slug: "hospitality-uniforms",
    icon: UtensilsCrossed,
    description: "Uniforms for hotels, restaurants, and catering staff.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1785823348/weaverbird/products/y90zntu1lcqt8jfwgcbu.webp",
  },
  {
    id: "sportswear",
    name: "Sportswear",
    slug: "sports-uniforms",
    icon: Volleyball,
    description:
      "High-performance sportswear and team uniforms designed for schools, clubs, and professional organizations.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1785823032/weaverbird/products/rqqvkwha5mi63kaie1ea.webp",
  },
  {
    id: "ppe-workwear",
    name: "PPE & Workwear",
    slug: "sports-uniforms",
    icon: HardHat,
    description:
      "High-performance sportswear and team uniforms designed for schools, clubs, and professional organizations.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1785823007/weaverbird/products/vanq2kyabbgxliphejy4.webp",
  },
];

export const AllProductCategories = {
  categories: [
    {
      id: "school-uniforms",
      name: "School Uniforms",
      short: "School Uniforms",
      pitch:
        "Quality, comfort and durability designed to withstand daily wear while promoting pride and discipline.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1787899976/weaverbird/products/osw2cqofzjsu3r9qrzff.jpg",
      tagsLabel: "Available fabrics & features",
      tags: ["Poly-Viscose Blends", "Twill", "Gabardine", "100% Cotton", "Knitted Fabrics","Custom Designs & Embroidery","All Sizes & Age Groups","Durable, Easy-Care Finishes"],
      products: [
        {
          name: "Shirts",
          text: "Short and long sleeve options in breathable, easy-iron fabrics.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788525283/weaverbird/products/qx2u62qkvdbze8xghgwe.jpg",
        },
        {
          name: "Sweaters",
          text: "Warm & comfortable knitted layers for classrooms and cooler days.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788522484/weaverbird/products/us7rwylih4z1uzpfpeaz.jpg",
        },
        {
          name: "Trousers",
          text: "Boys and girls cuts in hard-wearing, stain-resistant twill.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788522641/weaverbird/products/iac5d4wcruv58rtxenqz.jpg",
        },
        {
          name: "Shorts",
          text: "Tailored, durable school shorts designed for comfort and active daily wear.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788592769/weaverbird/products/rhonrhok5tw5nzjycslt.jpg",
        },
        {
          name: "Dresses",
          text: "Various styles with classic silhouettes and durable finishes.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788522749/weaverbird/products/imwdtzbcaubssrea432r.jpg",
        },
        {
          name: "Skirts (Pleated / A-Line)",
          text: "Pleated and A-Line styles that hold their shape term after term.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788522890/weaverbird/products/nwuns6zjabdsetmxz4e5.jpg",
        },
        {
          name: "Blazers",
          text: "Sharp, tailored school blazers with reinforced seams.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788523043/weaverbird/products/owa68fjoejeq7kzo7bgr.jpg",
        },
        {
          name: "Socks",
          text: "Reinforced heel-and-toe socks in school colours.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788523172/weaverbird/products/e9v4pyzhvsdaqbyobxvo.jpg",
        },
        {
          name: "Ties",
          text: "Elasticted and standard ties with colour-matched stripes.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788523451/weaverbird/products/vyraioxk6azbz7d5umbp.jpg",
        },
        {
          name: "Cardigans",
          text: "Soft, warm knitted cardigans designed for daily school wear.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788591771/weaverbird/products/meiz64cdfwwok0ouxzks.jpg",
        },
        {
          name: "Fleece Sweaters",
          text: "Cozy, durable fleece sweaters providing extra warmth during colder days.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788592046/weaverbird/products/qypxtnnbom8ghjk55ge3.jpg",
        },
        {
          name: "Leg Warmers",
          text: "Comfortable, snug leg warmers to stay warm on chilly school mornings.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788592191/weaverbird/products/pvk9vza5gjwbhktonz69.jpg",
        },
        {
          name: "Belted Pinafores",
          text: "Smart, tailored pinafores featuring secure belt fastenings.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788592568/weaverbird/products/iybgman9zxgz3bcrjlja.jpg",
        },
        {
          name: "Tracksuits",
          text: "Flexible and breathable sports tracksuits for physical education.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788593181/weaverbird/products/hdqan3uz7sbaouviddpi.jpg",
        },
        {
          name: "School Hijabs",
          text: "Lightweight, comfortable hijabs tailored to meet uniform guidelines.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788593763/weaverbird/products/vgfmgolktm1uxqeu8tim.jpg",
        },
        {
          name: "Dust Coats",
          text: "Protective, easy-care dust coats ideal for science labs and practical work.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788594894/weaverbird/products/e1p88wf8itis0xrkq7qj.jpg",
        },
        {
          name: "T-Shirts",
          text: "Breathable, durable cotton t-shirts ideal for sports and everyday active wear.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788594493/weaverbird/products/xwspjr4q3gxqwj1oolyt.jpg",
        },
        // {
        //   name: "Scarves",
        //   text: "Warm knitted scarves available in official school color schemes.",
        //   image: "",
        // },
        {
          name: "Raincoats",
          text: "Fully waterproof raincoats to keep students dry during stormy weather.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788595204/weaverbird/products/gbwivmfztecs0dgbhkcs.jpg",
        },
        {
          name: "Nightdresses",
          text: "Soft, breathable cotton nightdresses designed for boarding students.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788596375/weaverbird/products/urt5vjrlzdnbasjsqwl1.jpg",
        },
        {
          name: "Marvin Caps",
          text: "Snug knitted marvin beanies for winter morning assemblies.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788596565/weaverbird/products/l0elqpftybypv3wxsnhj.jpg",
        },
        {
          name: "Pyjamas",
          text: "Durable and comfortable two-piece pyjama sets for boarding sleepwear.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788595359/weaverbird/products/cjszxlz32fibjevxd19i.jpg",
        },
        {
          name: "Swimming Costumes",
          text: "Quick-drying, chlorine-resistant swimwear for physical training.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788597093/weaverbird/products/v2azypkwzptnzavi66og.jpg",
        },
        {
          name: "Tunics",
          text: "Classic uniform tunics engineered with reinforced stitching.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788597426/weaverbird/products/xgq3rhozpg1grahwpuz1.jpg",
        },
        {
          name: "Wrappers & Bloomers",
          text: "Comfortable undergarment combinations for active school days.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788598373/weaverbird/products/a9pujcmmn58bvdqy1vs2.jpg",
        },
        {
          name: "Shoes",
          text: "Smart black school shoes built for all-day comfort.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788526646/weaverbird/products/rgdvsd0xtzy7xie9b4hl.jpg",
        },
        {
          name: "School Bags",
          text: "Spacious, hard-wearing bags for books, sports kit and daily use.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788526918/weaverbird/products/dlwkt5bxiatzmugsyrym.jpg",
        },
        {
          name: "Bedsheets",
          text: "Soft, easy-care flat and fitted sheets for dormitories and hostels.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788524345/weaverbird/products/quxj4l55xgvs95lsxseu.jpg",
        },
        {
          name: "Pillows & Pillow Cases",
          text: "Comfortable pillows with matching cases for restful sleep.",
          image:
            "https://res.cloudinary.com/dipkbpinx/image/upload/v1788524203/weaverbird/products/xtqjckfydg1aqq2lpxmb.jpg",
        },
      ],
    },
    {
      id: "corporate-wear",
      name: "Corporate Wear",
      short: "Corporate Wear",
      pitch:
        "Professional, smart and impactful corporate apparel to project confidence and brand unity.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1787899978/weaverbird/products/uwstvrxa25yzth3neknb.jpg",
      tagsLabel: "Features",
      tags: ["Custom Embroidery", "Made-to-Measure Fittings", "Corporate Logo Labels"],
      products: [
        {
          name: "Classic & Modern Suits",
          text: "Timeless and contemporary cuts for a polished boardroom look.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788589017/weaverbird/products/z10xjhpaomzsz7fsity1.jpg",
        },
        {
          name: "Dress Shirts",
          text: "Crisp cotton-blend shirts in slim, regular and tailored fits.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788589665/weaverbird/products/jwfsgxkyfqc6ycjjyjkl.jpg",
        },
        {
          name: "Blouses",
          text: "Elegant office blouses in breathable, easy-care fabrics.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788589885/weaverbird/products/k89jggcyl6fvtca4wgje.jpg",
        },
        {
          name: "Smart Skirts",
          text: "Knee-length and pencil styles for professional uniforms.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788590077/weaverbird/products/kxhj9cujz04c6radooks.jpg",
        },
        {
          name: "Men & Women Trousers",
          text: "Tailored trousers with crease-retention and all-day stretch.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788590175/weaverbird/products/wbmejlbjodiqeajjokdp.jpg",
        },
        {
          name: "Waistcoats",
          text: "Layered formality for reception, hospitality and corporate events.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788590365/weaverbird/products/znzmdwlhzgsm6zvy2bw6.jpg",
        },
        {
          name: "Blazers",
          text: "Structured blazers with subtle branding options.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788590584/weaverbird/products/n00yxsf2jlklcqzid2v3.jpg",
        },
        {
          name: "Cardigans",
          text: "Lightweight knitted layers for climate-controlled offices.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788591113/weaverbird/products/vjqagrc2dnbv3gkadaxr.jpg",
        },
      ],
    },
    {
      id: "workwear-overalls",
      name: "Workwear & Overalls",
      short: "Workwear & Overalls",
      pitch:
        "Engineered for safety, high performance and extreme durability in industrial and technical environments.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1787918649/weaverbird/products/or90p38zcy6uisx0xlgr.jpg",
      tagsLabel: "Specifications",
      tags: [
        "Heavy-Duty Twill / Drill / Canvas",
        "Reinforced Stitching",
        "Reflective Tape Compliance",
      ],
      products: [
        {
          name: "Full Body Overalls",
          text: "All-in-one protection with reinforced knees and multiple pockets.",
          image: "",
        },
        {
          name: "Work Shirts",
          text: "Tough shirts built for workshops, warehouses and fieldwork.",
          image: "",
        },
        {
          name: "Work Trousers",
          text: "Heavy-duty trousers with tool pockets and reinforced stress points.",
          image: "",
        },
        {
          name: "High-Vis Safety Jackets",
          text: "Reflective jackets for roadside, construction and low-light sites.",
          image: "",
        },
        {
          name: "Dust Coats",
          text: "Light protective coats for factories, labs and clean environments.",
          image: "",
        },
        {
          name: "Lab Coats",
          text: "Hygienic white coats with secure pockets and easy laundering.",
          image: "https://res.cloudinary.com/dipkbpinx/image/upload/v1788594894/weaverbird/products/e1p88wf8itis0xrkq7qj.jpg",
        },
        {
          name: "Utility Vests",
          text: "Multi-pocket vests for technicians, engineers and outdoor teams.",
          image: "",
        },
      ],
    },
    {
      id: "medical-wear",
      name: "Medical Wear",
      short: "Medical Wear",
      pitch:
        "Easy-care, hygienic and breathable apparel designed for long hours and healthcare excellence.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1787899977/weaverbird/products/oowc2jma8oz3fiidtchf.jpg",
      tagsLabel: "Features",
      tags: ["Anti-Bacterial", "Easy-Care Maintenance", "Soft Ergonomic Fit"],
      products: [
        {
          name: "Scrub Suits (V-Neck)",
          text: "V-neck scrub sets in soft, anti-bacterial fabric.",
          image: "",
        },
        {
          name: "Medical Trousers",
          text: "Comfortable drawstring trousers with reinforced waistbands.",
          image: "",
        },
        {
          name: "Doctor Lab Coats",
          text: "Professional lab coats with a tailored fit and ample pockets.",
          image: "",
        },
        {
          name: "Nurse Uniforms",
          text: "Classic and modern nurse dresses and tunics.",
          image: "",
        },
        {
          name: "Theatre Wear",
          text: "Sterile-style sets for operating and procedure areas.",
          image: "",
        },
        {
          name: "Tunic Tops",
          text: "Smart healthcare tunics with contrast trim options.",
          image: "",
        },
        {
          name: "Patient Gowns",
          text: "Back-fastening gowns designed for dignity and easy access.",
          image: "",
        },
        {
          name: "Pharmacy & Dental Wear",
          text: "Clean, professional uniforms for pharmacy and dental staff.",
          image: "",
        },
      ],
    },
    {
      id: "hospitality-wear",
      name: "Hospitality Wear",
      short: "Hospitality Wear",
      pitch: "Smart, elegant and memorable uniforms for hotels, restaurants, cafés and spas.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1787920412/weaverbird/products/d8cgm1zjbhxg3dmb2sd8.jpg",
      tagsLabel: "Finishes",
      tags: ["Stain-Resistant Options", "Custom Trim & Piping", "Logo Embroidery"],
      products: [
        {
          name: "Chef Jackets",
          text: "Double-breasted jackets in breathable, kitchen-safe fabric.",
          image: "",
        },
        {
          name: "Kitchen Wear",
          text: "Practical chef trousers, aprons and kitchen shirts.",
          image: "",
        },
        {
          name: "Waiter Uniforms",
          text: "Sharp shirts, waistcoats and dresses for front-of-house teams.",
          image: "",
        },
        {
          name: "Housekeeping Sets",
          text: "Comfortable, professional uniforms for housekeeping staff.",
          image: "",
        },
        {
          name: "Reception Suits",
          text: "Immaculate suiting for hotel and lobby reception teams.",
          image: "",
        },
        {
          name: "Restaurant Polos",
          text: "Branded polos for casual dining and quick-service teams.",
          image: "",
        },
        {
          name: "Aprons",
          text: "Waist and bib aprons in colours to match your brand.",
          image: "",
        },
        {
          name: "Spa Wear",
          text: "Relaxed, soft uniforms for wellness and spa environments.",
          image: "",
        },
        {
          name: "Headwear",
          text: "Chef hats, caps and bandanas for kitchen and service staff.",
          image: "",
        },
      ],
    },
    {
      id: "tshirts-polos",
      name: "T-Shirts & Polo Shirts",
      short: "T-Shirts & Polos",
      pitch:
        "Versatile, stylish and high-retention apparel ideal for corporate identity, events and promotions.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1788586892/weaverbird/ka0f3otvgrs8o5ckbbdu.jpg",
      tagsLabel: "Customization",
      tags: ["Screen Printing", "Heat Transfer", "High-Density Embroidery"],
      products: [
        {
          name: "Classic Polos",
          text: "Timeless piqué polos for uniforms, events and gifting.",
          image: "",
        },
        {
          name: "Piqué Polos",
          text: "Textured cotton-rich polos with a premium feel.",
          image: "",
        },
        {
          name: "Contrast Collar Polos",
          text: "Two-tone collar and cuff styles for standout branding.",
          image: "",
        },
        {
          name: "Round Neck Tees",
          text: "Everyday crew neck tees in soft, colour-fast jersey.",
          image: "",
        },
        {
          name: "V-Neck Tees",
          text: "Modern V-neck tees for casual and promotional use.",
          image: "",
        },
        {
          name: "Performance Polos",
          text: "Moisture-wicking polos for active teams and outdoor work.",
          image: "",
        },
        {
          name: "Long Sleeve Tees",
          text: "Layer-friendly long sleeves for cooler days and events.",
          image: "",
        },
      ],
    },
    {
      id: "jumpers-sweaters",
      name: "Jumpers, Sweaters & Fleece",
      short: "Jumpers & Sweaters",
      pitch: "Superior warmth and clean aesthetics without compromising professional looks.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1788587091/weaverbird/udemfgx1abiztv6qsjic.jpg",
      tagsLabel: "Knit options",
      tags: ["Anti-Pilling Yarns", "Acrylic & Cotton Blends", "Custom School Stripes"],
      products: [
        {
          name: "V-Neck Jumpers",
          text: "Classic V-neck knits for school, corporate and casual use.",
          image: "",
        },
        {
          name: "Crew Neck Jumpers",
          text: "Versatile round-neck sweaters in cotton and acrylic blends.",
          image: "",
        },
        {
          name: "Cardigans",
          text: "Button-front cardigans for layering across seasons.",
          image: "",
        },
        {
          name: "Zip-Neck Pullovers",
          text: "Zip-neck styles for sport, work and smart-casual looks.",
          image: "",
        },
        {
          name: "Sweatshirts",
          text: "Cotton-blend sweatshirts perfect for branding and uniforms.",
          image: "",
        },
        {
          name: "Hoodies",
          text: "Cosy hooded sweatshirts with kangaroo pockets.",
          image: "",
        },
        {
          name: "Sleeveless Vests",
          text: "Lightweight sleeveless layers for active wear and schools.",
          image: "",
        },
        {
          name: "Fleece Jackets",
          text: "Warm, quick-drying fleece jackets for work and teams.",
          image: "",
        },
      ],
    },
    {
      id: "tracksuits-sportswear",
      name: "Tracksuits & Sportswear",
      short: "Tracksuits & Sportswear",
      pitch: "High-performance, moisture-wicking apparel built for movement and endurance.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1788026880/weaverbird/products/gkr1supyabq3o85vqotx.jpg",
      tagsLabel: "Performance",
      tags: ["Moisture-Wicking", "Sublimation Printing", "Team Numbering & Names"],
      products: [
        {
          name: "Team Tracksuits",
          text: "Matching tracksuit sets for squads, schools and clubs.",
          image: "",
        },
        {
          name: "Sport Shorts",
          text: "Lightweight shorts for training, match day and gym sessions.",
          image: "",
        },
        {
          name: "Training Wear",
          text: "Jerseys and tops designed for intensive practice sessions.",
          image: "",
        },
        {
          name: "Performance Sets",
          text: "Coordinated performance tops and bottoms for athletes.",
          image: "",
        },
        {
          name: "Hoodies",
          text: "Warm-up hoodies for pre- and post-training comfort.",
          image: "",
        },
        {
          name: "Windbreakers",
          text: "Light shell jackets that block wind without overheating.",
          image: "",
        },
        {
          name: "Kids Sportswear",
          text: "Sized-down sportswear for school teams and youth clubs.",
          image: "",
        },
      ],
    },
    {
      id: "shukas-heritage",
      name: "Maasai Shukas & African Heritage Apparel",
      short: "Shukas & Cultural",
      pitch:
        "Authentic, vibrant and culturally rich apparel celebrating tradition and quality craftsmanship.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1788545785/weaverbird/uhcxkgl1sb7sfkpevaxw.jpg",
      tagsLabel: "Heritage",
      tags: ["Made in Africa", "Gift & Export Packaging", "Bulk Event Orders"],
      products: [
        {
          name: "Classic Checks Shuka",
          text: "Traditional checked shukas in bold, iconic patterns.",
          image: "",
        },
        {
          name: "Modern Pattern Shuka",
          text: "Contemporary shuka designs for fashion and events.",
          image: "",
        },
        {
          name: "Striped Shuka",
          text: "Striped heritage wraps in vibrant colour combinations.",
          image: "",
        },
        {
          name: "Premium Luxury Fabrics",
          text: "Finer, softer shuka fabrics for gifts and special occasions.",
          image: "",
        },
        {
          name: "Plain Editions",
          text: "Solid-colour shukas for understated everyday wear.",
          image: "",
        },
        {
          name: "Black & White Editions",
          text: "Monochrome shukas with bold contrast and clean lines.",
          image: "",
        },
      ],
    },
    {
      id: "promotional-items",
      name: "Promotional Items & Merchandise",
      short: "Promotional & Bags",
      pitch: "High-impact branded goods to boost brand awareness and customer loyalty.",
      banner:
        "https://res.cloudinary.com/dipkbpinx/image/upload/v1788587823/weaverbird/elpt8uctwqh3twug68c6.jpg",
      tagsLabel: "Branding",
      tags: ["Pad & Screen Printing", "Laser Engraving", "Full-Colour Wraps"],
      products: [
        {
          name: "Branded Backpacks",
          text: "Durable backpacks with printed or embroidered logos.",
          image: "",
        },
        {
          name: "Tote Bags",
          text: "Reusable cotton and canvas totes for events and retail.",
          image: "",
        },
        {
          name: "Water Bottles",
          text: "Metal and BPA-free bottles branded with your logo.",
          image: "",
        },
        {
          name: "Mugs",
          text: "Ceramic mugs perfect for corporate gifts and giveaways.",
          image: "",
        },
        {
          name: "Caps",
          text: "Baseball and snapback caps with embroidered branding.",
          image: "",
        },
        {
          name: "Notebooks",
          text: "Branded notebooks and journals for offices and events.",
          image: "",
        },
        {
          name: "USB Drives",
          text: "Custom-engraved USB drives for tech-focused promotions.",
          image: "",
        },
        {
          name: "Pens",
          text: "Printed pens in a range of colours and finishes.",
          image: "",
        },
        {
          name: "Keyrings",
          text: "Metal and acrylic keyrings for everyday brand visibility.",
          image: "",
        },
        {
          name: "Skorts",
          text: "Practical skorts for school, sport and promotional kits.",
          image: "",
        },
        {
          name: "Masks",
          text: "Reusable branded face masks for staff and event packs.",
          image: "",
        },
      ],
    },
  ],
};
