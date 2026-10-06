/* Blog posts. To add an article, append an object to BLOG_POSTS — the listing,
   article page, category filters and sitemap pick it up automatically. */

export const BLOG_CATEGORIES = [
  "School Uniforms",
  "Corporate Wear",
  "Workwear",
  "Medical Wear",
  "Hospitality",
  "Sportswear",
  "Garment Care",
  "Manufacturing",
  "Fabric & Materials",
  "Branding & Embroidery",
  "Company News",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogSection = { heading: string; paragraphs?: string[]; bullets?: string[] };

export type BlogLink = { label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
  /** Set when the article lives on its own dedicated route instead of /blog/$slug */
  externalPath?: string;
  sections: BlogSection[];
  links: BlogLink[];
};

const IMG = {
  school:
    "https://res.cloudinary.com/dipkbpinx/image/upload/v1788935691/weaverbird/products/qtsxkvly09ai4hgg8kay.jpg",
  corporate:
    "https://res.cloudinary.com/dipkbpinx/image/upload/v1788935879/weaverbird/products/ya8npakcvkqnv3voxfss.jpg",
  factory:
    "https://res.cloudinary.com/dipkbpinx/image/upload/v1783869677/weaverbird/nmszxatomphtat2xspfs.jpg",
  products:
    "https://res.cloudinary.com/dipkbpinx/image/upload/v1787899976/weaverbird/products/nabth0lum2fljecqgqfw.jpg",
  og: "https://res.cloudinary.com/dipkbpinx/image/upload/w_1200,h_630,c_fill,q_auto,f_jpg/v1788943972/weaverbird/mnpf4rlrru8sz3vzy6xl.jpg",
  labels:
    "https://res.cloudinary.com/dipkbpinx/image/upload/v1788857348/weaverbird/products/ptgzzboohgki2hovhhf1.jpg",
};

const QUOTE: BlogLink = { label: "Request a quote", href: "/quote" };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-school-uniform-supplier",
    title: "How to Choose the Right School Uniform Supplier in Kenya",
    excerpt:
      "The questions school boards and bursars should ask before committing to a uniform supplier for the coming years.",
    category: "School Uniforms",
    date: "2026-09-28",
    readMinutes: 5,
    image: IMG.school,
    imageAlt: "Students wearing Weaverbird school uniforms",
    featured: true,
    sections: [
      {
        heading: "Manufacturer or reseller?",
        paragraphs: [
          "A supplier who makes garments in their own factory can control fabric, colour and stitching across repeat orders. A reseller depends on whoever they buy from that season. Ask where the uniforms are actually produced and whether you can visit.",
        ],
      },
      {
        heading: "Consistency across terms",
        paragraphs: [
          "Parents notice when this year's sweater is a different shade from last year's. Ask how the supplier keeps colour and sizing consistent between batches.",
        ],
      },
      {
        heading: "What to ask for",
        bullets: [
          "Physical samples of each garment before you sign off",
          "A full size range, including larger and smaller sizes",
          "How badges and school names are applied — embroidery, printing or woven labels",
          "Where parents can buy replacements during the year",
          "Realistic lead times for back-to-school orders",
        ],
      },
    ],
    links: [
      { label: "School uniforms we make", href: "/products#school-uniforms" },
      { label: "Find a Weaverbird shop", href: "/branches" },
      QUOTE,
    ],
  },
  {
    slug: "ordering-corporate-uniforms-in-bulk",
    title: "What to Consider When Ordering Corporate Uniforms in Bulk",
    excerpt:
      "Sizing, branding, fabric and delivery planning — the practical checklist for HR and admin teams.",
    category: "Corporate Wear",
    date: "2026-09-21",
    readMinutes: 4,
    image: IMG.corporate,
    imageAlt: "Branded corporate wear produced by Weaverbird",
    sections: [
      {
        heading: "Collect sizes early",
        paragraphs: [
          "Most delays in corporate orders come from incomplete size lists. Gather staff sizes before requesting a final quote, and agree how late joiners will be handled.",
        ],
      },
      {
        heading: "Agree branding upfront",
        paragraphs: [
          "Share your logo files and brand colours at the start. Decide whether each garment should be embroidered or printed, and approve a sample before production begins.",
        ],
      },
      {
        heading: "Plan for re-orders",
        paragraphs: [
          "Staff grow, leave and join. Choose fabrics and designs that your supplier can reproduce later so new uniforms match existing ones.",
        ],
      },
    ],
    links: [
      { label: "Corporate wear range", href: "/products#corporate-wear" },
      { label: "Embroidery service", href: "/services#embroidery" },
      QUOTE,
    ],
  },
  {
    slug: "embroidery-vs-screen-printing",
    title: "Embroidery vs Screen Printing: Which Branding Method Is Right for Your Uniforms?",
    excerpt:
      "Both methods put your logo on a garment, but they look, feel and wear differently. Here's how to choose.",
    category: "Branding & Embroidery",
    date: "2026-09-14",
    readMinutes: 4,
    image: IMG.labels,
    imageAlt: "Close-up of branding and labels on uniforms",
    sections: [
      {
        heading: "Embroidery",
        paragraphs: [
          "Stitched directly into the fabric, embroidery gives a raised, premium finish. It suits blazers, polo shirts, caps and sweaters, and holds up well to repeated washing.",
        ],
      },
      {
        heading: "Screen printing",
        paragraphs: [
          "Ink is pressed through a screen onto the fabric. It works well for larger designs and bold colours on T-shirts, sportswear and event merchandise.",
        ],
      },
      {
        heading: "Quick guide",
        bullets: [
          "Small logo on a formal garment — embroidery",
          "Large back print or many colours — screen printing",
          "Heavy or textured fabric — usually embroidery",
          "Light T-shirts and promotional items — usually screen printing",
        ],
      },
    ],
    links: [
      { label: "Embroidery service", href: "/services#embroidery" },
      { label: "Screen printing service", href: "/services#screen-printing" },
      QUOTE,
    ],
  },
  {
    slug: "choosing-fabric-for-school-uniforms",
    title: "How to Choose the Right Fabric for School Uniforms",
    excerpt:
      "Comfort, durability and ease of care — what to weigh up when selecting uniform fabrics.",
    category: "Fabric & Materials",
    date: "2026-09-07",
    readMinutes: 4,
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1791272234/weaverbird/products/orxm302g7bcgv4mjljx8.jpg",
    imageAlt: "Selection of uniform fabrics and garments",
    sections: [
      {
        heading: "Think about the climate",
        paragraphs: [
          "Learners spend long days in their uniforms. Breathable fabrics suit warmer areas, while sweaters and heavier knits matter in cooler regions.",
        ],
      },
      {
        heading: "Durability and care",
        paragraphs: [
          "Uniforms are washed often, sometimes by hand. Ask for fabrics that keep their colour and shape, and check the care instructions are realistic for families.",
        ],
      },
      {
        heading: "See it before you approve it",
        paragraphs: [
          "Always ask for fabric swatches or a finished sample. Feel the weight, check the colour in daylight, and wash a sample if you can.",
        ],
      },
    ],
    links: [
      { label: "Weaving and knitting", href: "/services#weaving" },
      { label: "School uniforms", href: "/products#school-uniforms" },
      QUOTE,
    ],
  },
  {
    slug: "how-to-care-for-school-uniforms",
    title: "How to Care for School Uniforms and Make Them Last Longer",
    excerpt:
      "Simple washing, drying, ironing and storage habits that help school uniforms stay clean, smart and presentable throughout the school year.",
    category: "Garment Care",
    date: "2026-08-31",
    readMinutes: 5,
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1791272067/weaverbird/products/hqlgycer3ciguaarhuqr.jpg",
    imageAlt: "Neatly kept school uniforms",

    sections: [
      {
        heading: "Why Proper Uniform Care Matters",
        paragraphs: [
          "School uniforms go through a lot during the year. Shirts, trousers, skirts, sweaters and other garments may be worn several times each week, washed frequently and exposed to everything from classroom activities to outdoor play.",
          "Good care helps uniforms maintain their colour, shape and overall appearance for longer. It can also reduce unnecessary wear, helping parents get more use from each garment before it needs to be replaced.",
          "Different garments and fabrics may require different care, so the garment care label should always be the first point of reference.",
        ],
      },

      {
        heading: "Wash Uniforms the Right Way",
        paragraphs: [
          "Frequent washing does not necessarily have to mean faster wear. Much of the difference comes down to how the garments are washed. Before putting a uniform into the washing machine, check pockets, close zips where appropriate and separate garments by colour.",
          "Turning shirts, T-shirts, sweaters and other suitable garments inside out before washing can help reduce direct friction on the outer surface. This is particularly useful for garments with embroidery, printed designs or school branding.",
          "Use an appropriate detergent and follow the recommended washing temperature on the care label. Excessively harsh washing or unsuitable products can contribute to fading and unnecessary fabric wear.",
        ],
        bullets: [
          "Separate whites, darks and strongly coloured garments where appropriate.",
          "Treat visible stains before the garment goes into the normal wash.",
          "Avoid overloading the washing machine so garments can move and rinse properly.",
        ],
      },

      {
        heading: "Treat Stains as Soon as Possible",
        paragraphs: [
          "Food, ink, mud, grass and other stains are a normal part of everyday school life. The sooner a stain is treated, the better the chance of removing it without repeated washing or aggressive scrubbing.",
          "Remove any excess material carefully and use a stain treatment suitable for the garment's fabric and colour. Avoid rubbing a fresh stain aggressively, as this can spread it or work it deeper into the fibres.",
          "Before drying or ironing the garment, check whether the stain has disappeared. Heat can make some stains more difficult to remove.",
        ],
      },

      {
        heading: "Dry Uniforms Carefully",
        paragraphs: [
          "Drying is an important but sometimes overlooked part of uniform care. Where the garment instructions allow, air drying is a gentle option for many everyday school uniform items.",
          "Strong, prolonged sunlight can contribute to fading, particularly on dark or brightly coloured garments. Drying coloured uniforms in a well-ventilated shaded area can help preserve their appearance.",
          "Sweaters and other knitwear may need additional care because hanging a wet knitted garment can sometimes pull it out of shape. Follow the care label and reshape garments where necessary before allowing them to dry.",
        ],
      },

      {
        heading: "Iron at the Correct Temperature",
        paragraphs: [
          "A well-ironed uniform looks neat and presentable, but excessive heat can damage some fabrics, prints and trims. Always check the garment label before selecting the iron temperature.",
          "For shirts, skirts and trousers, ironing while the fabric is slightly damp can make creases easier to remove. Take additional care around embroidered logos, printed branding and reflective details.",
          "Where appropriate, turn embroidered or decorated areas inside out and iron from the reverse rather than placing a hot iron directly over the decoration.",
        ],
      },

      {
        heading: "Take Extra Care of Sweaters and Knitwear",
        paragraphs: [
          "School sweaters and cardigans often need different care from woven shirts and trousers. Rough washing, excessive heat and poor drying methods can affect their shape and appearance.",
          "Wash knitwear according to its care label and avoid unnecessarily high temperatures. After washing, gently reshape the garment rather than stretching it. Store sweaters neatly once completely dry.",
          "If a sweater develops small loose fibres or surface pilling over time, avoid pulling them by hand because this can damage the knit. Use an appropriate fabric-care method instead.",
        ],
      },

      {
        heading: "Store Uniforms Properly",
        paragraphs: [
          "How uniforms are stored between wears also affects how smart they look. Shirts, dresses, skirts, trousers and blazers should be hung neatly where appropriate to reduce unnecessary creasing.",
          "Sweaters and heavier knitwear are generally better folded neatly rather than left hanging for long periods, as hanging can place stress on the shoulders and gradually affect their shape.",
          "Make sure garments are completely dry before placing them in a wardrobe or school bag. Clean, dry and well-ventilated storage helps keep uniforms fresh and ready for the next school day.",
        ],
      },

      {
        heading: "Rotate Uniforms Where Possible",
        paragraphs: [
          "Having more than one set of frequently worn uniform items can make school-week care easier. Rotating shirts, blouses, trousers, skirts and other everyday pieces gives each garment time to be properly washed and dried before it is worn again.",
          "Rotation can also distribute everyday wear across several garments rather than placing all the strain on one item. This can be particularly helpful for uniforms worn five days a week.",
        ],
      },

      {
        heading: "A Little Care Goes a Long Way",
        paragraphs: [
          "School uniforms are made for regular use, but simple care habits can make a noticeable difference to how long they remain smart and presentable. Washing according to the care label, treating stains promptly, drying garments appropriately and using the correct ironing temperature all help protect the uniform.",
          "It is also worth checking uniforms periodically for loose buttons, small seam openings or other minor issues. Dealing with these early can prevent a small repair from becoming a larger problem.",
          "For stubborn stains that need more attention, see our dedicated stain removal guide for practical advice on dealing with common uniform stains.",
        ],
      },
    ],

    links: [
      {
        label: "Stain Removal Guide",
        href: "/blog/uniform-care",
      },
      {
        label: "Explore School Uniforms",
        href: "/products#school-uniforms",
      },
    ],
  },
  {
    slug: "fabric-quality-in-workwear",
    title: "Why Fabric Quality Matters in Workwear and Industrial Uniforms",
    excerpt:
      "Workwear takes more strain than office clothing. Here's what to look for when choosing overalls and industrial uniforms.",
    category: "Workwear",
    date: "2026-08-24",
    readMinutes: 4,
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1791272396/weaverbird/products/f8fiiswrdi2docqwof7j.jpg",
    imageAlt: "Garment production at the Weaverbird factory",
    sections: [
      {
        heading: "Built for the job",
        paragraphs: [
          "Overalls and dust coats face friction, heavy washing and sometimes oil or chemicals. Stronger fabrics and reinforced seams mean fewer replacements.",
        ],
      },
      {
        heading: "Comfort affects safety",
        paragraphs: [
          "Workers who are comfortable keep their workwear on properly. Consider breathability, fit and freedom of movement as well as strength.",
        ],
      },
    ],
    links: [{ label: "Workwear & overalls", href: "/products#workwear-overalls" }, QUOTE],
  },
  {
    slug: "choosing-medical-scrubs",
    title: "A Guide to Choosing Medical Scrubs and Healthcare Uniforms",
    excerpt:
      "Fit, colour coding and easy care — what hospitals and clinics should consider when ordering scrubs.",
    category: "Medical Wear",
    date: "2026-08-17",
    readMinutes: 4,
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1788938310/weaverbird/products/bsdlmd5g6lowhknqrx1t.jpg",
    imageAlt: "Healthcare uniforms",
    sections: [
      {
        heading: "Colour coding by role",
        paragraphs: [
          "Many facilities use different colours for different departments or roles, making it easier for patients and staff to identify who is who.",
        ],
      },
      {
        heading: "Frequent washing",
        paragraphs: [
          "Healthcare garments are washed often. Choose fabrics that tolerate regular laundering without fading or losing shape.",
        ],
      },
      {
        heading: "Fit and movement",
        paragraphs: [
          "Staff bend, lift and move all shift. A comfortable cut with practical pockets makes a real difference.",
        ],
      },
    ],
    links: [{ label: "Medical wear range", href: "/products#medical-wear" }, QUOTE],
  },
  {
    slug: "procurement-guide-bulk-uniforms",
    title: "What Procurement Teams Should Know Before Ordering Uniforms in Bulk",
    excerpt:
      "Specifications, samples and timelines — how to prepare a uniform tender or bulk order that runs smoothly.",
    category: "Manufacturing",
    date: "2026-08-10",
    readMinutes: 5,
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1791272592/weaverbird/products/j7hgsxcyxuxsm8teshvb.jpg",
    imageAlt: "Bulk uniform order",
    sections: [
      {
        heading: "Write a clear specification",
        paragraphs: [
          "List each garment, colour, fabric preference, branding and quantity. Clear specifications make quotes easier to compare.",
        ],
      },
      {
        heading: "Ask for samples",
        paragraphs: [
          "Approve a physical sample before mass production. It is the best way to avoid surprises.",
        ],
      },
      {
        heading: "Allow enough time",
        paragraphs: [
          "Build in time for sampling, production and delivery, especially around busy periods such as school openings.",
        ],
      },
    ],
    links: [
      { label: "Downloads & resources", href: "/downloads" },
      { label: "Bulk manufacturing", href: "/services#bulk-manufacturing" },
      QUOTE,
    ],
  },
  {
    slug: "from-fabric-to-finished-garment",
    title: "From Fabric to Finished Garment: How Weaverbird Manufactures Uniforms",
    excerpt:
      "A look at the stages every order goes through at our Thika factory, from design to delivery.",
    category: "Manufacturing",
    date: "2026-08-03",
    readMinutes: 4,
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1788856308/weaverbird/products/efogndhldntwol8hg43c.jpg",
    imageAlt: "Inside the Weaverbird factory in Thika",
    sections: [
      {
        heading: "Design and sampling",
        paragraphs: [
          "Every order begins with your requirements, fabric choices and an approved sample.",
        ],
      },
      {
        heading: "Weaving, cutting and stitching",
        paragraphs: ["Fabric is woven or knitted, then cut and stitched on our production lines."],
      },
      {
        heading: "Branding, quality control and delivery",
        paragraphs: [
          "Garments are embroidered or printed, inspected, packed and delivered to your institution.",
        ],
      },
    ],
    links: [
      { label: "Our services", href: "/services" },
      { label: "About Weaverbird", href: "/about" },
      QUOTE,
    ],
  },
  {
    slug: "why-consistent-fabric-colour-matters",
    title: "Why Consistent Fabric Colour Matters for School and Corporate Uniforms",
    excerpt:
      "Mismatched shades make a uniform look anything but uniform. Here's why colour consistency matters.",
    category: "Fabric & Materials",
    date: "2026-07-27",
    readMinutes: 3,
    image: IMG.school,
    imageAlt: "Matching school uniforms",
    sections: [
      {
        heading: "A uniform should look uniform",
        paragraphs: [
          "When a new batch is a different shade, old and new garments stand out side by side. That undermines the identity the uniform is meant to create.",
        ],
      },
      {
        heading: "How to protect consistency",
        bullets: [
          "Keep an approved reference sample",
          "Work with a supplier who controls fabric production",
          "Re-order from the same supplier where possible",
        ],
      },
    ],
    links: [
      { label: "Weaving and knitting", href: "/services#weaving" },
      { label: "Corporate wear", href: "/products#corporate-wear" },
      QUOTE,
    ],
  },
  {
    slug: "uniform-care",
    externalPath: "/blog/uniform-care",
    title: "Uniform Care: How to Remove Common Stains",
    excerpt:
      "Practical steps for removing oil, ink, blood, grass and sweat stains from school, corporate and workwear uniforms.",
    category: "Garment Care",
    date: "2026-07-20",
    readMinutes: 6,
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1791272650/weaverbird/products/wgqurojefvazdxl9ljrc.jpg",
    imageAlt: "Uniform care guide",
    sections: [],
    links: [],
  },
];

export const ARTICLE_POSTS = BLOG_POSTS.filter((p) => !p.externalPath);

export function postPath(p: BlogPost) {
  return p.externalPath ?? `/blog/${p.slug}`;
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Guides relevant to each product category id on /products */
export const PRODUCT_GUIDES: Record<string, string> = {
  "school-uniforms": "how-to-choose-the-right-school-uniform-supplier",
  "corporate-wear": "ordering-corporate-uniforms-in-bulk",
  "workwear-overalls": "fabric-quality-in-workwear",
  "medical-wear": "choosing-medical-scrubs",
};
