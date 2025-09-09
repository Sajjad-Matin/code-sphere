import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";

const WhyChooseUs = () => {
  const sectionBg = useColorModeValue("#f8fafc", "#1e293b"); // slate-50 / slate-800
  const headingColor = useColorModeValue("#1e293b", "#ffffff"); // slate-800 / white
  const descColor = useColorModeValue("#475569", "#cbd5e1"); // slate-600 / slate-300

  const features = [
    {
      title: "Lightning Fast Performance",
      description:
        "Optimized code and modern frameworks ensure your website loads in under 3 seconds.",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock technical support to keep your business running smoothly.",
    },
    {
      title: "Affordable Pricing",
      description:
        "Competitive rates without compromising on quality or functionality.",
    },
    {
      title: "Proven Track Record",
      description:
        "Over 100+ successful projects delivered on time and within budget.",
    },
  ];

  return (
    <Box py={20} bg={sectionBg}>
      <Container maxW="6xl" px={4}>
        <Box maxW="4xl" mx="auto" textAlign="center" mb={16}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color={headingColor}
            mb={4}
          >
            Why Choose Us?
          </Heading>
          <Text fontSize="xl" color={descColor}>
            We deliver exceptional results through expertise, dedication, and
            cutting-edge technology
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {features.map((feature, index) => (
            <Flex key={index} align="start" gap={4}>
              <Icon
                as={BsCheckCircle}
                w={6}
                h={6}
                color="blue.500"
                mt={1}
                flexShrink={0}
              />
              <VStack align="start" spacing={2}>
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="semibold"
                  color={headingColor}
                >
                  {feature.title}
                </Heading>
                <Text color={descColor}>{feature.description}</Text>
              </VStack>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
