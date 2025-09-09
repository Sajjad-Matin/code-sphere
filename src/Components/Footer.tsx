import {
  Box,
  Flex,
  Text,
  Heading,
  Link as ChakraLink,
  VStack,
  HStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { footerServices } from "../Data/Services";
import CompanyLogo from "./CompanyLogo";

const Footer = () => {
  const textColor = useColorModeValue("#cbd5e1", "#94a3b8");
  const borderColor = useColorModeValue("#1e293b", "#334155");
  const bgColor = useColorModeValue("#0f172a", "#020617");

  const pages = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Team", link: "/team" },
    { name: "Portfolio", link: "/projects" },
  ];

  return (
    <Box
      bg={bgColor}
      color="white"
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Box maxW="container.xl" mx="auto" px={4} py={12}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {/* Company Info */}
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <HStack mb={4}>
                <CompanyLogo />
              </HStack>
            </Link>
            <Text fontSize="sm" color={textColor} lineHeight="tall">
              We build fast, secure, and scalable websites that help businesses
              succeed online. Your trusted partner for web development and
              hosting solutions.
            </Text>
          </Box>

          {/* Quick Links */}
          <Box>
            <Heading as="h3" fontSize="lg" mb={4}>
              Quick Links
            </Heading>
            <VStack align="flex-start" spacing={2}>
              {pages.map((page) => (
                <ChakraLink
                  as={Link}
                  to={page.link}
                  fontSize="sm"
                  color={textColor}
                  _hover={{ color: "white" }}
                  key={page.name}
                >
                  {page.name}
                </ChakraLink>
              ))}
            </VStack>
          </Box>

          {/* Services */}
          <Box>
            <Heading as="h3" fontSize="lg" mb={4}>
              Services
            </Heading>
            <VStack align="flex-start" spacing={2}>
              {footerServices.map((service) => (
                <Text
                  fontSize="sm"
                  color={textColor}
                  _hover={{ color: "white" }}
                  key={service}
                >
                  {service}
                </Text>
              ))}
            </VStack>
          </Box>

          {/* Contact Info */}
          <Box>
            <Heading as="h3" fontSize="lg" mb={4}>
              Contact Info
            </Heading>
            <VStack align="flex-start" spacing={3}>
              <HStack>
                <MdMailOutline color="#66bfff" />
                <Text fontSize="sm" color={textColor}>
                  codesphere@gmail.com
                </Text>
              </HStack>
              <HStack>
                <FiPhone color="#66bfff" />
                <Text fontSize="sm" color={textColor}>
                  +1 (555) 987-6543
                </Text>
              </HStack>
              <HStack>
                <IoLocationOutline color="#66bfff" />
                <Text fontSize="sm" color={textColor}>
                  123 Tech Street San Francisco, CA 94105
                </Text>
              </HStack>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Bottom bar */}
        <Flex
          borderTop="1px solid"
          borderColor={borderColor}
          mt={8}
          pt={8}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Text fontSize="sm" color={textColor}>
            © {new Date().getFullYear()} Code Sphere. All rights reserved.
          </Text>
          <HStack spacing={6} mt={{ base: 4, md: 0 }}>
            <ChakraLink
              fontSize="sm"
              color={textColor}
              _hover={{ color: "white" }}
            >
              Privacy Policy
            </ChakraLink>
            <ChakraLink
              fontSize="sm"
              color={textColor}
              _hover={{ color: "white" }}
            >
              Terms of Service
            </ChakraLink>
            <ChakraLink
              fontSize="sm"
              color={textColor}
              _hover={{ color: "white" }}
            >
              Cookie Policy
            </ChakraLink>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
