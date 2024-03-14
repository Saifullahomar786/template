import React, { useState } from "react";
import {
  Box,
  Text,
  Stack,
  Circle,
  HStack,
  VStack,
  Divider,
  Center,
} from "@chakra-ui/react";

const steps = [
  {
    label: "Relationship Check",
    status: "Completed",
    details: "Your Relation was Confirmed By our System",
  },
  {
    label: "Death Verification Process",
    status: "Completed",
    details: "Deceased DC was Completed by Union Council Department",
  },
  {
    label: "Land Revenue Office",
    status: "In progress",
    details:
      "Checking for land Details. Once Land Details are Verified, Your case will proceed.",
  },
  {
    label: "Transfer of Land",
    status: "Pending",
    details: "Waiting for Confirmation",
  },
];

const CheckStatus = () => {
  const [currentStep, setCurrentStep] = useState(3);

  return (
    <VStack mt="20%" spacing={4}>
      <Center>
        <HStack spacing="20">
          {steps.map((step, index) => (
            <Box key={index} textAlign="center" position="relative">
              <Circle
                size="60px"
                bg={
                  index + 1 < currentStep
                    ? "green.500"
                    : index + 1 === currentStep
                    ? "blue.400"
                    : "gray.400"
                }
                color="white"
                fontWeight={"500"}
                borderColor={
                  index + 1 <= currentStep ? "green.600" : "gray.400"
                }
              >

                {index + 1 < currentStep ? "✔" : index + 1 }
              </Circle>
              <Text
                mt="2"
                fontWeight={index + 1 === currentStep ? "700" : "500"}
                color={"black"}
                fontSize={"18px"}
              >
                {step.label}
              </Text>

              {index < 2 && index + 1 < currentStep && (
                <Text
                  color="white"
                  fontSize="12px"
                  bg="green.600"
                  borderRadius="10px"
                  p="2"
                >
                  Completed
                </Text>
              )}
              {index === 2 && (
                <Text
                  color="white"
                  fontSize="12px"
                  bg="blue.400"
                  borderRadius="10px"
                  p="2"
                >
                  In Progress
                </Text>
              )}
              {index === 3 && (
                <Text
                  color="white"
                  fontSize="12px"
                  bg="gray.400"
                  borderRadius="10px"
                  p="2"
                >
                  Pending
                </Text>
              )}
            </Box>
          ))}
        </HStack>
      </Center>
      <Divider
        my="4"
        borderColor={currentStep > 1 ? "green.400" : "gray.400"}
      />
      <Box
        w="100%"
        h="10px"
        bgGradient={`linear(to-r, ${
          currentStep > 1 ? "green.600" : "gray.300"
        } ${((currentStep - 1) / (steps.length - 1)) * 100}%, ${
          currentStep === steps.length ? "green.300" : "gray.300"
        } 0%, ${currentStep === steps.length ? "green.300" : "gray.300"} 100%)`}
      />
      <Text
        mb="4"
        color={"black"}
        fontSize={"18px"}
        fontWeight={"500"}
        bg={"whiteAlpha.500"}
        padding={"20px"}
      >
        {steps[currentStep - 1].details}
      </Text>
    </VStack>
  );
};

export default CheckStatus;
