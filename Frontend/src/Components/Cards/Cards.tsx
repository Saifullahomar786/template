import React from "react";
import { Box, Flex, Text, Heading, Circle } from "@chakra-ui/react";
import { FaChartLine } from "react-icons/fa";

const data = [
  { property: "Property transferred in Lahore 2023", value: "37,405" },
  { property: "Property transferred in Lahore 2022", value: "34,363" },
  { property: "Property transferred in Lahore  2021 ", value: "34,398" },
];

const Cards = () => {
  return (
    <Flex justifyContent="center" alignItems="center" mt="4">
      {data.map((item, index) => (
        <Box
          key={index}
          bg="white"
          p="4"
          m="2"
          borderRadius="md"
          boxShadow="md"
          maxW="sm"
          w="100%"
        >
          <Text fontSize="sm" color={"blackAlpha.900"} fontWeight={"500"}>
            {item.property}
          </Text>
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            mt="2"
            color={"blackAlpha.900"}
          >
            {item.value}
          </Heading>
          <Flex justifyContent="space-between" mt="4" align="center">
            <Circle size="10" bg="green.300" color="white">
              <FaChartLine />
            </Circle>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default Cards;
