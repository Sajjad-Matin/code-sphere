import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
} from "@chakra-ui/react";
import cardServices from "../Data/CardServices";

const HomePageServices = () => {
  const bgGradient = useColorModeValue(
    "linear(to-b, #ffffff, #eff6ff)", // light
    "linear(to-b, #0f172a, #1e293b)" // dark
  );

  const cardBg = useColorModeValue("#ffffff", "#1a202c"); // white, gray.800
  const textColor = useColorModeValue("#1a202c", "#ffffff"); // gray.800, white
  const descColor = useColorModeValue("#4a5568", "#d1d5db"); // gray.600, gray.300

  return (
    <Box py={20} px={6} bgGradient={bgGradient}>
      <Box textAlign="center" mb={16}>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4} color={textColor}>
          Our Core Services
        </Heading>
        <Text fontSize="xl" maxW="2xl" mx="auto" color={descColor}>
          We provide comprehensive web solutions to help your business thrive
          online
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} maxW="6xl" mx="auto">
        {cardServices.map((service) => (
          <Card
            key={service.title}
            bg={cardBg}
            shadow="lg"
            transition="all 0.3s"
            _hover={{
              shadow: "xl",
              transform: "translateY(-8px)",
            }}
            border="none"
          >
            <CardHeader textAlign="center" pb={4}>
              <Box
                w="4rem"
                h="4rem"
                bgGradient="linear(to-br, #3b82f6, #2563eb)"
                rounded="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                mb={4}
                transition="transform 0.3s"
                _groupHover={{ transform: "scale(1.1)" }}
              >
                <service.icon color="white" size={32} />
              </Box>
              <Heading fontSize="xl" color={textColor}>
                {service.title}
              </Heading>
            </CardHeader>
            <CardBody textAlign="center">
              <Text fontSize="md" color={descColor}>
                {service.description}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePageServices;
