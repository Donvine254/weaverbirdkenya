export type ProductColor = {
  name: string;
  hex: string;
};

export type ProductColors = Record<string, Record<string, { colors: ProductColor[] }>>;

export const productColors: ProductColors = {
  "school-uniforms": {
    Shirts: {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Light Grey", hex: "#D3D3D3" },
        { name: "Beige", hex: "#D6C6A5" },
        { name: "Pink", hex: "#F4B6C2" },
      ],
    },
    Sweaters: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Red", hex: "#B22222" },
        { name: "Grey", hex: "#666666" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Purple", hex: "#5B3A8E" },
      ],
    },
    Trousers: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Dark Grey", hex: "#4A4A4A" },
        { name: "Grey", hex: "#707070" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Brown", hex: "#654321" },
        { name: "Royal Blue", hex: "#2453A6" },
      ],
    },
    Shorts: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Dark Grey", hex: "#4A4A4A" },
        { name: "Grey", hex: "#707070" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Royal Blue", hex: "#2453A6" },
      ],
    },
    Dresses: {
      colors: [
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Green", hex: "#287A4B" },
        { name: "Maroon", hex: "#800020" },
        { name: "Red", hex: "#B22222" },
        { name: "Grey", hex: "#707070" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "Skirts (Pleated / A-Line)": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Dark Grey", hex: "#4A4A4A" },
        { name: "Grey", hex: "#707070" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Brown", hex: "#654321" },
        { name: "Royal Blue", hex: "#2453A6" },
      ],
    },
    Blazers: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#5F6368" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    Socks: {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#707070" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Royal Blue", hex: "#2453A6" },
      ],
    },
    Ties: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Red", hex: "#B22222" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Purple", hex: "#5B3A8E" },
      ],
    },
    Cardigans: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#666666" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    "Fleece Sweaters": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Leg Warmers": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Royal Blue", hex: "#2453A6" },
      ],
    },
    "Belted Pinafores": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#666666" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    Tracksuits: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    "School Hijabs": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Grey", hex: "#808080" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Dust Coats": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Jungle Green", hex: "#355E3B" },
        { name: "Kelly Green", hex: "#4CBB17" },
        { name: "Grey", hex: "#707070" },
        { name: "Brown", hex: "#654321" },
        { name: "Black", hex: "#1C1C1C" },
      ],
    },
    "T-Shirts": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Grey", hex: "#777777" },
      ],
    },
    Scarves: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Red", hex: "#B22222" },
        { name: "Grey", hex: "#666666" },
        { name: "Black", hex: "#1C1C1C" },
      ],
    },
    Raincoats: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Yellow", hex: "#F4C430" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Red", hex: "#C62828" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    Nightdresses: {
      colors: [
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Pink", hex: "#F4B6C2" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Lavender", hex: "#B9A7D1" },
        { name: "Light Grey", hex: "#D3D3D3" },
      ],
    },
    "Marvin Caps": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Royal Blue", hex: "#2453A6" },
      ],
    },
    Pyjamas: {
      colors: [
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#A0A0A0" },
        { name: "Pink", hex: "#F4B6C2" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Cream", hex: "#FFFDD0" },
      ],
    },
    "Swimming Costumes": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    Tunics: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Grey", hex: "#666666" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "Wrappers & Bloomers": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#808080" },
        { name: "Maroon", hex: "#800020" },
      ],
    },
    Shoes: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "School Bags": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Grey", hex: "#666666" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    Bedsheets: {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Grey", hex: "#B0B0B0" },
        { name: "Pink", hex: "#F4B6C2" },
        { name: "Green", hex: "#87A96B" },
      ],
    },
    "Pillows & Pillow Cases": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Grey", hex: "#B0B0B0" },
        { name: "Pink", hex: "#F4B6C2" },
      ],
    },
    Mattresses: {
      colors: [
        { name: "Blue", hex: "#336699" },
        { name: "Grey", hex: "#808080" },
        { name: "Cream", hex: "#E8DFC8" },
        { name: "Maroon", hex: "#800020" },
      ],
    },
    Bedcovers: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#808080" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    Blankets: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Grey", hex: "#707070" },
        { name: "Brown", hex: "#654321" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
  },

  "corporate-wear": {
    "Classic & Modern Suits": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Medium Grey", hex: "#666666" },
        { name: "Brown", hex: "#654321" },
        { name: "Beige", hex: "#C8B89A" },
      ],
    },
    "Dress Shirts": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#A0A0A0" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Pink", hex: "#F4B6C2" },
        { name: "Lavender", hex: "#B9A7D1" },
      ],
    },
    Blouses: {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Pink", hex: "#F4B6C2" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Grey", hex: "#A0A0A0" },
      ],
    },
    "Smart Skirts": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Grey", hex: "#666666" },
        { name: "Brown", hex: "#654321" },
        { name: "Beige", hex: "#C8B89A" },
      ],
    },
    "Men & Women Trousers": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Grey", hex: "#666666" },
        { name: "Brown", hex: "#654321" },
        { name: "Khaki", hex: "#B6A06A" },
      ],
    },
    Waistcoats: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Grey", hex: "#666666" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    Blazers: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Grey", hex: "#666666" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Royal Blue", hex: "#2453A6" },
      ],
    },
    Cardigans: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Grey", hex: "#707070" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Branded T-Shirts": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Green", hex: "#287A4B" },
        { name: "Grey", hex: "#707070" },
        { name: "Orange", hex: "#E67E22" },
        { name: "Yellow", hex: "#F2C94C" },
      ],
    },
    "Branded Shirts": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#808080" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Maroon", hex: "#800020" },
      ],
    },
    "Corporate Ties": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Red", hex: "#B22222" },
        { name: "Grey", hex: "#666666" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Corporate Sweaters": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Grey", hex: "#707070" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Royal Blue", hex: "#2453A6" },
      ],
    },
  },

  "workwear-overalls": {
    "Full Body Overalls": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Orange", hex: "#E87524" },
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Jungle Green", hex: "#355E3B" },
        { name: "Grey", hex: "#666666" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    "Work Shirts": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Grey", hex: "#707070" },
        { name: "Jungle Green", hex: "#355E3B" },
        { name: "Black", hex: "#1C1C1C" },
      ],
    },
    "Work Trousers": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Jungle Green", hex: "#355E3B" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "High-Vis Safety Jackets": {
      colors: [
        { name: "Fluorescent Yellow", hex: "#DFFF00" },
        { name: "Safety Orange", hex: "#FF7900" },
      ],
    },
    "Dust Coats": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Jungle Green", hex: "#355E3B" },
        { name: "Kelly Green", hex: "#4CBB17" },
        { name: "Grey", hex: "#707070" },
        { name: "Brown", hex: "#654321" },
        { name: "Black", hex: "#1C1C1C" },
      ],
    },
    "Lab Coats": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
      ],
    },
    "Utility Vests": {
      colors: [
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Jungle Green", hex: "#355E3B" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "PPE Helmets": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Yellow", hex: "#F4C430" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Green", hex: "#287A4B" },
        { name: "Orange", hex: "#E87524" },
      ],
    },
    "Safety Jackets": {
      colors: [
        { name: "Fluorescent Yellow", hex: "#DFFF00" },
        { name: "Safety Orange", hex: "#FF7900" },
        { name: "Navy Blue", hex: "#1B2A4A" },
      ],
    },
    "Safety Vests": {
      colors: [
        { name: "Fluorescent Yellow", hex: "#DFFF00" },
        { name: "Safety Orange", hex: "#FF7900" },
      ],
    },
    "Reflector Jackets": {
      colors: [
        { name: "Fluorescent Yellow", hex: "#DFFF00" },
        { name: "Safety Orange", hex: "#FF7900" },
      ],
    },
    "Protective Riding Gear": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#666666" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    "Security Shirts": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#A0A0A0" },
        { name: "Khaki", hex: "#B6A06A" },
      ],
    },
    "Security Trousers": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "Security Jackets": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#555555" },
        { name: "Jungle Green", hex: "#355E3B" },
      ],
    },
    "Security Sweaters": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Security Fleeces": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Security Boots": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "Security Hats": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Grey", hex: "#666666" },
      ],
    },
    "Security Ties": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Maroon", hex: "#800020" },
        { name: "Grey", hex: "#666666" },
      ],
    },
  },

  "medical-wear": {
    "Scrub Suits (V-Neck)": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Ceil Blue", hex: "#7BAFD4" },
        { name: "Teal", hex: "#008080" },
        { name: "Surgical Green", hex: "#4F8A6F" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#707070" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Maroon", hex: "#800020" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Pink", hex: "#E6A6B8" },
        { name: "Purple", hex: "#6A4C93" },
      ],
    },
    "Medical Trousers": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Ceil Blue", hex: "#7BAFD4" },
        { name: "Teal", hex: "#008080" },
        { name: "Surgical Green", hex: "#4F8A6F" },
        { name: "Grey", hex: "#707070" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Maroon", hex: "#800020" },
        { name: "White", hex: "#E5E7EB" },
      ],
    },
    "Doctor Lab Coats": {
      colors: [{ name: "White", hex: "#E5E7EB" }],
    },
    "Nurse Uniforms": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Ceil Blue", hex: "#7BAFD4" },
        { name: "Teal", hex: "#008080" },
        { name: "Surgical Green", hex: "#4F8A6F" },
        { name: "Pink", hex: "#E6A6B8" },
      ],
    },
    "Theatre Wear": {
      colors: [
        { name: "Surgical Green", hex: "#4F8A6F" },
        { name: "Teal", hex: "#008080" },
        { name: "Ceil Blue", hex: "#7BAFD4" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Navy Blue", hex: "#1B2A4A" },
      ],
    },
    "Tunic Tops": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Ceil Blue", hex: "#7BAFD4" },
        { name: "Teal", hex: "#008080" },
        { name: "Surgical Green", hex: "#4F8A6F" },
        { name: "Grey", hex: "#707070" },
        { name: "Pink", hex: "#E6A6B8" },
      ],
    },
    "Patient Gowns": {
      colors: [
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Light Green", hex: "#A8C9A3" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Light Grey", hex: "#D3D3D3" },
        { name: "Pink", hex: "#E6B8C4" },
      ],
    },
    "Pharmacy & Dental Wear": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Surgical Green", hex: "#4F8A6F" },
        { name: "Teal", hex: "#008080" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Ceil Blue", hex: "#7BAFD4" },
      ],
    },
    "Maternity Gowns": {
      colors: [
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Light Green", hex: "#A8C9A3" },
        { name: "Pink", hex: "#E6B8C4" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Lavender", hex: "#B9A7D1" },
      ],
    },
    "Hospital Bed Sheets & Linen": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Light Green", hex: "#A8C9A3" },
        { name: "Cream", hex: "#FFFDD0" },
      ],
    },
    "Medical Aprons": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Surgical Green", hex: "#4F8A6F" },
        { name: "Teal", hex: "#008080" },
      ],
    },
    "Medical & Theatre Caps": {
      colors: [
        { name: "Surgical Green", hex: "#4F8A6F" },
        { name: "Teal", hex: "#008080" },
        { name: "Ceil Blue", hex: "#7BAFD4" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "White", hex: "#E5E7EB" },
      ],
    },
    "Nurse Student Blazers": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Nurse Student Sweaters": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#666666" },
      ],
    },
    "Nurse Student Dresses": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Navy Blue", hex: "#1B2A4A" },
      ],
    },
    "Nurse Student Shirts": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Cream", hex: "#FFFDD0" },
      ],
    },
  },

  "hospitality-wear": {
    "Chef Jackets": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Navy Blue", hex: "#1B2A4A" },
      ],
    },
    "Kitchen Wear": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#666666" },
      ],
    },
    "Chef Trousers": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black & White Check", hex: "#707070" },
      ],
    },
    "Chef Caps": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#666666" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    "Waiter & Waitress Shirts": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Maroon", hex: "#800020" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Grey", hex: "#808080" },
      ],
    },
    "Waiter Uniforms": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Maroon", hex: "#800020" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "Waitress Skirts": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Maroon", hex: "#800020" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "Waiter & Waitress Sweaters": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Maroon", hex: "#800020" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Server Half Aprons": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Brown", hex: "#654321" },
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Maroon", hex: "#800020" },
        { name: "Grey", hex: "#666666" },
      ],
    },
    "Housekeeping Uniforms": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Grey", hex: "#808080" },
        { name: "Brown", hex: "#654321" },
        { name: "Beige", hex: "#C8B89A" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Nanny Uniforms": {
      colors: [
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Pink", hex: "#E6B8C4" },
        { name: "Grey", hex: "#A0A0A0" },
        { name: "Brown", hex: "#654321" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Reception Suits": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Grey", hex: "#666666" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "Restaurant Polos": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Red", hex: "#B22222" },
        { name: "Grey", hex: "#707070" },
      ],
    },
    Aprons: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Brown", hex: "#654321" },
        { name: "Khaki", hex: "#B6A06A" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#666666" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    "Spa & Wellness Wear": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Beige", hex: "#C8B89A" },
        { name: "Brown", hex: "#654321" },
        { name: "Sage Green", hex: "#9CAF88" },
        { name: "Grey", hex: "#A0A0A0" },
        { name: "Black", hex: "#1C1C1C" },
      ],
    },
    "Hotel Bedding & Linen": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Ivory", hex: "#FFFFF0" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Beige", hex: "#D6C6A5" },
        { name: "Light Grey", hex: "#D3D3D3" },
      ],
    },
  },

  "tshirts-polos": {
    "Classic Polos": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Kelly Green", hex: "#4CBB17" },
        { name: "Grey", hex: "#777777" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Orange", hex: "#E87524" },
      ],
    },
    "Piqué Polos": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#777777" },
        { name: "Yellow", hex: "#F2C94C" },
      ],
    },
    "Contrast Collar Polos": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#777777" },
      ],
    },
    "Round Neck Tees": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Orange", hex: "#E87524" },
        { name: "Grey", hex: "#777777" },
        { name: "Purple", hex: "#6A4C93" },
      ],
    },
    "V-Neck Tees": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Grey", hex: "#777777" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Performance Polos": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Grey", hex: "#777777" },
        { name: "Orange", hex: "#E87524" },
        { name: "Lime Green", hex: "#78BE20" },
      ],
    },
    "Long Sleeve Tees": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Grey", hex: "#777777" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "PE T-Shirts": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Black", hex: "#1C1C1C" },
      ],
    },
  },

  "jumpers-sweaters": {
    "V-Neck Jumpers": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    "Crew Neck Jumpers": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    "Buttoned Cardigans": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
      ],
    },
    "Zip-Neck Pullovers": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    Sweatshirts: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#777777" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Red", hex: "#B22222" },
        { name: "White", hex: "#E5E7EB" },
      ],
    },
    Hoodies: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#777777" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Red", hex: "#B22222" },
      ],
    },
    "Sleeveless Pullovers": {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Grey", hex: "#666666" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Royal Blue", hex: "#2453A6" },
      ],
    },
    "Fleece Jackets": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
  },

  "tracksuits-sportswear": {
    "Team Tracksuits": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#666666" },
      ],
    },
    "Sport/ PE Shorts": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#666666" },
      ],
    },
    "Training Wear": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Orange", hex: "#E87524" },
      ],
    },
    "Performance Sets": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Green", hex: "#287A4B" },
        { name: "Grey", hex: "#666666" },
      ],
    },
    Hoodies: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Grey", hex: "#666666" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    Windbreakers: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Grey", hex: "#666666" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    "Kids Sportswear": {
      colors: [
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Red", hex: "#C62828" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Orange", hex: "#E87524" },
        { name: "Black", hex: "#1C1C1C" },
      ],
    },
    "Leisure Wear Tracksuits": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Charcoal Grey", hex: "#36454F" },
        { name: "Grey", hex: "#777777" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Maroon", hex: "#800020" },
      ],
    },
    "Club Sports Uniforms": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Orange", hex: "#E87524" },
        { name: "Purple", hex: "#6A4C93" },
      ],
    },
    "Footballs & Volleyballs": {
      colors: [],
    },
    "Sports Socks": {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
      ],
    },
    "Sports Bibs": {
      colors: [
        { name: "Neon Yellow", hex: "#DFFF00" },
        { name: "Neon Green", hex: "#39FF14" },
        { name: "Neon Orange", hex: "#FF7900" },
        { name: "Red", hex: "#E53935" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Pink", hex: "#FF69B4" },
      ],
    },
  },

  "shukas-heritage": {
    "Classic Checks Shuka": {
      colors: [
        { name: "Red", hex: "#C62828" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
      ],
    },
    "Modern Pattern Shuka": {
      colors: [
        { name: "Red", hex: "#C62828" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Green", hex: "#287A4B" },
        { name: "Orange", hex: "#E87524" },
        { name: "Purple", hex: "#6A4C93" },
      ],
    },
    "Striped Shuka": {
      colors: [
        { name: "Red", hex: "#C62828" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Orange", hex: "#E87524" },
      ],
    },
    "Premium Luxury Fabrics": {
      colors: [
        { name: "Red", hex: "#C62828" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Green", hex: "#287A4B" },
        { name: "Maroon", hex: "#800020" },
        { name: "Black", hex: "#1C1C1C" },
      ],
    },
    "Yellow Checks Shuka": {
      colors: [{ name: "Yellow", hex: "#F2C94C" }],
    },
    "Green Checks Shuka": {
      colors: [{ name: "Green", hex: "#287A4B" }],
    },
    "Plain Editions": {
      colors: [
        { name: "Red", hex: "#C62828" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Orange", hex: "#E87524" },
        { name: "Black", hex: "#1C1C1C" },
      ],
    },
    "Black & White Editions": {
      colors: [{ name: "Black & White", hex: "#404040" }],
    },
    "Maasai Tops": {
      colors: [
        { name: "Red", hex: "#C62828" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
      ],
    },
    "Maasai Bedcovers": {
      colors: [
        { name: "Red", hex: "#C62828" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
      ],
    },
    "Maasai Cushion & Sofa Covers": {
      colors: [
        { name: "Red", hex: "#C62828" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
      ],
    },
    "Maasai Blankets & Duvets": {
      colors: [
        { name: "Red", hex: "#C62828" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
      ],
    },
  },

  "promotional-items": {
    "Branded Backpacks": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Grey", hex: "#666666" },
        { name: "Green", hex: "#287A4B" },
      ],
    },
    "Tote Bags": {
      colors: [
        { name: "Natural", hex: "#E5D3B3" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Red", hex: "#C62828" },
        { name: "Green", hex: "#287A4B" },
      ],
    },
    "Water Bottles": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Silver", hex: "#C0C0C0" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
      ],
    },
    Mugs: {
      colors: [
        { name: "White", hex: "#E5E7EB" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
      ],
    },
    Caps: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
        { name: "Grey", hex: "#666666" },
        { name: "Khaki", hex: "#B6A06A" },
      ],
    },
    Notebooks: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Brown", hex: "#654321" },
      ],
    },
    "USB Drives": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Silver", hex: "#C0C0C0" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
      ],
    },
    Pens: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "White", hex: "#E5E7EB" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Green", hex: "#287A4B" },
        { name: "Silver", hex: "#C0C0C0" },
      ],
    },
    Keyrings: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Silver", hex: "#C0C0C0" },
        { name: "Gold", hex: "#D4AF37" },
        { name: "Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
      ],
    },
    Skorts: {
      colors: [
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Black", hex: "#1C1C1C" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Grey", hex: "#666666" },
        { name: "Maroon", hex: "#800020" },
        { name: "Bottle Green", hex: "#1B4D3E" },
      ],
    },
    Umbrellas: {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Green", hex: "#287A4B" },
        { name: "Grey", hex: "#666666" },
      ],
    },
    "Drawstring Bags": {
      colors: [
        { name: "Black", hex: "#1C1C1C" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Royal Blue", hex: "#2453A6" },
        { name: "Red", hex: "#C62828" },
        { name: "Green", hex: "#287A4B" },
        { name: "Yellow", hex: "#F2C94C" },
        { name: "Orange", hex: "#E87524" },
        { name: "Grey", hex: "#666666" },
      ],
    },
  },
};
