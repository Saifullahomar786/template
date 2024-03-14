import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Flex,
  Spacer,
  Text,
  Icon,
  Image,
  Header,
  background,
} from "@chakra-ui/react";
import FRCImage from "./frc.jpg";
import { FaCheck } from "react-icons/fa";

const NewCase = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [verificationConfirmed, setVerificationConfirmed] = useState(false);
  const [showFRCImage, setShowFRCImage] = useState(false);

  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreedToTerms) {
      setSubmitted(true);
    } else {
      alert("Please agree to the Terms of Use to Submit.");
    }
  };

  const handleVerification = () => {
    setVerificationConfirmed(true);
  };

  const handleDownloadFRC = () => {
    // Logic to download the FRC image (e.g., open a new window with the image URL)
    window.open(FRCImage, "_blank");
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="70vh"
      paddingTop={"40px"}
    >
      <Box
        className="UserDetails"
        p="40px"
        rounded="lg"
        boxShadow="black"
        bg="#FFF6F6"
        maxW="md"
        w="100%"
        borderRadius={"20px"}
        // border={"1px solid purple"}
        
      >
        <h2
          style={{
            textAlign: "center",
            background: "purple",
            color: "white",
            marginBottom: "20px",
            borderRadius: "6px",
            padding: "10px",
          }}
        >
          {showFRCImage
            ? "Your FRC"
            : verificationConfirmed
            ? "Verification Of Death"
            : submitted
            ? "Relationship Verification"
            : "Start New Case"}
        </h2>
        {!showFRCImage && !verificationConfirmed && !submitted ? (
          <form onSubmit={handleSubmit}>
            <Flex direction="column" mb="1">
              <Flex mb="1">
                <FormControl flex="1" mr="2">
                  <FormLabel
                    htmlFor="name"
                    fontWeight={"500"}
                    fontSize={"18px"}
                    color={"blackAlpha.900"}
                  >
                    Name
                  </FormLabel>
                  <Input
                    type="text"
                    id="name"
                    border={"1px solid purple"}
                    borderRadius={"4px"}
                    padding={"6px"}
                    _hover={{ border: "2px solid black" }}
                  />
                </FormControl>
                <FormControl flex="1">
                  <FormLabel
                    htmlFor="cnic"
                    fontWeight={"500"}
                    fontSize={"18px"}
                    color={"blackAlpha.900"}
                  >
                    CNIC
                  </FormLabel>
                  <Input
                    type="number"
                    id="cnic"
                    border={"1px solid purple"}
                    borderRadius={"4px"}
                    padding={"6px"}
                    _hover={{ border: "2px solid black" }}
                  />
                </FormControl>
              </Flex>
            </Flex>

            <Flex direction="column" mb="1">
              <Flex mb="1">
                <FormControl flex="1" mr="2">
                  <FormLabel
                    htmlFor="fatherName"
                    fontWeight={"500"}
                    fontSize={"18px"}
                    color={"blackAlpha.900"}
                  >
                    Father Name
                  </FormLabel>
                  <Input
                    type="text"
                    id="fatherName"
                    border={"1px solid purple"}
                    borderRadius={"4px"}
                    padding={"6px"}
                    _hover={{ border: "2px solid black" }}
                  />
                </FormControl>
                <FormControl flex="1">
                  <FormLabel
                    htmlFor="fatherCnic"
                    fontWeight={"500"}
                    fontSize={"18px"}
                    color={"blackAlpha.900"}
                  >
                    Father CNIC
                  </FormLabel>
                  <Input
                    type="number"
                    id="fatherCnic"
                    border={"1px solid purple"}
                    borderRadius={"4px"}
                    padding={"6px"}
                    _hover={{ border: "2px solid black" }}
                  />
                </FormControl>
              </Flex>
            </Flex>

            <Flex direction="column" mb="1">
              <FormControl mb="1">
                <FormLabel
                  htmlFor="deathCertificateNumber"
                  fontWeight={"500"}
                  fontSize={"18px"}
                  color={"blackAlpha.900"}
                >
                  Death Certificate Number
                </FormLabel>
                <Input
                  type="number"
                  id="deathCertificateNumber"
                  border={"1px solid purple"}
                  borderRadius={"4px"}
                  padding={"6px"}
                  _hover={{ border: "2px solid black" }}
                />
              </FormControl>
            </Flex>

            <Flex mb="4">
              <Checkbox
                id="agreeToTerms"
                isChecked={agreedToTerms}
                onChange={handleCheckboxChange}
                fontWeight={"500"}
                fontSize={"18px"}
                color={"blackAlpha.900"}
                iconColor="black.300"
              >
                I agree to the Terms of Use
              </Checkbox>
            </Flex>

            <Flex>
              <Spacer />
              <Button
                type="submit"
                padding="8px 50px"
                borderRadius="20px"
                boxShadow="0 10px 15px rgba(0,0,0,0.19)"
                backgroundColor="#922c88"
                color="white"
                _hover={{ backgroundColor: "#7f276c" }}
              >
                Submit
              </Button>
            </Flex>
          </form>
        ) : verificationConfirmed ? (
          <Flex direction="column" align="center">
            <Box
              bg="green" // Set the background color to green
              p={6} // Add padding to the
              borderRadius="full" // Make the box a circle
              boxShadow="lg" // Add a shadow to the circle
              mb={6}
            >
              <Icon as={FaCheck} color="white" boxSize={30} />
              {/* Use the check icon */}
            </Box>
            <Text fontWeight="bold" mb="4" color={"blackAlpha.900"}>
              Verification Confirmed!
            </Text>
            <Text fontWeight="bold" color={"blackAlpha.900"}>
              The verification of this person is confirmed.
            </Text>
            <Button
              onClick={() => setShowFRCImage(true)}
              mt="4"
              padding="8px 50px"
              borderRadius="20px"
              boxShadow="0 10px 15px rgba(0,0,0,0.19)"
              backgroundColor="#922c88"
              color="white"
              _hover={{ backgroundColor: "#7f276c" }}
            >
              Get FRC
            </Button>
          </Flex>
        ) : (
          <Flex direction="column" align="center">
            <Box
              bg="green" // Set the background color to green
              p={6} // Add padding to the
              borderRadius="full" // Make the box a circle
              boxShadow="lg" // Add a shadow to the circle
              mb={6}
            >
              <Icon as={FaCheck} color="white" boxSize={30} />
              {/* Use the check icon */}
            </Box>
            <Text
              fontWeight="bold"
              mb="4"
              color={"blackAlpha.900"}
              textAlign={"center"}
            >
              Form Submitted! We are checking your Realtionship.
            </Text>
            <Text fontWeight="bold" color={"blackAlpha.900"}>
              {" "}
              And Checking if the person is Deceased Or Not
            </Text>
            <Button
              onClick={handleVerification}
              padding="8px 50px"
              borderRadius="20px"
              boxShadow="0 10px 15px rgba(0,0,0,0.19)"
              backgroundColor="#922c88"
              color="white"
              _hover={{ backgroundColor: "#7f276c" }}
            >
              Verify Death
            </Button>
          </Flex>
        )}
        {showFRCImage && (
          <Flex direction="column" align="center">
            <Image src={FRCImage} alt="FRC Image" mb="4" maxW={"60px"} />
            <Button
              onClick={handleDownloadFRC}
              padding="8px 50px"
              borderRadius="20px"
              boxShadow="0 10px 15px rgba(0,0,0,0.19)"
              backgroundColor="#922c88"
              color="white"
              _hover={{ backgroundColor: "#7f276c" }}
            >
              Download FRC
            </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default NewCase;
