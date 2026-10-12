export interface Branch {
  name: string;
  type: "headquarters" | "branch";
  phone: string;
  hours: {
    monday_friday: string;
    saturday: string;
    sunday: string;
  };
  address: string;
  map: string;
  mapEmbed: string;
  coords: [number, number];
}

export const branches: Branch[] = [
  {
    name: "Headquarters / Factory",
    type: "headquarters",
    phone: "+254722264464",
    hours: {
      monday_friday: "8:00AM - 5:00PM",
      saturday: "8:00AM - 12:00PM",
      sunday: "Closed",
    },
    address:
      "Off Thika-Garissa Highway, along Kianjau-Athena Road, near Broadway Secondary School, Thika",
    map: "https://maps.app.goo.gl/ZDgsjr48u5BqzZHv6",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d255296.11005558464!2d36.7860546!3d-1.15924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f006f636a91%3A0xe41e13372a8459a0!2sWeaver%20Bird%20Garments%20Ltd%2C%20Headquarters!5e0!3m2!1sen!2ske!4v1791787125396!5m2!1sen!2ske",
    coords: [-1.0316, 37.1],
  },
  {
    name: "Nairobi Flagship Branch ⭐",
    type: "branch",
    phone: "+254724089655",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Delfirm Hotel Plaza, River Road, Nairobi",
    map: "https://maps.app.goo.gl/b4UnV6819CVsjaht8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.819619417842!2d36.82411!3d-1.2819995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11025c0adba9%3A0x6056eea5d2588f40!2sWeaver%20Bird%2CNairobi%20Shop!5e0!3m2!1sen!2ske!4v1791787026581!5m2!1sen!2ske",
    coords: [-1.2841, 36.829],
  },
  {
    name: "Chuka Shop",
    type: "branch",
    phone: "+254799111222",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Captain Plaza, next to Legacy Hotel, opposite Equity Bank, Chuka",
    map: "https://maps.app.goo.gl/744nrvUeeD7LkgqWA",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d510674.6936701619!2d37.2442183!3d-0.5324454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827b8708e88d711%3A0x1ffd379150b6db03!2sWEAVER%20BIRD%20GARMENT%20LTD!5e0!3m2!1sen!2ske!4v1791786382898!5m2!1sen!2ske",
    coords: [-0.3323, 37.6489],
  },
  {
    name: "Thika Shop 1 [CBD]",
    type: "branch",
    phone: "0738447700",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Twin Oak Plaza, Ground Floor, Opposite Safaricom Customer Care, Thika",
    map: "https://maps.app.goo.gl/UvVDWr4RWnH82Hx49",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.1655452631894!2d37.0701993!3d-1.036451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f001c8099df%3A0xfaeb9f04889709a3!2sWeaver%20Bird%2C%20Thika%20Shop%201!5e0!3m2!1sen!2ske!4v1791787174319!5m2!1sen!2ske",
    coords: [-1.0396, 37.07],
  },
  {
    name: "Thika Shop 2",
    type: "branch",
    phone: "0718343353",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Eco Bank Plaza, Opposite Post Bank, Thika",
    map: "https://maps.app.goo.gl/joniKCQ4y5ummbsN6",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d510635.01259728713!2d36.722371!3d-0.8908756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f304afd9b39%3A0x2255b740c124f0bb!2sWeaver%20Bird%2CThika%20Shop%202!5e0!3m2!1sen!2ske!4v1791787237659!5m2!1sen!2ske",
    coords: [-1.0389, 37.0692],
  },

  {
    name: "Ruiru Shop",
    type: "branch",
    phone: "0745444447",
    hours: {
      monday_friday: "8:30AM - 7:00PM",
      saturday: "8:30AM - 7:00PM",
      sunday: "8:30AM - 6:00PM",
    },
    address: "The Nord Mall, 1st Floor, Ruiru",
    map: "https://maps.app.goo.gl/vt9KJGs1DdATb3hi9",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2539454627884!2d36.95676327221374!3d-1.1492150000000052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47816a3bc745%3A0xa60c011c65d98982!2sThe%20Nord%20Mall%20Ruiru!5e0!3m2!1sen!2ske!4v1791787413221!5m2!1sen!2ske",
    coords: [-1.1479, 36.9598],
  },
  {
    name: "Runda Mall Shop",
    type: "branch",
    phone: "0745444446",
    hours: {
      monday_friday: "8:30AM - 7:00PM",
      saturday: "8:30AM - 7:00PM",
      sunday: "8:30AM - 6:00PM",
    },
    address: "Along Kiambu Road, Runda, Nairobi",
    map: "https://maps.app.goo.gl/meRQWGuR6p4Ptp7k8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.61457286845445!2d36.8353531!3d-1.2181739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172e2b70590b%3A0x20bdc7064aaa2d25!2sRUNDA%20MALL!5e0!3m2!1sen!2ske!4v1791787460422!5m2!1sen!2ske",
    coords: [-1.2145, 36.83],
  },
  {
    name: "TRM Shop (Thika Road Mall)",
    type: "branch",
    phone: "0725666444",
    hours: {
      monday_friday: "8:30AM - 7:00PM",
      saturday: "8:30AM - 7:00PM",
      sunday: "8:30AM - 6:00PM",
    },
    address: "1st Floor, Opposite Carrefour Supermarket, Thika Road Mall, Nairobi",
    map: "https://maps.app.goo.gl/GY98d1F7cJL5ESXn6",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127645.26879894953!2d36.7439997!3d-1.2194789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f150075ca9df1%3A0xf25ac4d443f8abfa!2sWeaver%20Bird%2C%20TRM%20Shop!5e0!3m2!1sen!2ske!4v1791787524076!5m2!1sen!2ske",
    coords: [-1.2192, 36.888],
  },
  {
    name: "Kisumu Shop",
    type: "branch",
    phone: "0754666444",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Oginga Odinga Road, Opposite Eco Bank Place, Kisumu",
    map: "https://maps.app.goo.gl/Xh7sYdvdje4N1mAL8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.8121355292064!2d34.7487048!3d-0.1008845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa5002a27607f%3A0xb9b76fd56068119!2sWeaver%20Bird%2C%20Kisumu%20Shop!5e0!3m2!1sen!2ske!4v1791787571243!5m2!1sen!2ske",
    coords: [-0.0917, 34.768],
  },
  {
    name: "Nakuru Shop",
    type: "branch",
    phone: "0743103103",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Along Kenyatta Avenue, Nakuru",
    map: "https://maps.app.goo.gl/Dq7BJjCha68oJSMQ7",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7691493480743!2d36.0710359!3d-0.2844566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d002a790b87%3A0xc9ada416901dd3fb!2sWeaver%20Bird%20Nakuru%20Shop!5e0!3m2!1sen!2ske!4v1791787611060!5m2!1sen!2ske",
    coords: [-0.2833, 36.0667],
  },
  {
    name: "Nanyuki Shop [NEW ⭐]",
    type: "branch",
    phone: "0745444222",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Along Lumumba Road, Horizon House, Nanyuki",
    map: "https://maps.app.goo.gl/vCJkGENjwj7da8ek8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!4v1791787654659!6m8!1m7!1sl2nTNdpyEswJXNbuOmPJ_A!2m2!1d0.01469844165546777!2d37.07654384720398!3f136.03!4f6.239999999999995!5f0.7820865974627469",
    coords: [0.01465507206258696, 37.07647772379612],
  },
  {
    name: "Meru Shop",
    type: "branch",
    phone: "0727399399",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Njuri Ncheke Street, Opposite Mater Hospital, Meru",
    map: "https://maps.app.goo.gl/iSCcxFJJV11x7H1S8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.816976357757!2d37.6537726!3d0.0470282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17882100697964a5%3A0x38a966749be2c156!2sWeaver%20Bird%2C%20Meru%20Shop!5e0!3m2!1sen!2ske!4v1791787718730!5m2!1sen!2ske",
    coords: [0.047, 37.6497],
  },
  {
    name: "Kerugoya Shop",
    type: "branch",
    phone: "0745444445",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Opposite Bingwa Sacco, Ground Floor, Kerugoya",
    map: "https://maps.app.goo.gl/mC1aYrKUVcbaj5Ro7",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d997.416625210198!2d37.2781903!3d-0.4998345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828810074915d1d%3A0xbdd2004b97e6648e!2sWeaver%20Bird%2C%20Kerugoya%20Shop!5e0!3m2!1sen!2ske!4v1791787754914!5m2!1sen!2ske",
    coords: [-0.4986, 37.2836],
  },
  {
    name: "Murang'a Shop",
    type: "branch",
    phone: "+254712444482",
    hours: {
      monday_friday: "8:30AM - 6:00PM",
      saturday: "8:30AM - 6:00PM",
      sunday: "Closed",
    },
    address: "Along Biashara Avenue, next to Consolidated Bank, Murang'a",
    map: "https://maps.app.goo.gl/iD1n83qor7cUGFvh8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5023677509926!2d37.15969150000001!3d-0.7210658000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18289878690827a1%3A0xe7d0117084ef5645!2sConsolidated%20Bank!5e0!3m2!1sen!2ske!4v1791787797898!5m2!1sen!2ske",
    coords: [-0.7211, 37.1526],
  },
];
