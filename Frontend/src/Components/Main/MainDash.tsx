import React from "react";

import "./MainDash.css";
import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";
import NewCase from "../Start New Case/NewCase";
import CheckStatus from "../Check Status/CheckStatus";
import ChartComponent from "../../Chart/ChartComponent";
import { Container, Heading, Stack } from "@chakra-ui/react";

interface MainDashProps {
  selected: number;
}

const MainDash = ({ selected }: MainDashProps) => {
  const dummyChartData = [
    { label: "January", value: 30 },
    { label: "February", value: 45 },
    { label: "March", value: 28 },
    { label: "April", value: 55 },
    { label: "May", value: 40 },
    { label: "June", value: 62 },
    { label: "July", value: 35 },
    { label: "August", value: 50 },
    { label: "September", value: 48 },
    { label: "October", value: 30 },
    { label: "November", value: 55 },
    { label: "December", value: 40 },
  ];
  if (selected == 0) {
    return (
      <div className="MainDash">
        <Heading as={"h4"} color={"Purple"} 
        >
          Dashboard
        </Heading>
        <Stack alignItems={"center"} overflow={"auto"}>
          {/* <Heading as={"h4"} fontWeight={"500"}>
            Chart Example
          </Heading> */}
          <ChartComponent data={dummyChartData} />
          <Cards />
        </Stack>
      </div>
    );
  } else if (selected == 1) {
    return (
      <div>
        <NewCase />
      </div>
    );
  } else if (selected == 2) {
    return (
      <div>
        <CheckStatus />
      </div>
    );
  } else if (selected == 3) {
    return (
      <div>
        <Contact />
      </div>
    );
  }
};

export default MainDash;
