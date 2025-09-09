import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
  const bgGradient = useColorModeValue(
    "linear(to-br, #0f172a, #1e3a8a, #1e293b)", // light mode
    "linear(to-br, #020617, #172554, #0f172a)" // dark mode
  );
  return (
    <Box
      position="relative"
      py={{ base: "20", lg: "32" }}
      overflow="hidden"
      color="white"
      bgGradient={bgGradient}
    >
      {/* Background Image Overlay */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/placeholder.svg?height=800&width=1200')"
        bgRepeat="no-repeat"
        bgSize="cover"
        opacity="0.1"
        zIndex={0}
      />

      {/* Animated Main Container */}
      <MotionBox
        maxW="4xl"
        mx="auto"
        px="4"
        textAlign="center"
        position="relative"
        zIndex={1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <MotionHeading
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          mb={6}
          bgGradient="linear(to-r, white, blue.200)"
          bgClip="text"
          color="transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We Build Fast, Secure, and Scalable Websites
        </MotionHeading>

        <MotionText
          fontSize={{ base: "xl", md: "2xl" }}
          mb={8}
          color="blue.100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Transform your business with cutting-edge web solutions that drive
          results and exceed expectations.
        </MotionText>

        <MotionFlex
          direction={{ base: "column", sm: "row" }}
          justify="center"
          gap={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button
            size="lg"
            bg="rgb(37, 99, 235)"
            _hover={{ bg: "rgb(29, 78, 216)" }}
            _active={{ bg: "rgb(37, 99, 235)" }}
            color="white"
            px={8}
            py={3}
            fontSize="lg"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            borderColor="blue.300"
            color="blue.100"
            _hover={{ bg: "blue.800" }}
            bg="transparent"
            px={8}
            py={3}
            fontSize="lg"
          >
            <Link to="/projects">View Our Work</Link>
          </Button>
        </MotionFlex>
      </MotionBox>
    </Box>
  );
};

export default HomePage;
