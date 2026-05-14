export type GeoLocation = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

export const clinicians: GeoLocation[] = [
  {
    name: "Barb",
    address: "4120 Garfield Ave, Minneapolis, MN 55409",
    latitude: 44.9279,
    longitude: -93.2877,
  },
  {
    name: "Isaac",
    address: "140 104th Ln NW, Blaine MN 55448",
    latitude: 45.1608,
    longitude: -93.2349,
  },
  {
    name: "Marisol",
    address: "2393 Kalmia Ave, Boulder, CO 80304",
    latitude: 40.0396,
    longitude: -105.2643,
  },
  {
    name: "Mary",
    address: "608 Spruce Dr, Hudson, WI 54016",
    latitude: 44.9813,
    longitude: -92.7569,
  },
  {
    name: "Shawna",
    address: "1727 W Highland Pkwy, St Paul, MN 55116",
    latitude: 44.9146,
    longitude: -93.1731,
  },
  {
    name: "Shelly",
    address: "1232 3rd St, Hudson, WI 54016",
    latitude: 44.9757,
    longitude: -92.7445,
  },
  {
    name: "Tom",
    address: "14173 Flagstone Trail, Apple Valley MN 55124",
    latitude: 44.7433,
    longitude: -93.2177,
  },
];

export const labs: GeoLocation[] = [
  {
    name: "Edina Lab",
    address: "6525 France Ave, Edina, MN, 55435",
    latitude: 44.8848,
    longitude: -93.3286,
  },
  {
    name: "Medical Arts Lab",
    address: "835 Nicollet Mall, Minneapolis, MN 55402",
    latitude: 44.9745,
    longitude: -93.2732,
  },
  {
    name: "Bloomington Lab",
    address: "2716 E 82nd St, Bloomington, MN 55425",
    latitude: 44.8556,
    longitude: -93.2328,
  },
  {
    name: "Hudson Lab",
    address: "400 2nd St S, Hudson, WI 54016",
    latitude: 44.9707,
    longitude: -92.7569,
  },
  {
    name: "Boulder Lab",
    address: "4750 Nautilus Ct S, Boulder, CO 80301",
    latitude: 40.0592,
    longitude: -105.2042,
  },
];

export const samplePatients: GeoLocation[] = [
  {
    name: "Minneapolis Patient",
    address: "1000 Washington Ave S, Minneapolis, MN 55415",
    latitude: 44.9737,
    longitude: -93.2469,
  },
  {
    name: "St Paul Patient",
    address: "200 Grand Ave, St Paul, MN 55102",
    latitude: 44.9405,
    longitude: -93.1091,
  },
  {
    name: "Hudson Patient",
    address: "700 1st St, Hudson, WI 54016",
    latitude: 44.9747,
    longitude: -92.7569,
  },
  {
    name: "Boulder Patient",
    address: "1300 Pearl St, Boulder, CO 80302",
    latitude: 40.018,
    longitude: -105.2797,
  },
];