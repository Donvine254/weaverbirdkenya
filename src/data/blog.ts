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
      "Choosing a school uniform supplier is a long-term decision. Here are the key questions school boards, bursars and administrators should ask before committing to a supplier.",
    category: "School Uniforms",
    date: "2026-09-28",
    readMinutes: 8,
    image: IMG.school,
    imageAlt: "Students wearing Weaverbird school uniforms",
    featured: true,
    sections: [
      {
        heading: "Why choosing the right uniform supplier matters",
        paragraphs: [
          "A school uniform is more than clothing. It represents the identity of the school and is worn by students almost every day. Parents therefore expect uniforms to be comfortable, durable, correctly sized and consistent with the school's approved colours and design.",
          "For schools, choosing a supplier is also a procurement decision that can affect parents for several years. A supplier may offer an attractive initial price, but problems with inconsistent colours, unavailable sizes, poor stitching or delayed deliveries can create complaints for the school administration later.",
          "Before appointing a supplier, school boards, bursars and procurement teams should evaluate more than price. Manufacturing capability, quality control, availability, replacement stock and the supplier's ability to reproduce the same uniform consistently are equally important.",
        ],
      },
      {
        heading: "Manufacturer or reseller?",
        paragraphs: [
          "One of the first questions to ask is whether the supplier actually manufactures the garments or purchases finished uniforms from other producers. The distinction can become important when a school needs the same uniform reproduced over several years.",
          "A manufacturer with its own production capability can directly control important details such as fabric selection, garment measurements, stitching, trims, embroidery and finishing. It can also retain the school's approved specifications and use them when producing future batches.",
          "A reseller may still provide good uniforms, but the school should understand where the garments come from and how the reseller will maintain consistency if its source changes.",
          "Ask the supplier where the uniforms are produced, which parts of production are handled internally and whether representatives from the school can visit the production facility. A supplier that is open about its production process gives the school an opportunity to understand how its uniforms will be made.",
        ],
      },
      {
        heading: "Check fabric and garment quality",
        paragraphs: [
          "School uniforms experience frequent washing, movement and everyday wear. Fabric should therefore be selected for the actual demands placed on the garment rather than appearance alone.",
          "When evaluating samples, consider the weight and feel of the fabric, stitching quality, strength of seams, buttons and zips, colour appearance and the overall finishing of the garment. Different garments may also require different materials depending on their purpose.",
          "For example, the requirements of a school shirt are different from those of a sweater, blazer, tracksuit or pair of trousers. Ask the supplier to explain the materials proposed for each garment and why they are suitable for school use.",
          "Physical samples are particularly important. A photograph or fabric description cannot fully show how a garment feels, fits or has been constructed.",
        ],
      },
      {
        heading: "Consistency across terms and years",
        paragraphs: [
          "Parents notice when a sweater purchased this year is noticeably different from one bought the previous year, or when siblings attending the same school are wearing different shades of the supposedly same uniform.",
          "Colour variation can occur when fabrics are sourced or dyed in different batches. Sizing and construction can also change if a supplier changes manufacturers or specifications.",
          "Ask how the supplier maintains approved colours, fabrics, patterns and measurements between production runs. Ideally, the supplier should keep an approved reference sample and documented garment specifications that can be used when future batches are produced.",
          "Schools should also approve important details such as embroidery colours, badge dimensions, button types, piping and trims. Small details can make a significant difference to the overall consistency of the uniform.",
        ],
      },
      {
        heading: "Make sure the sizing system works for all students",
        paragraphs: [
          "A uniform programme must accommodate students of different ages, heights and body proportions. Before appointing a supplier, confirm that the available size range is broad enough for the school's student population.",
          "Ask to see the supplier's size chart and physical samples across several sizes. Schools should also establish what happens when a student falls outside the standard size range.",
          "A supplier with manufacturing capability may be able to produce special sizes when required. This can prevent parents from having to alter unsuitable garments or search elsewhere for uniforms that do not perfectly match the school's approved design.",
          "Clear sizing information is also useful during busy back-to-school periods because it can help parents select the correct garment with fewer exchanges.",
        ],
      },
      {
        heading: "Review branding and school identity",
        paragraphs: [
          "Badges, school names, house colours and other identifying details should be reproduced accurately. Before bulk production begins, the school should approve exactly how these elements will appear on each garment.",
          "Ask whether branding will be embroidered, printed or applied using woven labels and why the chosen method is suitable for that particular garment.",
          "For embroidery, check details such as positioning, dimensions, thread colours and clarity. For printed garments, ask about the durability of the printing method after repeated washing.",
          "The school should ideally approve a final branded sample before the supplier begins full production. This provides a clear reference for both parties and reduces the possibility of misunderstandings.",
        ],
      },
      {
        heading: "Consider availability throughout the school year",
        paragraphs: [
          "Uniform demand does not end when schools reopen. Students grow, garments become worn or damaged, new students enrol and parents occasionally need additional pieces during the term.",
          "Ask where parents will obtain replacement uniforms after the main back-to-school period. Depending on the supplier, this could be through a physical shop, designated outlet, school distribution arrangement or direct order.",
          "Also ask which garments and sizes are normally held in stock and which items are produced only after an order is placed.",
          "A good supply arrangement should make it reasonably easy for a parent to replace one shirt, sweater, skirt or pair of trousers without waiting for the school's next bulk order.",
        ],
      },
      {
        heading: "Ask about production capacity and lead times",
        paragraphs: [
          "Back-to-school periods create concentrated demand, which can put pressure on suppliers. A company that handles small orders successfully during the year may still struggle with a large school order if it does not have sufficient production capacity.",
          "Before confirming an order, provide estimated quantities and ask the supplier for a realistic production and delivery schedule. Avoid relying only on general promises such as 'the uniforms will be ready before opening day.'",
          "Schools should establish important milestones, including sample approval, confirmation of quantities, production, branding, quality inspection and final delivery.",
          "It is also worth asking how the supplier handles urgent requirements, additional enrolment or unexpected demand for particular sizes.",
        ],
      },
      {
        heading: "Do not compare suppliers on price alone",
        paragraphs: [
          "Price is naturally important to schools and parents, but the cheapest quotation does not necessarily provide the lowest long-term cost.",
          "A lower-priced garment that quickly loses shape, requires frequent replacement or becomes unavailable during the year may ultimately be less economical for parents.",
          "When comparing quotations, make sure suppliers are quoting comparable products. Differences in fabric, construction, branding, finishing and service can produce significant differences in price.",
          "Instead of considering only the purchase price, evaluate the overall value offered: garment quality, expected durability, consistency, availability, sizing support, production reliability and after-sales service.",
        ],
      },
      {
        heading: "Evaluate the supplier's quality-control process",
        paragraphs: [
          "Quality should not be checked only after an entire order has been completed. Ask the supplier what checks take place during cutting, sewing, branding, finishing and packing.",
          "Important areas include garment measurements, stitching, colour consistency, embroidery placement, buttons, zips, loose threads and general finishing.",
          "Schools placing large orders can also agree on an inspection or approval process before final delivery. Identifying problems before garments reach parents is easier than dealing with large numbers of returns afterwards.",
        ],
      },
      {
        heading: "Understand exchanges and after-sales support",
        paragraphs: [
          "Even with good sizing systems, exchanges will occasionally be necessary. Parents may purchase an incorrect size, or a garment may have a manufacturing defect.",
          "Before appointing a supplier, understand how exchanges are handled, the conditions that apply and where parents should go when they need assistance.",
          "The school should also know who to contact if there is a problem affecting several garments or an entire production batch. Clear after-sales procedures make it easier to resolve issues without placing unnecessary administrative pressure on the school.",
        ],
      },
      {
        heading: "What to ask for before appointing a supplier",
        paragraphs: [
          "Before signing an agreement or approving bulk production, schools should request enough information to evaluate the supplier properly.",
        ],
        bullets: [
          "Physical samples of every proposed garment",
          "Fabric specifications for shirts, trousers, skirts, dresses, sweaters, blazers and sportswear",
          "A complete size chart and confirmation of the available size range",
          "Information on whether special or non-standard sizes can be produced",
          "A final branded sample showing the approved badge, embroidery or printing",
          "Confirmation of where the garments are manufactured",
          "Information about the supplier's production capacity",
          "Realistic production and delivery lead times",
          "Details of the quality-control process",
          "Information on where parents can purchase replacement uniforms during the year",
          "Exchange and returns procedures",
          "A clear quotation showing what is included in the price",
        ],
      },
      {
        heading: "Questions to ask when visiting a uniform manufacturer",
        paragraphs: [
          "If the supplier manufactures locally and allows factory visits, use the opportunity to understand how production is managed rather than simply touring the facility.",
        ],
        bullets: [
          "Where are fabrics and trims sourced?",
          "How are school colours recorded and matched for repeat orders?",
          "Are patterns and measurements stored for future production?",
          "Which stages of production are completed in-house?",
          "How is embroidery or other branding controlled?",
          "What quality checks are carried out before garments are packed?",
          "How does the manufacturer manage large back-to-school orders?",
          "What happens when the school needs additional garments after the original production run?",
        ],
      },
      {
        heading: "Think beyond the first order",
        paragraphs: [
          "The strongest school uniform arrangements are usually built for continuity rather than a single purchase. Once a school has approved its colours, fabrics, patterns, badge placement and garment specifications, future orders should reproduce those standards as closely as possible.",
          "This is why the supplier's ability to maintain records, source consistent materials and manufacture repeat orders matters. A school may work with the same uniform design for many years, while individual parents purchase garments at different times.",
          "Before choosing a supplier, consider what the relationship is likely to look like two or three years later. Will parents still be able to find the same colours? Will the supplier still have the school's patterns and specifications? Can additional sizes and garments be produced when required?",
          "A reliable supplier should be able to support the school beyond the initial bulk order.",
        ],
      },
      {
        heading: "Choosing a school uniform supplier in Kenya",
        paragraphs: [
          "For Kenyan schools, the right uniform supplier should combine garment quality with dependable supply. The objective is not simply to have uniforms ready for the next opening date, but to establish a system that works for the school and its parents throughout the year.",
          "Compare manufacturers carefully, inspect physical samples, agree on specifications before production and ask how repeat orders will be handled. These steps can help the school maintain a consistent appearance while giving parents reliable access to approved uniforms.",
          "At Weaverbird Garments, we manufacture school uniforms for institutions requiring consistent colours, sizing, branding and repeat supply. Schools can discuss their uniform requirements with our team, review garment samples and agree on specifications before production.",
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
      "Ordering uniforms for an entire team involves more than choosing a design. From sizing and fabric to branding, quantities and delivery, here is a practical guide for HR, administration and procurement teams.",
    category: "Corporate Wear",
    date: "2026-09-21",
    readMinutes: 9,
    image: IMG.corporate,
    imageAlt: "Branded corporate wear produced by Weaverbird",
    sections: [
      {
        heading: "Why bulk uniform orders require careful planning",
        paragraphs: [
          "Ordering corporate uniforms for a team can appear straightforward: choose the garments, provide the company logo, submit staff sizes and wait for delivery. In practice, several decisions need to be made before production begins.",
          "An incomplete size list can delay production. A fabric chosen mainly for appearance may be uncomfortable for employees who spend most of the day outdoors. A logo that looks good on a computer screen may need adjustments before it can be embroidered clearly. And if the chosen fabric cannot be sourced again, uniforms ordered for new employees six months later may not match the original batch.",
          "Good planning helps HR, administration and procurement teams avoid these problems. Before requesting final quotations or approving production, consider how the uniforms will be used, who will wear them and how the programme will be managed after the first order.",
        ],
      },
      {
        heading: "Start with the purpose of the uniform",
        paragraphs: [
          "Before choosing colours, fabrics or styles, define what the uniform needs to accomplish.",
          "Corporate uniforms can serve different purposes. Some businesses need formal clothing for receptionists, sales teams and office employees. Others require durable garments for technicians, drivers, warehouse employees or field teams. Hospitality businesses may need different uniforms for reception, housekeeping, restaurant and kitchen staff.",
          "The working environment should therefore influence the design. Consider whether employees work indoors or outdoors, how much movement their roles require, how frequently the garments will be worn and how often they are likely to be washed.",
          "Once these requirements are clear, it becomes easier to select appropriate garments and fabrics.",
        ],
      },
      {
        heading: "Choose garments according to staff roles",
        paragraphs: [
          "Not every employee necessarily needs the same combination of garments. A corporate uniform programme can maintain a consistent brand identity while providing different clothing for different roles.",
          "Office staff might wear shirts, blouses, trousers, skirts, waistcoats or blazers. Field teams may need polo shirts, jackets or other practical garments. Reception teams may require more formal pieces, while promotional teams may need branded polos or T-shirts.",
          "Grouping employees according to their roles can help determine exactly which garments and quantities are required before you request a quotation.",
        ],
        bullets: [
          "Formal shirts and blouses for office staff",
          "Trousers and skirts for administrative teams",
          "Blazers and waistcoats for formal customer-facing roles",
          "Polo shirts for everyday branded corporate wear",
          "Cardigans or sweaters for cooler working environments",
          "Jackets for outdoor and field employees",
          "T-shirts for promotional teams, campaigns and events",
        ],
      },
      {
        heading: "Collect staff sizes early",
        paragraphs: [
          "Sizing is one of the most important parts of a bulk corporate uniform order. Waiting until production is about to begin before collecting staff sizes can cause unnecessary delays.",
          "Prepare a list of every employee who will receive a uniform and record the required sizes for each garment. Do not assume that an employee will necessarily wear the same size in every type of garment.",
          "Where possible, use the supplier's actual size chart rather than relying entirely on familiar labels such as Small, Medium, Large or XL. Sizing standards can differ between manufacturers.",
          "For larger teams, consider arranging a sizing session using sample garments. Employees can try the garments before the final size list is submitted, reducing the number of exchanges required after delivery.",
        ],
      },
      {
        heading: "Do not forget non-standard sizes",
        paragraphs: [
          "A complete corporate uniform programme should accommodate employees across a practical range of sizes.",
          "Ask the supplier which sizes are available as standard and whether garments outside that range can be produced. If special sizing is required, identify those employees early because made-to-measure or adjusted garments may require additional production time.",
          "This is another reason to collect sizing information before confirming the final delivery date.",
        ],
      },
      {
        heading: "Think carefully about fabric",
        paragraphs: [
          "The appearance of a uniform matters, but fabric selection should also reflect the conditions in which employees will actually wear the garment.",
          "Consider comfort, breathability, durability, ease of washing, ironing requirements and how frequently the garment will be used. Employees who spend much of the day outdoors may have different requirements from employees working in an air-conditioned office.",
          "Fabric weight also matters. A heavier material may provide structure for certain garments, while lighter materials may be more comfortable for shirts, blouses and garments used in warmer environments.",
          "Ask the manufacturer to provide physical fabric or garment samples before making a final decision. Seeing and touching the material gives procurement teams a much better understanding of what employees will actually receive.",
        ],
      },
      {
        heading: "Consider Kenya's working conditions",
        paragraphs: [
          "For organisations operating in Kenya, climate and working environment should be considered when choosing corporate uniforms.",
          "Employees working outdoors or in warmer areas may benefit from lighter, breathable garments, while staff working in cooler locations or air-conditioned offices may require sweaters, cardigans or jackets as part of the uniform.",
          "Organisations with employees in different counties or working environments may therefore need more than one garment combination while maintaining the same corporate colours and branding.",
        ],
      },
      {
        heading: "Agree on colours before production",
        paragraphs: [
          "Corporate colours are often an important part of a company's identity. However, colours displayed on a computer screen do not always represent exactly how a fabric or embroidery thread will appear in person.",
          "If a particular shade is important to your brand, review physical samples before approving production. The same applies to embroidery threads, piping, trims and contrasting fabric.",
          "Once approved, the supplier should have a clear reference for future production so that additional uniforms can match the original order as closely as possible.",
        ],
      },
      {
        heading: "Agree branding upfront",
        paragraphs: [
          "Provide your logo and branding requirements at the beginning of the ordering process rather than after garments have already entered production.",
          "The supplier needs to know where the logo will appear, how large it should be and which branding method will be used. Common positions include the left chest, sleeve, back or pocket area.",
          "Embroidery is often suitable for small company logos on polo shirts, shirts, jackets and other corporate garments. Screen printing may be more appropriate for larger designs on T-shirts and promotional clothing.",
          "The best method depends on the garment, fabric and artwork, so discuss the application with the manufacturer before approving production.",
        ],
      },
      {
        heading: "Provide good-quality logo artwork",
        paragraphs: [
          "The quality of the original artwork affects the preparation of your branding.",
          "Where possible, provide the supplier with the company's official logo files rather than screenshots, photographs or low-resolution images copied from websites or social media.",
          "You should also provide information about official brand colours where available. If the logo contains small text or very fine details, the supplier may recommend minor adjustments so that the design remains clear when embroidered or printed.",
          "Always review and approve the prepared branding before bulk production begins.",
        ],
      },
      {
        heading: "Approve a sample before bulk production",
        paragraphs: [
          "One of the most important steps in a corporate uniform order is sample approval.",
          "A sample allows you to evaluate the actual garment rather than making decisions entirely from drawings, photographs or descriptions. Check the fabric, fit, colour, stitching, logo size, branding position and overall appearance.",
          "If changes are required, make them at the sample stage. Altering specifications after hundreds of garments have entered production can create delays and additional costs.",
          "Once the sample is approved, it can also serve as a reference against which the finished bulk order is checked.",
        ],
      },
      {
        heading: "Calculate quantities carefully",
        paragraphs: [
          "The number of employees is not necessarily the same as the number of garments you need to order.",
          "Consider how many pieces of each garment every employee requires. An employee wearing a uniform five days a week may need several shirts or blouses so that garments can be rotated between washing and wearing.",
          "Different roles may also require different allocations. For example, customer-facing employees may receive formal shirts and blazers while field staff receive polo shirts and jackets.",
          "Prepare a quantity breakdown by garment, size and department before confirming the order.",
        ],
      },
      {
        heading: "Consider ordering a small amount of extra stock",
        paragraphs: [
          "Businesses change throughout the year. New employees join, garments become damaged and employees occasionally need replacement pieces.",
          "Depending on the size of your organisation and the type of uniform, it may be useful to keep a small quantity of commonly used sizes in reserve.",
          "The right amount of additional stock depends on staff turnover, recruitment plans and how quickly the manufacturer can produce repeat orders. Avoid purchasing excessive quantities simply as a precaution, especially where staff numbers or uniform designs may change.",
        ],
      },
      {
        heading: "Plan for new employees and staff changes",
        paragraphs: [
          "Corporate uniform planning should continue beyond the initial order. Employees join, leave, transfer departments and occasionally require different sizes.",
          "Before choosing a supplier, ask how repeat orders are handled. Can you order small quantities later? Will the same fabrics still be available? Will the manufacturer retain your patterns, colours and branding specifications?",
          "A reliable repeat-order process can be particularly important for organisations that recruit throughout the year.",
        ],
      },
      {
        heading: "Plan for re-orders",
        paragraphs: [
          "Consistency becomes increasingly important as a corporate uniform programme continues.",
          "Imagine ordering navy polo shirts for 100 employees and then recruiting another 20 employees several months later. If the replacement fabric is noticeably different, the team may no longer appear uniform.",
          "Choose designs and materials that your supplier can reproduce and ask how approved specifications are recorded. These can include fabric, colour, garment measurements, embroidery size, logo position, thread colours and trims.",
          "Maintaining these specifications helps future orders remain consistent with existing uniforms.",
        ],
      },
      {
        heading: "Set a realistic delivery schedule",
        paragraphs: [
          "Bulk garment production requires several stages. Depending on the order, these may include sourcing fabric, preparing patterns, cutting, sewing, branding, finishing, quality inspection and packing.",
          "Do not wait until immediately before a launch, conference, opening or company event to begin the ordering process.",
          "Ask the manufacturer for a realistic lead time based on the actual quantity and garment requirements. If you have a fixed deadline, communicate it before approving the order so the supplier can confirm whether it is achievable.",
        ],
      },
      {
        heading: "Allow time for approvals",
        paragraphs: [
          "When planning your deadline, remember that production time is only one part of the process.",
          "Your organisation may also need time to approve quotations, samples, colours, branding and staff size lists. Internal delays can reduce the amount of time available for manufacturing.",
          "Assign one person or a small team to coordinate approvals and communicate with the supplier. Having a clear point of contact can prevent conflicting instructions and unnecessary delays.",
        ],
      },
      {
        heading: "Compare quotations properly",
        paragraphs: [
          "When evaluating uniform suppliers, avoid comparing quotations solely by the final total.",
          "Two suppliers may appear to be quoting for the same shirt while actually offering different fabrics, garment construction, branding methods or finishing standards.",
          "Make sure each quotation clearly identifies the garment, quantity, branding requirements and other services included in the price.",
          "A slightly higher initial price may offer better value if the garment is more suitable for regular use, the supplier can reproduce it reliably and replacement pieces remain available.",
        ],
      },
      {
        heading: "Understand what is included in the quotation",
        bullets: [
          "Garment manufacturing or supply",
          "Fabric and garment specifications",
          "Embroidery or printing",
          "Logo setup or artwork preparation where applicable",
          "Special sizing requirements",
          "Packaging",
          "Delivery where applicable",
          "Applicable taxes",
          "Sample development or approval requirements",
        ],
      },
      {
        heading: "Ask about quality control",
        paragraphs: [
          "For a large corporate order, consistency across all garments is important. Ask the manufacturer what quality checks are performed during production and before delivery.",
          "Typical checks may include garment measurements, stitching, branding placement, colour consistency, buttons, zips and general finishing.",
          "For particularly large orders, you may also want to agree on an inspection or approval process before the complete order is dispatched.",
        ],
      },
      {
        heading: "Plan how uniforms will be distributed",
        paragraphs: [
          "Production may be complete, but distributing hundreds of garments to employees can become a separate administrative task.",
          "Before delivery, decide whether uniforms should be packed individually by employee, grouped according to department or supplied in bulk by garment and size.",
          "For larger organisations, employee-labelled packs can make internal distribution easier. Alternatively, grouping garments by branch, department or location may be more practical.",
          "Discuss packaging requirements with your supplier before production is completed rather than trying to reorganise the entire order after delivery.",
        ],
      },
      {
        heading: "Keep a uniform allocation record",
        paragraphs: [
          "For organisations with many employees, keeping a simple record of uniform allocation can make future ordering easier.",
          "Record the employee's name or staff number, department, garment type, size, quantity issued and date of issue. This information can help HR or administration teams identify common sizes, estimate replacement requirements and prepare future orders.",
          "It can also make onboarding easier because the organisation already has a defined process for issuing uniforms to new employees.",
        ],
      },
      {
        heading: "Create a simple uniform policy",
        paragraphs: [
          "Once uniforms are issued, employees should understand how and when they are expected to wear them.",
          "A simple internal policy can cover which garments form part of the uniform, expected combinations, care instructions, replacement procedures and what happens when an employee leaves the organisation.",
          "Clear guidelines help maintain a consistent appearance and can reduce uncertainty for both employees and managers.",
        ],
      },
      {
        heading: "Bulk corporate uniform checklist",
        paragraphs: [
          "Before approving your corporate uniform order, confirm that the following items have been addressed.",
        ],
        bullets: [
          "Employee list is complete",
          "Staff sizes have been collected",
          "Special sizes have been identified",
          "Garments have been selected according to employee roles",
          "Fabric samples have been reviewed",
          "Corporate colours have been approved",
          "Official logo artwork has been supplied",
          "Branding method and position have been confirmed",
          "A branded sample has been approved",
          "Quantities have been calculated by garment and size",
          "Requirements for additional stock have been considered",
          "Repeat-order arrangements have been discussed",
          "Delivery dates have been agreed",
          "Quality-control expectations are clear",
          "Packaging and distribution requirements have been confirmed",
          "Quotation inclusions have been checked",
        ],
      },
      {
        heading: "Choosing a corporate uniform manufacturer in Kenya",
        paragraphs: [
          "A good corporate uniform programme should make life easier for both employees and the team responsible for managing it.",
          "Look beyond the first order when evaluating a supplier. Consider whether the company can provide consistent fabrics, reproduce approved designs, manage branding, accommodate different sizes and support repeat orders as your workforce changes.",
          "Working directly with a manufacturer can also make it easier to coordinate garment specifications, branding and future production under one supplier.",
          "Weaverbird Garments manufactures corporate uniforms for businesses and organisations across a range of industries. Our corporate wear includes shirts, blouses, trousers, skirts, polo shirts, blazers, waistcoats, sweaters, jackets and other customised garments, with embroidery and screen printing available for company branding.",
          "Whether you are outfitting a small team or planning a larger corporate uniform programme, our team can help you review garment options, sizing, branding and production requirements before placing your order.",
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
      "Embroidery and screen printing can both give uniforms a professional branded finish, but they differ in appearance, durability, cost and the garments they suit best. Here is how to choose the right method for your uniforms.",
    category: "Branding & Embroidery",
    date: "2026-09-14",
    readMinutes: 8,
    image: IMG.labels,
    imageAlt: "Close-up of embroidery, screen printing and branded labels on uniforms",
    sections: [
      {
        heading: "Why the branding method matters",
        paragraphs: [
          "Adding a logo, school badge, company name or organisation identity to a uniform may seem like a small part of the production process, but the branding method can significantly affect the finished garment.",
          "Embroidery and screen printing are two of the most widely used methods for branding uniforms and promotional clothing. Both can produce excellent results when used on the right garment, but they create very different finishes.",
          "The best choice depends on several factors: the type of garment, the size and complexity of the design, how the uniform will be used, the fabric, the quantity required and the appearance you want to achieve.",
          "Understanding these differences before production helps you choose a branding method that complements the garment rather than simply placing a logo on it.",
        ],
      },
      {
        heading: "What is embroidery?",
        paragraphs: [
          "Embroidery creates a design by stitching coloured thread directly into the garment. Before production, the logo or artwork is converted into a digital embroidery file that tells the embroidery machine how the design should be stitched.",
          "The result is a textured, slightly raised design that becomes part of the garment itself. This gives embroidery the structured and professional appearance commonly seen on corporate uniforms, school sweaters, polo shirts, caps and workwear.",
          "Because the design is made from thread rather than ink, embroidery generally performs well on garments that are regularly worn and washed.",
        ],
      },
      {
        heading: "Where embroidery works best",
        paragraphs: [
          "Embroidery is particularly effective for small to medium-sized logos positioned on areas such as the chest, sleeve or front of a cap.",
          "It works especially well on garments with enough structure to support the stitching. Polo shirts, sweaters, jackets, blazers, caps, overalls and many workwear garments are common examples.",
          "For schools, embroidery is frequently used for badges and school names on sweaters, shirts, polo shirts, blazers and sportswear. Businesses may use the same method for company logos, employee names and department identifiers.",
        ],
        bullets: [
          "School sweaters and cardigans",
          "Polo shirts",
          "Corporate shirts and blouses",
          "Blazers and jackets",
          "Workwear and overalls",
          "Caps and selected headwear",
          "Security uniforms",
          "Hospitality uniforms",
        ],
      },
      {
        heading: "Advantages of embroidery",
        paragraphs: [
          "One of embroidery's main strengths is its appearance. Thread gives logos dimension and texture, which can create a more premium finish than a flat printed design.",
          "Embroidery is also well suited to uniforms intended for repeated use. When properly produced and applied to a suitable garment, the branding can withstand regular washing and everyday wear.",
          "The method is particularly effective for logos that use clear shapes, lettering and a limited number of colours.",
        ],
        bullets: [
          "Professional and premium appearance",
          "Textured, raised finish",
          "Suitable for uniforms that are worn regularly",
          "Works well on heavier and structured garments",
          "Ideal for chest logos, badges and names",
          "Suitable for many corporate, school and workwear applications",
        ],
      },
      {
        heading: "When embroidery may not be the best option",
        paragraphs: [
          "Embroidery is not automatically the best method for every design or garment. Very large embroidered areas can become heavy, stiff and expensive because the amount of stitching increases significantly.",
          "Extremely detailed artwork can also be difficult to reproduce exactly with thread. Tiny lettering, fine lines, gradients and photographic details may need to be simplified before embroidery.",
          "Very lightweight fabrics can require additional consideration because dense stitching may affect how the material sits or feels.",
          "This is why the garment and artwork should be reviewed together before the branding method is confirmed.",
        ],
      },
      {
        heading: "What is screen printing?",
        paragraphs: [
          "Screen printing applies ink to the surface of a garment through a prepared mesh screen. The artwork is separated according to the colours required, and ink is transferred onto the fabric to create the final design.",
          "Unlike embroidery, which creates a design using thread, screen printing produces a flatter finish on the surface of the garment.",
          "The method is particularly useful when the design covers a larger area, such as the front or back of a T-shirt, sports jersey or promotional garment.",
        ],
      },
      {
        heading: "Where screen printing works best",
        paragraphs: [
          "Screen printing is commonly used on T-shirts, promotional clothing, sportswear and other garments where a bold design needs to cover a relatively large area.",
          "It is especially effective for logos, text and graphics made from solid colours. Once the screens have been prepared, the same design can be reproduced efficiently across larger quantities of garments.",
          "For example, an organisation ordering branded T-shirts for an event may choose screen printing because the logo can be reproduced prominently across the front or back of each shirt.",
        ],
        bullets: [
          "Round-neck T-shirts",
          "Promotional T-shirts",
          "Sports and training wear",
          "Event merchandise",
          "PE T-shirts",
          "Campaign and promotional clothing",
          "Large front or back designs",
        ],
      },
      {
        heading: "Advantages of screen printing",
        paragraphs: [
          "Screen printing is particularly useful when a design needs to be larger than a typical embroidered logo. It can cover a significant portion of a garment without adding the weight associated with thousands of embroidery stitches.",
          "It can also produce strong, bold colours and works particularly well with artwork that contains clear shapes and solid colour areas.",
          "For suitable designs and larger production quantities, screen printing can also be an efficient way to reproduce the same artwork across many garments.",
        ],
        bullets: [
          "Suitable for larger designs",
          "Works well for bold graphics and lettering",
          "Ideal for many T-shirts and promotional garments",
          "Does not add the weight of dense stitching",
          "Efficient for repeating the same design across larger quantities",
        ],
      },
      {
        heading: "When screen printing may not be the best option",
        paragraphs: [
          "Screen printing is not ideal for every garment or every piece of artwork. Small, highly detailed branding on formal uniforms may not provide the same structured appearance as embroidery.",
          "The number of colours in a design can also affect the printing process because traditional screen printing generally requires separate preparation for each colour.",
          "Garment material matters as well. Different fabrics can require different inks, curing conditions and production techniques, so the printer should review the fabric before production.",
        ],
      },
      {
        heading: "Embroidery vs screen printing: appearance",
        paragraphs: [
          "If appearance is the main consideration, think about the role of the garment.",
          "Embroidery generally creates a structured and premium appearance because the logo has physical texture. This often complements corporate uniforms, school sweaters, blazers, polo shirts and work jackets.",
          "Screen printing creates a flatter graphic appearance and allows designs to occupy much larger areas. This often suits casual clothing, promotional T-shirts, PE kits, sportswear and event garments.",
          "Neither appearance is inherently better. The right choice is the one that suits the garment and the identity you want it to communicate.",
        ],
      },
      {
        heading: "Which method is more durable?",
        paragraphs: [
          "Durability depends on more than the branding method alone. The quality of the thread or ink, garment fabric, production process, washing conditions and everyday use can all affect how branding performs over time.",
          "Embroidery is often selected for frequently worn uniforms because the design is stitched into the garment. Good-quality embroidery can remain presentable through repeated use and washing.",
          "Properly produced screen printing can also be durable. However, the printing process, ink selection, curing and care of the garment all influence its lifespan.",
          "For either method, customers should follow the recommended garment washing and care instructions.",
        ],
      },
      {
        heading: "How logo complexity affects your choice",
        paragraphs: [
          "A logo that looks good on a computer screen may need adjustments before it can be reproduced successfully on fabric.",
          "With embroidery, very small text and extremely fine details may need to be enlarged or simplified so that individual elements remain clear after stitching.",
          "Screen printing can reproduce many detailed graphics effectively, but designs containing numerous colours can require additional production preparation.",
          "Before approving production, ask for artwork guidance or a sample so that you can see how the design translates from a digital file to the actual garment.",
        ],
      },
      {
        heading: "How the size of your logo affects the decision",
        paragraphs: [
          "Logo size is one of the easiest ways to narrow down the choice.",
          "A small company logo positioned on the chest of a polo shirt is often a strong candidate for embroidery. The same logo enlarged across the entire back of a T-shirt may be better suited to printing.",
          "Large embroidery designs require significantly more stitches, which can increase production time, weight and cost. Screen printing can often reproduce large graphics more efficiently.",
          "For this reason, some uniform programmes use more than one branding method depending on the garment.",
        ],
      },
      {
        heading: "Can you use both methods?",
        paragraphs: [
          "Yes. An organisation does not necessarily need to choose one branding method for every garment in its uniform range.",
          "For example, a company might embroider its logo on staff polo shirts and jackets while screen printing the same identity on promotional T-shirts. A school might embroider its badge on sweaters while printing larger graphics on PE or sports garments.",
          "Using different methods strategically allows each garment to receive branding that suits its material, purpose and design.",
        ],
      },
      {
        heading: "What about cost?",
        paragraphs: [
          "There is no single rule that makes embroidery or screen printing cheaper in every situation. Pricing depends on the design and order.",
          "Embroidery costs can be influenced by factors such as the size of the design, stitch count, number of garments and placement. A small chest logo requires far fewer stitches than a large design covering the back of a jacket.",
          "Screen printing costs can be influenced by the number of print colours, number of print positions, garment quantity and size of the design. Because screens require preparation, the economics can improve when the same design is repeated across larger quantities.",
          "When requesting a quotation, provide the actual logo, required quantity, garment type, branding position and approximate branding size. This allows the supplier to recommend an appropriate method and provide a more accurate price.",
        ],
      },
      {
        heading: "Quick guide: embroidery or screen printing?",
        bullets: [
          "Small chest logo on a polo shirt — usually embroidery",
          "School badge on a sweater or blazer — usually embroidery",
          "Company logo on a work jacket — usually embroidery",
          "Logo on a cap — usually embroidery",
          "Large design across the back of a T-shirt — usually screen printing",
          "Promotional T-shirts for an event — usually screen printing",
          "Large, bold text on sports or training garments — often screen printing",
          "Heavy or structured garment — often embroidery",
          "Lightweight T-shirt with a large graphic — often screen printing",
          "Very small detailed logo — review the artwork before deciding",
          "Large embroidered design — consider printing if weight, stiffness or cost becomes an issue",
        ],
      },
      {
        heading: "Questions to ask before approving your branding",
        paragraphs: [
          "Whether you choose embroidery or screen printing, approve the branding details before full production begins. This is particularly important for uniforms that will be reordered over several years.",
        ],
        bullets: [
          "What branding method is recommended for this garment?",
          "What size should the logo be?",
          "Where exactly will the logo be positioned?",
          "Will small details or text remain clearly visible?",
          "Are the branding colours matched to the approved logo?",
          "Can I see a sample before bulk production?",
          "How should the branded garment be washed and cared for?",
          "Will the approved artwork and specifications be retained for repeat orders?",
        ],
      },
      {
        heading: "Choosing the right branding method for your uniforms",
        paragraphs: [
          "The best branding method depends on the garment, artwork and intended use rather than a simple rule that one technique is better than the other.",
          "Choose embroidery when you want a textured, professional finish for logos, badges and names on suitable uniforms. Consider screen printing when you need larger graphics, bold designs or branding across T-shirts, sportswear and promotional garments.",
          "If you are unsure, provide the garment details and your logo before production. An experienced uniform manufacturer or branding team should be able to assess the fabric, design size, complexity and order quantity before recommending the most appropriate method.",
          "Weaverbird Garments provides both embroidery and screen printing for school uniforms, corporate wear, workwear, sportswear and promotional garments. Our team can review your artwork and garment requirements before recommending the branding method that best suits the finished product.",
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
      "Comfort, durability, colour consistency and ease of care all matter when selecting school uniform fabrics. Here is what schools should consider before approving materials for shirts, dresses, trousers, sweaters and other uniform garments.",
    category: "Fabric & Materials",
    date: "2026-09-07",
    readMinutes: 9,
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1791272234/weaverbird/products/orxm302g7bcgv4mjljx8.jpg",
    imageAlt: "Selection of uniform fabrics and garments",
    sections: [
      {
        heading: "Why fabric choice matters",
        paragraphs: [
          "The fabric used for a school uniform affects much more than its appearance. It influences how the garment feels, how it handles repeated washing, how easily it can be maintained and how well it performs during everyday school activities.",
          "Learners may wear the same uniform for many hours at a time and several days each week. Shirts, dresses, trousers, skirts, sweaters and sportswear therefore need materials suited to regular use.",
          "For schools, fabric choice also affects consistency. Once a particular colour, texture and material has been approved, parents expect replacement garments purchased later to match the existing uniform as closely as possible.",
          "There is no single fabric that is ideal for every school or every garment. The right choice depends on climate, garment type, expected use, care requirements, appearance and budget.",
        ],
      },
      {
        heading: "Start with the garment, not just the fabric",
        paragraphs: [
          "Different parts of a school uniform perform different jobs, so they do not necessarily need the same material.",
          "A shirt needs to be comfortable against the body and practical for regular washing. Trousers and skirts need enough structure and durability for everyday movement. Sweaters require a knitted material that provides warmth while retaining its shape. Sportswear needs to allow comfortable movement during physical activity.",
          "Instead of selecting one material for an entire uniform programme, evaluate the requirements of each garment separately.",
        ],
        bullets: [
          "Shirts and blouses — comfort, breathability and ease of care",
          "Trousers and shorts — durability, structure and freedom of movement",
          "Skirts and pinafores — structure, appearance and colour retention",
          "Dresses — comfort, durability and ease of washing",
          "Sweaters and cardigans — warmth, shape retention and resistance to pilling",
          "Blazers — structure, appearance and durability",
          "PE and sportswear — movement, comfort and moisture management",
        ],
      },
      {
        heading: "Understand fabric composition",
        paragraphs: [
          "One of the first things to check is what the fabric is made from. School uniform materials may contain natural fibres, synthetic fibres or a combination of both.",
          "Cotton is commonly valued for its soft feel and breathability. Polyester is widely used because of characteristics such as durability, shape retention and relatively easy care. Blended fabrics combine fibres in an attempt to balance their different properties.",
          "For example, a polyester-cotton blend may be selected where a school wants some of the comfort associated with cotton together with the practical characteristics of polyester.",
          "The fibre composition alone, however, does not tell you everything about a fabric. Construction, weight, yarn, finishing and manufacturing quality also affect how the finished material performs.",
        ],
      },
      {
        heading: "Cotton fabrics",
        paragraphs: [
          "Cotton is a natural fibre commonly used in clothing because it can produce soft and breathable fabrics. These qualities can make cotton-containing materials comfortable for garments worn close to the body.",
          "However, the performance of a cotton garment depends on how the fabric has been manufactured and finished. Some cotton fabrics may crease more easily or require more ironing than fabrics containing synthetic fibres.",
          "Schools considering cotton-rich materials should therefore evaluate the finished fabric rather than choosing it solely because of the fibre name.",
        ],
      },
      {
        heading: "Polyester fabrics",
        paragraphs: [
          "Polyester is a synthetic fibre widely used in uniforms and workwear. Depending on the fabric construction, it can provide durability, shape retention and practical washing characteristics.",
          "Polyester-containing fabrics can be useful for garments that are washed frequently or where reduced creasing and easier maintenance are priorities.",
          "As with cotton, polyester should not be judged by fibre content alone. Fabric weight, weave, finish and quality can make two polyester fabrics feel and perform very differently.",
        ],
      },
      {
        heading: "Polyester-cotton blends",
        paragraphs: [
          "Blended fabrics are common in uniforms because they can combine characteristics from different fibres.",
          "A polyester-cotton fabric, for example, may offer a balance between comfort, durability and ease of care. The exact result depends on the blend ratio and how the fabric has been constructed.",
          "Different blend ratios can produce different levels of softness, breathability, crease resistance and durability. Schools should therefore ask for the exact composition rather than accepting a general description such as 'polycotton.'",
          "More importantly, evaluate the actual fabric sample to determine whether it is appropriate for the intended garment.",
        ],
      },
      {
        heading: "Think about the climate",
        paragraphs: [
          "Learners spend long days in their uniforms, so climate should be considered when choosing materials.",
          "In warmer areas, lighter and more breathable fabrics may be preferable for shirts, dresses and other garments worn throughout the day. In cooler regions, schools may place greater emphasis on sweaters, cardigans, blazers and other layers.",
          "Kenya has varied climatic conditions, so a uniform that works well in one region may not be ideal in another. Conditions can also vary during the day, particularly where mornings are cool but afternoons become warmer.",
          "Layering can provide flexibility. Instead of making the main uniform unnecessarily heavy, schools can use appropriate shirts, dresses or trousers together with sweaters, cardigans or jackets when additional warmth is needed.",
        ],
      },
      {
        heading: "Consider fabric weight",
        paragraphs: [
          "Two fabrics made from the same fibres can feel completely different because of differences in weight and construction.",
          "Very lightweight fabric may feel comfortable in warm conditions but may not provide the structure or durability required for some garments. A heavier material may offer more structure but could feel unnecessarily warm when used for a shirt or dress.",
          "Fabric weight should therefore be matched to the garment. Shirts, trousers, skirts, blazers and sweaters all have different requirements.",
          "When comparing suppliers, avoid evaluating materials only by fibre percentages. Ask to see and feel the actual fabrics being proposed.",
        ],
      },
      {
        heading: "Weave and knit also matter",
        paragraphs: [
          "Fabric composition describes the fibres used, while fabric construction describes how those fibres are turned into material.",
          "Woven fabrics are commonly used for garments such as shirts, dresses, skirts and trousers. Knitted materials are used for products such as sweaters, cardigans, polo shirts and some sportswear.",
          "The construction affects characteristics such as stretch, drape, texture, thickness and overall appearance.",
          "For this reason, two fabrics with identical fibre compositions can still perform differently if they use different constructions.",
        ],
      },
      {
        heading: "Durability for everyday school life",
        paragraphs: [
          "School uniforms experience demanding daily use. Learners sit, run, play, carry bags and move between classrooms while wearing them. Garments are also washed repeatedly throughout the school term.",
          "Durability therefore needs to be considered at both fabric and garment level.",
          "When reviewing a fabric, consider whether it is appropriate for repeated use and whether it retains an acceptable appearance after washing. For high-wear garments such as trousers, shorts, skirts and sweaters, durability becomes particularly important.",
          "Garment construction also matters. Even a good fabric will not produce a durable uniform if seams, zips, buttons or other components are poorly assembled.",
        ],
      },
      {
        heading: "Check colourfastness",
        paragraphs: [
          "Colour consistency is particularly important for school uniforms because many learners wearing the same design are seen together.",
          "A fabric that loses colour quickly can create noticeable differences between older and newer garments. Dark shades such as navy, maroon, green and grey can make colour changes particularly noticeable when students stand together.",
          "Ask the manufacturer about colourfastness and how the material is expected to perform under the recommended washing conditions.",
          "For important school colours, retain an approved fabric swatch or finished garment as a reference for future orders.",
        ],
      },
      {
        heading: "Consider shrinkage",
        paragraphs: [
          "A garment that fits correctly before washing should not become unexpectedly unsuitable after normal care.",
          "Different fabrics can respond differently to washing and drying. Fibre content, fabric construction and finishing can all influence dimensional changes.",
          "Ask the supplier whether the proposed material has been evaluated for shrinkage and follow the recommended care instructions.",
          "For a new uniform specification, washing a sample before final approval can provide useful information about how the garment behaves after normal care.",
        ],
      },
      {
        heading: "Look out for pilling",
        paragraphs: [
          "Pilling refers to the small balls of fibre that can form on the surface of some fabrics through wear and friction. It can be particularly noticeable on sweaters and other knitted garments.",
          "The tendency to pill depends on several factors, including fibre type, yarn construction, fabric structure, finishing and how the garment is used and cared for.",
          "When reviewing sweater or cardigan samples, ask about pilling performance and examine samples that have been handled or washed rather than assessing appearance only when the garment is completely new.",
        ],
      },
      {
        heading: "Comfort should be evaluated in real use",
        paragraphs: [
          "A uniform can look excellent on a hanger and still be uncomfortable after several hours of wear.",
          "Consider softness, breathability, weight, movement and how the fabric feels against the skin. The garment should also allow the learner to sit, walk and participate comfortably in normal school activities.",
          "For sportswear and PE garments, freedom of movement becomes especially important. For formal pieces such as blazers, enough structure may be required to maintain the intended appearance.",
          "The objective is to find an appropriate balance between comfort and the functional requirements of each garment.",
        ],
      },
      {
        heading: "Think about washing and ironing",
        paragraphs: [
          "Uniform care should be realistic for the families who will maintain the garments.",
          "School uniforms are washed frequently, and care practices vary between households. Some garments may be washed by hand while others are machine washed. Access to tumble drying or specialist cleaning should not automatically be assumed.",
          "Ask for clear care instructions before approving the material. Consider washing temperature, drying method, ironing requirements and whether any garments require special treatment.",
          "A fabric that looks impressive but is difficult or expensive to maintain may not be the most practical option for everyday school wear.",
        ],
      },
      {
        heading: "Choose colours carefully",
        paragraphs: [
          "Colour is one of the most recognisable elements of a school uniform. Navy blue, royal blue, maroon, green, grey and other colours can form an important part of a school's identity.",
          "When selecting a colour, evaluate it on the actual fabric rather than relying entirely on a digital image. Colours displayed on phones and computer monitors can differ from the appearance of physical material.",
          "Texture and lighting can also influence how a colour appears. Review samples in normal indoor conditions and natural daylight before approving the final shade.",
          "Once a shade has been approved, retain a physical reference sample for future production.",
        ],
      },
      {
        heading: "Think about repeat orders",
        paragraphs: [
          "A school may use the same uniform design for many years, while parents purchase garments at different times.",
          "The ability to reproduce the fabric therefore matters. Before approving a material, ask the supplier whether it is a regular fabric that can reasonably be sourced or manufactured again.",
          "Schools using highly unusual colours, patterns or custom fabrics should discuss minimum production quantities and repeat-order requirements with the manufacturer.",
          "The supplier should also retain the approved fabric specifications so future production can be compared against the original standard.",
        ],
      },
      {
        heading: "Custom woven and knitted fabrics",
        paragraphs: [
          "Some schools require fabrics or knitted garments produced specifically for their uniform identity. This may include particular colours, stripes, checks, sweater patterns or other custom specifications.",
          "Custom manufacturing can provide greater control over the appearance of a uniform, but it also requires planning. Production quantities, colour approval, yarn or fabric availability and lead times should all be discussed before the school commits to the specification.",
          "Where a custom fabric is used, maintaining an accurate approved reference becomes particularly important for future production.",
        ],
      },
      {
        heading: "Do not choose fabric based on price alone",
        paragraphs: [
          "Schools naturally need to consider affordability, but fabric should be evaluated according to overall value rather than purchase price alone.",
          "A cheaper fabric may not provide good value if garments require frequent replacement, lose their appearance quickly or are difficult for families to maintain.",
          "At the same time, the most expensive material is not automatically the best choice. A premium fabric designed for occasional formal clothing may provide little practical advantage for a garment that children wear every school day.",
          "The goal is to choose material that provides an appropriate balance of durability, comfort, appearance, care requirements and cost.",
        ],
      },
      {
        heading: "See the fabric before you approve it",
        paragraphs: [
          "Fabric specifications are useful, but physical evaluation remains important.",
          "Ask the manufacturer for fabric swatches or finished garment samples. Feel the weight and texture, examine the weave or knit and compare the colour under different lighting conditions.",
          "For a new uniform programme or significant fabric change, consider washing a sample according to the recommended instructions. After washing, check the colour, dimensions, surface appearance, seams and overall shape.",
          "A finished sample also allows the school to evaluate how the fabric behaves once it has been cut, stitched, pressed and branded.",
        ],
      },
      {
        heading: "Questions to ask your uniform manufacturer",
        paragraphs: [
          "Before approving a fabric for school uniforms, ask the supplier for enough information to understand exactly what is being proposed.",
        ],
        bullets: [
          "What is the fibre composition of the fabric?",
          "What type of weave or knit is used?",
          "Why is this fabric recommended for this particular garment?",
          "Is the weight appropriate for the intended climate and use?",
          "How should the garment be washed and dried?",
          "How does the fabric perform after repeated washing?",
          "Has shrinkage been considered?",
          "How well does the material retain its colour?",
          "For knitted garments, how does the material perform against pilling?",
          "Can the same colour and material be reproduced for future orders?",
          "Can we see a fabric swatch or finished garment before approval?",
          "Are custom colours, checks, stripes or knitted patterns available if required?",
        ],
      },
      {
        heading: "Fabric approval checklist for schools",
        bullets: [
          "Fabric composition confirmed",
          "Weight and construction reviewed",
          "Colour approved using a physical sample",
          "Material assessed for the local climate",
          "Comfort considered for the intended garment",
          "Care instructions reviewed",
          "Shrinkage considered",
          "Colour retention discussed",
          "Pilling considered for knitted garments",
          "Finished garment sample inspected",
          "Branding tested on the selected material where required",
          "Repeat-order availability discussed",
          "Approved reference sample retained",
        ],
      },
      {
        heading: "Choosing school uniform fabrics in Kenya",
        paragraphs: [
          "The right school uniform fabric should suit the garment, climate, expected level of use and practical needs of learners and their families.",
          "Rather than selecting materials based only on appearance, fibre composition or price, schools should evaluate the complete fabric: its weight, construction, comfort, colour, care requirements and expected performance.",
          "Physical samples are especially valuable. Reviewing and, where appropriate, washing a sample before approving a large order can reveal characteristics that may not be obvious from a technical description.",
          "Weaverbird Garments manufactures school uniforms using woven and knitted materials selected according to garment requirements. Our team can assist schools in reviewing fabrics, colours, garment samples and uniform specifications before production.",
          "For schools requiring custom colours, knitted garments or other specific uniform materials, requirements can be discussed during the sampling and specification stage before bulk production begins.",
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
