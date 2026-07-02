export interface Branch {
  name: string;
  type: 'headquarters' | 'branch';
  phone: string;
  hours: {
    monday_friday: string;
    saturday: string;
    sunday: string;
  };
  address: string;
  map: string;
  coords: [number, number];
}

export const branches: Branch[] = [
  {
    name: 'Headquarters / Factory',
    type: 'headquarters',
    phone: '+254722264464',
    hours: {
      monday_friday: '8:00AM - 5:00PM',
      saturday: '8:00AM - 12:00PM',
      sunday: 'Closed',
    },
    address: 'Off Thika-Garissa Highway, along Kianjau-Athena Road, near Broadway Secondary School, Thika',
    map: 'https://maps.app.goo.gl/ZDgsjr48u5BqzZHv6',
    coords: [-1.0316, 37.1000],
  },
  {
    name: 'Nairobi',
    type: 'branch',
    phone: '+254724089655',
    hours: {
      monday_friday: '8:30AM - 6:00PM',
      saturday: '8:30AM - 6:00PM',
      sunday: 'Closed',
    },
    address: 'Delfirm Hotel Plaza, River Road, Nairobi',
    map: 'https://maps.app.goo.gl/b4UnV6819CVsjaht8',
    coords: [-1.2841, 36.8290],
  },
  {
    name: 'Chuka',
    type: 'branch',
    phone: '+254799111222',
    hours: {
      monday_friday: '8:30AM - 6:00PM',
      saturday: '8:30AM - 6:00PM',
      sunday: 'Closed',
    },
    address: 'Captain Plaza, next to Legacy Hotel, opposite Equity Bank, Chuka',
    map: 'https://maps.app.goo.gl/744nrvUeeD7LkgqWA',
    coords: [-0.3323, 37.6489],
  },
  {
    name: 'Thika Shop 1',
    type: 'branch',
    phone: '0738447700',
    hours: {
      monday_friday: '8:30AM - 6:00PM',
      saturday: '8:30AM - 6:00PM',
      sunday: 'Closed',
    },
    address: 'Twin Oak Plaza, Ground Floor, Opposite Safaricom Customer Care, Thika',
    map: 'https://maps.app.goo.gl/UvVDWr4RWnH82Hx49',
    coords: [-1.0396, 37.0700],
  },
  {
    name: 'Thika Shop 2',
    type: 'branch',
    phone: '0718343353',
    hours: {
      monday_friday: '8:30AM - 6:00PM',
      saturday: '8:30AM - 6:00PM',
      sunday: 'Closed',
    },
    address: 'Eco Bank Plaza, Opposite Post Bank, Thika',
    map: 'https://maps.app.goo.gl/joniKCQ4y5ummbsN6',
    coords: [-1.0389, 37.0692],
  },
  {
    name: 'Ruiru',
    type: 'branch',
    phone: '0745444447',
    hours: {
      monday_friday: '8:30AM - 7:00PM',
      saturday: '8:30AM - 7:00PM',
      sunday: '8:30AM - 6:00PM',
    },
    address: 'The Nord Mall, 1st Floor, Ruiru',
    map: 'https://maps.app.goo.gl/vt9KJGs1DdATb3hi9',
    coords: [-1.1479, 36.9598],
  },
  {
    name: 'Runda',
    type: 'branch',
    phone: '0745444446',
    hours: {
      monday_friday: '8:30AM - 7:00PM',
      saturday: '8:30AM - 7:00PM',
      sunday: '8:30AM - 6:00PM',
    },
    address: 'Along Kiambu Road, Runda, Nairobi',
    map: 'https://maps.app.goo.gl/meRQWGuR6p4Ptp7k8',
    coords: [-1.2145, 36.8300],
  },
  {
    name: 'TRM (Thika Road Mall)',
    type: 'branch',
    phone: '0725666444',
    hours: {
      monday_friday: '8:30AM - 7:00PM',
      saturday: '8:30AM - 7:00PM',
      sunday: '8:30AM - 6:00PM',
    },
    address: '1st Floor, Opposite Carrefour Supermarket, Thika Road Mall, Nairobi',
    map: 'https://maps.app.goo.gl/GY98d1F7cJL5ESXn6',
    coords: [-1.2192, 36.8880],
  },
  {
    name: 'Kisumu',
    type: 'branch',
    phone: '0754666444',
    hours: {
      monday_friday: '8:30AM - 6:00PM',
      saturday: '8:30AM - 6:00PM',
      sunday: 'Closed',
    },
    address: 'Oginga Odinga Road, Opposite Eco Bank Place, Kisumu',
    map: 'https://maps.app.goo.gl/Xh7sYdvdje4N1mAL8',
    coords: [-0.0917, 34.7680],
  },
  {
    name: 'Nakuru',
    type: 'branch',
    phone: '0743103103',
    hours: {
      monday_friday: '8:30AM - 6:00PM',
      saturday: '8:30AM - 6:00PM',
      sunday: 'Closed',
    },
    address: 'Along Kenyatta Avenue, Nakuru',
    map: 'https://maps.app.goo.gl/Dq7BJjCha68oJSMQ7',
    coords: [-0.2833, 36.0667],
  },
  {
    name: 'Meru',
    type: 'branch',
    phone: '0727399399',
    hours: {
      monday_friday: '8:30AM - 6:00PM',
      saturday: '8:30AM - 6:00PM',
      sunday: 'Closed',
    },
    address: 'Njuri Ncheke Street, Opposite Mater Hospital, Meru',
    map: 'https://maps.app.goo.gl/iSCcxFJJV11x7H1S8',
    coords: [0.0470, 37.6497],
  },
  {
    name: 'Kerugoya',
    type: 'branch',
    phone: '0745444445',
    hours: {
      monday_friday: '8:30AM - 6:00PM',
      saturday: '8:30AM - 6:00PM',
      sunday: 'Closed',
    },
    address: 'Opposite Bingwa Sacco, Ground Floor, Kerugoya',
    map: 'https://maps.app.goo.gl/mC1aYrKUVcbaj5Ro7',
    coords: [-0.4986, 37.2836],
  },
  {
    name: "Murang'a",
    type: 'branch',
    phone: '+254712444482',
    hours: {
      monday_friday: '8:30AM - 6:00PM',
      saturday: '8:30AM - 6:00PM',
      sunday: 'Closed',
    },
    address: "Along Biashara Avenue, next to Consolidated Bank, Murang'a",
    map: "https://maps.app.goo.gl/iD1n83qor7cUGFvh8",
    coords: [-0.7211, 37.1526],
  },
];