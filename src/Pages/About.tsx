import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// Example icon imports (replace with your actual icons)
import { GoClock } from "react-icons/go"; 
import { FiTarget, FiAward  } from "react-icons/fi"; 
import { LuUsers } from "react-icons/lu"; 
import team from '../assets/team.webp'

const About = () => {
  // Colors for light/dark mode
  const bgColor = useColorModeValue("#FFFFFF", "#0F172A"); // white / slate-900 approx
  const textColor = useColorModeValue("#1E293B", "#FFFFFF"); // slate-800 / white
  const subTextColor = useColorModeValue("#475569", "#CBD5E1"); // slate-600 / slate-300
  const cardBg = useColorModeValue("#FFFFFF", "#334155"); // white / slate-800 approx
  const cardTextColor = useColorModeValue("#1E293B", "#FFFFFF"); // slate-800 / white
  const cardSubTextColor = useColorModeValue("#475569", "#CBD5E1"); // slate-600 / slate-300
  const gradientFrom = useColorModeValue("#2563EB", "#1E40AF"); // blue-600 light/dark
  const gradientTo = useColorModeValue("#1E40AF", "#1E3A8A"); // blue-800 light/dark
  const statTextColor = useColorModeValue("#BFDBFE", "#93C5FD"); // blue-200 / blue-300

  return (
    <Box minH="100vh" py={20} bg={bgColor} color={textColor}>
      <Box maxW="7xl" mx="auto" px={4}>
        {/* Hero Section */}
        <Box maxW="4xl" mx="auto" textAlign="center" mb={20}>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            mb={6}
            color={textColor}
          >
            About Our Company
          </Heading>
          <Text
            fontSize="xl"
            color={subTextColor}
            lineHeight="tall"
          >
            We're a passionate team of developers and designers dedicated to
            helping businesses establish a strong online presence through fast,
            secure, and scalable web solutions.
          </Text>
        </Box>

        {/* Mission Section */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={12}
          alignItems="center"
          mb={20}
        >
          <Box>
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              mb={6}
              color={textColor}
            >
              Our Mission
            </Heading>
            <Text
              fontSize="lg"
              color={subTextColor}
              mb={6}
              lineHeight="tall"
            >
              We believe every business deserves a professional online presence
              that drives growth and success. Our mission is to make
              high-quality web development accessible and affordable for
              businesses of all sizes.
            </Text>
            <Text
              fontSize="lg"
              color={subTextColor}
              mb={8}
              lineHeight="tall"
            >
              Since our founding, we've helped over 100 businesses transform
              their digital presence with custom websites, eCommerce solutions,
              and ongoing technical support that keeps them ahead of the
              competition.
            </Text>
            <Button
              bg="#2563EB"
              _hover={{ bg: "#1D4ED8" }}
              color="white"
            >
              <Link to={'/projects'}>
              View Our Work
              </Link>
            </Button>
          </Box>
          <Box position="relative" rounded="2xl" shadow="xl" overflow="hidden">
            <Image
              src={team}
              alt="Our team working"
              style={{ borderRadius: "1rem" }}
            />
          </Box>
        </SimpleGrid>

        {/* Why Choose Us */}
        <Box mb={20}>
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            mb={12}
            color={textColor}
          >
            Why Clients Choose Us
          </Heading>
          <SimpleGrid columns={{ md: 2, lg: 4 }} gap={8}>
            {[ 
              {
                icon: GoClock,
                title: "Speed",
                text: "Fast project delivery and lightning-quick website performance that keeps your users engaged."
              },
              {
                icon: FiTarget,
                title: "Affordability",
                text: "Competitive pricing without compromising on quality. Great value for businesses of all sizes."
              },
              {
                icon: LuUsers,
                title: "Support",
                text: "24/7 technical support and ongoing maintenance to keep your website running smoothly."
              },
              {
                icon: FiAward,
                title: "Quality",
                text: "Premium code quality and modern design standards that ensure long-term success."
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <Card
                key={i}
                textAlign="center"
                bg={cardBg}
                color={cardTextColor}
                boxShadow="lg"
                border="none"
                _hover={{ boxShadow: "xl" }}
                transition="box-shadow 0.3s"
                borderRadius="md"
              >
                <CardBody pt={8} pb={6}>
                  <Box
                    w={16}
                    h={16}
                    bgGradient={`linear(to-br, #3B82F6, #2563EB)`}
                    rounded="full"
                    mx="auto"
                    mb={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon style={{ width: 32, height: 32, color: "white" }} />
                  </Box>
                  <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={2} color={cardTextColor}>
                    {title}
                  </Heading>
                  <Text color={cardSubTextColor}>{text}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Stats Section */}
        <Box
          bgGradient={`linear(to-r, ${gradientFrom}, ${gradientTo})`}
          _dark={{ bgGradient: `linear(to-r, #1D4ED8, #1E3A8A)` }}
          rounded="2xl"
          p={12}
          textAlign="center"
          color="white"
        >
          <Heading fontSize="3xl" fontWeight="bold" mb={12}>
            Our Track Record
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" },
            ].map(({ number, label }, i) => (
              <Box key={i}>
                <Text fontSize="4xl" fontWeight="bold" mb={2}>
                  {number}
                </Text>
                <Text color={statTextColor}>{label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
