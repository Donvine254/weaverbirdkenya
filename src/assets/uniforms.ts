import { GraduationCap, Briefcase, ShieldAlert, Flame, Heart, ShieldCheck } from "lucide-react";

const iconMap = {
  school: GraduationCap,
  corporate: Briefcase,
  security: ShieldAlert,
  sports: Flame,
  hospitality: Heart,
  ppe: ShieldCheck,
};

export const uniforms = [
  {
    id: "school",
    name: "School Uniforms",
    slug: "school-uniforms",
    description: "Durable and comfortable uniforms for primary and secondary schools.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1783868891/weaverbird/lwukovbxxcucnsbps1gt.jpg",
  },
  {
    id: "corporate",
    name: "Corporate Uniforms",
    slug: "corporate-uniforms",
    description: "Professional uniforms for offices and businesses.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1783868885/weaverbird/xf8sg1zmh2q01tzwr7dl.jpg",
  },
  {
    id: "security",
    name: "Security Uniforms",
    slug: "security-uniforms",
    description: "Professional attire for security personnel.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1783868832/weaverbird/oyhcq7tdi73jxdbdgi8p.jpg",
  },
  {
    id: "hospitality",
    name: "Hospitality Uniforms",
    slug: "hospitality-uniforms",
    description: "Uniforms for hotels, restaurants, and catering staff.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1783868737/weaverbird/uthtns53hzy2cf8rorxk.jpg",
  },
  {
    id: "healthcare",
    name: "Healthcare Uniforms",
    slug: "healthcare-uniforms",
    description: "Uniforms for nurses, doctors, and hospital staff.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/t_hiring-banner/v1783870311/weaverbird/paqyqnfov19xnq6odhdw.png",
  },
  {
    id: "ppe",
    name: "PPE & Workwear",
    slug: "ppe-workwear",
    description: "Protective clothing and safety equipment for industrial workplaces.",
    image:
      "https://res.cloudinary.com/dipkbpinx/image/upload/v1783869113/weaverbird/xlvsdnwxtmkr8lfqeq3k.jpg",
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
