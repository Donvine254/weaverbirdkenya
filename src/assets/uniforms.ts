import {
  GraduationCap,
  Briefcase,
  ShieldUser,
  Volleyball,
  HardHat,
  UtensilsCrossed,
  Hospital,
} from "lucide-react";

const iconMap = {
  school: GraduationCap,
  corporate: Briefcase,
  security: ShieldUser,
  sports: Volleyball,
  hospitality: UtensilsCrossed,
  healthcare: Hospital,
  ppe: HardHat,
};

export const uniforms = [
  {
    id: "school",
    name: "School Uniforms",
    slug: "school-uniforms",
    description: "Durable and comfortable uniforms for primary and secondary schools.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1787920184/weaverbird/products/q1y64ybehztnzg8gs46e.jpg",
  },
  {
    id: "corporate",
    name: "Corporate Uniforms",
    slug: "corporate-uniforms",
    description: "Professional uniforms for offices and businesses.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1787899978/weaverbird/products/uwstvrxa25yzth3neknb.jpg",
  },
  {
    id: "security",
    name: "Security Uniforms",
    slug: "security-uniforms",
    description: "Professional attire for security personnel.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1787919590/weaverbird/products/sgiuvowtwaj0olmg5tnu.jpg",
  },
  {
    id: "hospitality",
    name: "Hospitality Uniforms",
    slug: "hospitality-uniforms",
    description: "Uniforms for hotels, restaurants, and catering staff.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1787920412/weaverbird/products/d8cgm1zjbhxg3dmb2sd8.jpg",
  },
  {
    id: "healthcare",
    name: "Healthcare Uniforms",
    slug: "healthcare-uniforms",
    description: "Uniforms for nurses, doctors, and hospital staff.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1787899977/weaverbird/products/oowc2jma8oz3fiidtchf.jpg",
  },
  {
    id: "ppe",
    name: "PPE & Workwear",
    slug: "ppe-workwear",
    description: "Protective clothing and safety equipment for industrial workplaces.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1787918649/weaverbird/products/or90p38zcy6uisx0xlgr.jpg",
  },
  {
    id: "sports",
    name: "Sports Uniforms",
    slug: "sports-uniforms",
    description:
      "High-performance sportswear and team uniforms designed for schools, clubs, and professional organizations.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1783868893/weaverbird/ndyzmjap20pvlk2w1wpa.jpg",
  },
];

export const products = uniforms.map((uniform) => ({
  id: uniform.id,
  slug: uniform.slug,
  img: uniform.image,
  title: uniform.name,
  desc: uniform.description,
  icon: iconMap[uniform.id as keyof typeof iconMap],
}));
