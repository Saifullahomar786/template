import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Button,
  Heading,
  Text,
  Image,
  FormLabel,
} from "@chakra-ui/react";
import Axios from "axios";
import bg from "./bg.jpg";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/login", {
      Username: username,
      Password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("");
        // Handle successful login here
        navigate("/dashboard"); // Use navigate to go to the Dashboard component
      }
    }).catch((error) => {
      setLoginStatus("Invalid username or password");
    });
  };

  return (
    <Box display="flex" className="landing-page" minHeight="100vh" backgroundColor={"#F4E0F5"}>
      <Box flex="1" className="image-side">
        <Image src={bg} alt="Landing Page Image" className="img-fluid" />
      </Box>
      <Box
        flex="1"
        className="login-side"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          p="8"
          maxW="400px"
          w="100%"
          background={"white"}
          boxShadow={"11px 12px 13px 12px rgb(207, 207, 207)"}
          padding={"60px"}
          borderRadius={"14px"}
        >
          <Heading
            as="h2"
            fontWeight="800"
            color="#922C88"
            mb="10"
            fontSize={"48px"}
            textAlign="center"
          >
            Sign In
          </Heading>
          <form onSubmit={login}>
            <Box mb="1">
              <FormLabel
                mb="2"
                htmlFor="username"
                fontSize={"18px"}
                fontWeight={"500"}
                color={"blackAlpha.900"}
              >
                Username
              </FormLabel>
              <Input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                w="100%"
                borderRadius="5px"
                boxShadow="0 10px 15px rgba(0,0,0,0.19)"
                border={"1px solid gray"}
                padding="6px"
              />
            </Box>
            <Box mb="4">
              <FormLabel
                mb="2"
                htmlFor="password"
                fontSize={"18px"}
                fontWeight={"500"}
                color={"blackAlpha.900"}
              >
                Password
              </FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                w="100%"
                borderRadius="5px"
                boxShadow="0 10px 15px rgba(0,0,0,0.19)"
                border={"1px solid gray"}
                padding="6px"
              />
              <Link to="/forgotpassword">
                <Text mt="2" ml="4" color="blue.500">
                  Forgot password?
                </Text>
              </Link>
            </Box>
            <Button
              type="submit"
              bgColor="#922c88"
              color="white"
              borderRadius="8px"
              boxShadow="0 10px 15px rgba(0,0,0,0.19)"
              _hover={{ bg: "#922c88" }}
              w="100%"
            >
              Sign in
            </Button>
            <Text color="red.400" fontSize="15px" textAlign="center" mt="1">
              {loginStatus}
            </Text>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
