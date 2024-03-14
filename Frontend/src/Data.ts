import {
  FaHome,
  FaUserCheck,
  FaLandmark,
  FaBuilding,
  FaCog,
  FaMailBulk,
} from "react-icons/fa";

export const SidebarData = [
  {
    icon: FaHome,
    heading: "Dashboard",
  },
  {
    icon: FaUserCheck,
    heading: " Start New Case",
  },
  {
    icon: FaLandmark,
    heading: "Check Case Status",
  },
  {
    icon: FaMailBulk,
    heading: "Contact Us ",
  },

  // ... add more items
];

export const CardsData = [
  {
    title: "Dummy",
    color: {
      backGround: "linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: "dummyyyyy",
    series: [
      {
        name: "Dummy",
        data: [31, 40, 28, 51, 42, , 109, 100],
      },
    ],
  },
  {
    title: "Dummy1",
    color: {
      backGround: "linear-gradient(180deg,#FF919D 0%,#FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: "dummyyyyy",
    series: [
      {
        name: "Dummy1",
        data: [10, 40, 28, 51, 42, , 109, 100],
      },
    ],
  },
  {
    title: "Dummy2",
    color: {
      backGround:
        "linear-gradient(rgb(248,212,154) -146.42%,rgb(255 202 113) -46%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "14,270",
    png: "dummyyyyy",
    series: [
      {
        name: "Dummy2",
        data: [31, 40, 28, 51, 42, , 109, 100],
      },
    ],
  },
];
