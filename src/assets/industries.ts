import { Briefcase, Building2, Factory, GraduationCap, Heart, ShieldAlert } from "lucide-react";
import { products } from "./uniforms";

export const industries = [
  {
    title: "Education",
    subtitle: "Schools & Colleges",
    image: products.find((p) => p.id === "school")!.img,
    icon: GraduationCap,
  },
  {
    title: "Corporate",
    subtitle: "Offices & Institutions",
    image: products.find((p) => p.id === "corporate")!.img,
    icon: Briefcase,
  },
  {
    title: "Hospitality",
    subtitle: "Hotels & Restaurants",
    image: products.find((p) => p.id === "hospitality")!.img,
    icon: Heart,
  },
  {
    title: "Healthcare",
    subtitle: "Hospitals & Clinics",
    image: products.find((p) => p.id === "healthcare")!.img,
    icon: Building2,
  },
  {
    title: "Security",
    subtitle: "Guard Services",
    image: products.find((p) => p.id === "security")!.img,
    icon: ShieldAlert,
  },
  {
    title: "Manufacturing",
    subtitle: "Factories & Industrial",
    image: products.find((p) => p.id === "ppe")!.img,
    icon: Factory,
  },
];
