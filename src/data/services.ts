import {
  BadgeCheck,
  Scissors,
  Printer,
  Ruler,
  PackageCheck,
  Truck,
  Factory,
  Layers,
  PenTool,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  equipment?: string[];
  icon: typeof BadgeCheck;
  image: string;
  imageAlt: string;
}

export const services: ServiceItem[] = [
  {
    id: "embroidery",
    title: "Embroidery",
    tagline: "Stitched logos & branding that lasts a lifetime",
    description:
      "Our computerised multi-head embroidery floor stitches crisp, colour-accurate logos into every garment we make. Thread branding never cracks, peels or fades in the wash, which is why schools, banks and security firms trust it for uniforms worn every single day.",
    features: [
      "Multi-head computerised embroidery",
      "Up to 15 thread colours per design",
      "Chest, back and sleeve placement",
      "3D puff and individual name embroidery",
    ],
    equipment: [
      "4-head Tajima embroidery machine",
      "Brother PR 6-head machine",
      "Cap hoops & frames",
    ],
    icon: BadgeCheck,
    image:
      "https://images.pexels.com/photos/4614221/pexels-photo-4614221.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Industrial embroidery machines stitching a logo onto fabric",
  },
  {
    id: "screen-printing",
    title: "Screen Printing",
    tagline: "High-volume, vibrant prints on any fabric",
    description:
      "For bold graphics, event tees and sportswear numbers, our rotary carousel presses lay down rich, opaque ink at speed. Water-based inks give a soft hand feel on cotton while plastisol delivers punchy colour on polyester blends.",
    features: [
      "Up to 8 colours per print",
      "Plastisol and water-based inks",
      "Full-front, back and sleeve prints",
      "Volume pricing from 50 pieces up",
    ],
    equipment: [
      "6-station rotary carousel",
      "Infrared conveyor dryer",
      "UV exposure unit",
    ],
    icon: Printer,
    image:
      "https://images.pexels.com/photos/6069110/pexels-photo-6069110.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Screen printing press applying ink to textiles",
  },
  {
    id: "weaving",
    title: "In-House Weaving",
    tagline: "Fabric made on our own looms",
    description:
      "Very few uniform manufacturers in Kenya weave their own cloth. We do. That means we control the weight, the weave and the exact shade of your fabric, and we can reproduce it identically years later when you re-order.",
    features: [
      "Custom fabric weights and finishes",
      "Brand colour matching at yarn stage",
      "Consistent fabric on every re-order",
      "Lower cost on bulk production",
    ],
    equipment: ["Rapier looms", "Yarn dyeing plant", "Fabric inspection tables"],
    icon: Layers,
    image:
      "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Textile weaving machinery loaded with yarn spools",
  },
  {
    id: "cutting-stitching",
    title: "Cutting & Stitching",
    tagline: "Precision pattern cutting and durable seams",
    description:
      "Patterns are graded digitally, cut in layered stacks for perfect consistency, then assembled by experienced machinists. Stress points are bar-tacked and reinforced so garments survive the realities of school playgrounds and factory floors.",
    features: [
      "CAD pattern making and grading",
      "Straight-knife and band-knife cutting",
      "Lockstitch, overlock and bar-tack seams",
      "Reinforced stress points on every garment",
    ],
    equipment: [
      "CAD pattern software",
      "Straight & band-knife cutters",
      "Juki industrial sewing machines",
      "Brother overlock machines",
    ],
    icon: Scissors,
    image:
      "https://images.pexels.com/photos/4622417/pexels-photo-4622417.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Tailor cutting fabric on a large cutting table",
  },
  {
    id: "design-sampling",
    title: "Design & Sampling",
    tagline: "See and approve before we make a single piece",
    description:
      "Every order starts with a conversation and ends with your signature on a sample. We produce digital mockups first, then a physical pre-production sample so you can check fit, fabric and colour before bulk production begins.",
    features: [
      "Digital mockups and artwork setup",
      "Physical pre-production samples",
      "Fit and fabric approval sessions",
      "Pantone colour matching",
    ],
    icon: PenTool,
    image:
      "https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Fashion designer sketching a garment design",
  },
  {
    id: "tailoring",
    title: "Custom Tailoring & Alterations",
    tagline: "Made-to-measure and post-delivery adjustments",
    description:
      "Executives, growing students and new staff rarely fit a size chart perfectly. Our tailoring team measures individuals, cuts to those measurements and handles alterations long after delivery through any of our 12 branches.",
    features: [
      "Made-to-measure blazers and suits",
      "Hemming, resizing and repairs",
      "On-site fitting and measuring visits",
      "Replacement pieces for existing sets",
    ],
    icon: Ruler,
    image:
      "https://images.pexels.com/photos/4620621/pexels-photo-4620621.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Tailor measuring a client for a made-to-measure garment",
  },
  {
    id: "bulk-manufacturing",
    title: "Bulk Manufacturing",
    tagline: "Thousands of units, delivered on schedule",
    description:
      "Our Thika factory runs dedicated production lines for large institutional contracts. Delivery windows are agreed up front and every batch passes quality control before it leaves the floor.",
    features: [
      "Dedicated production lines per contract",
      "Contracted delivery timelines",
      "Quality control on every batch",
      "Exact matching on future re-orders",
    ],
    equipment: ["400+ trained machinists", "Multiple production lines", "In-line QC stations"],
    icon: Factory,
    image:
      "https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Rows of industrial sewing machines in a garment factory",
  },
  {
    id: "packaging-delivery",
    title: "Packaging & Delivery",
    tagline: "Sorted, labelled, and delivered to your door",
    description:
      "Orders arrive ready to hand out. Garments are individually poly-bagged, sorted by size or by name, boxed per department and delivered anywhere in Kenya with full tracking.",
    features: [
      "Individual poly-bagging",
      "Sorting by size or by name",
      "Nationwide delivery fleet",
      "Courier tracking on every shipment",
    ],
    equipment: ["Poly-bagging station", "Labelling & sorting bay", "Delivery fleet"],
    icon: PackageCheck,
    image:
      "https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Packed cardboard boxes ready for shipping in a warehouse",
  },
];

export const deliveryIcon = Truck;
