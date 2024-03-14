import React from "react";
import { Flex } from "@chakra-ui/react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import lt from "../../lt.png";
import MainDash from "../Main/MainDash";
import { useState } from "react";

const Dashboard = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Flex direction="row" height="20vh" className="header">
        <img src={lt} alt="Image" />
        <h4 style={{ paddingRight: "390px" }}>
          Blockchain Based Land Transfer System
        </h4>
      </Flex>
      <Flex
        className="Dashboard"
        width="100%"
        overflowY="auto"
        overflow={"auto"}
        height={"80vh"}
      >
        <Flex width="10%" minW="250px" className="AppGlass">
          <Sidebar selected={selected} setSelected={setSelected} />
        </Flex>
        <Flex
          width="90%"
          p="4"
          className="AppGlass"
          justifyContent={"center"}
          overflow="auto"
        >
          <MainDash selected={selected} />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
