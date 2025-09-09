import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { services } from "../Data/Services";

const Services = () => {
  return (
    <Box
      as="section"
      minH="100vh"
      py={20}
      bg="#FFFFFF" // white
      _dark={{ bg: "#111827" }} // gray.900
    >
      <Box maxW="7xl" mx="auto" px={4}>
        {/* Header */}
        <Box textAlign="center" mb={16}>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            color="#1F2937" // gray.800
            _dark={{ color: "#FFFFFF" }}
            mb={6}
          >
            Our Services
          </Heading>
          <Text
            fontSize="xl"
            color="#4B5563" // gray.600
            _dark={{ color: "#D1D5DB" }} // gray.300
            maxW="3xl"
            mx="auto"
          >
            We offer comprehensive web development and digital solutions to help
            your business succeed online. From custom websites to ongoing
            maintenance, we've got you covered.
          </Text>
        </Box>

        {/* Services Grid */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          maxW="6xl"
          mx="auto"
          mb={16}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              bg="#FFFFFF"
              _dark={{ bg: "#374151" }}
              border="none"
              transition="all 0.3s ease"
              boxShadow="md"
              _hover={{
                boxShadow:
                  "0 10px 15px -3px rgba(59, 130, 246, 0.4), 0 4px 6px -2px rgba(59, 130, 246, 0.1)",
              }}
            >
              <CardHeader pb={4}>
                <Box display="flex" alignItems="center" mb={4} gap={4}>
                  <Box
                    w={12}
                    h={12}
                    bgGradient="linear(to-br, #3B82F6, #2563EB)"
                    borderRadius="md"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    transition="transform 0.3s ease"
                    _groupHover={{ transform: "scale(1.1)" }}
                  >
                    <service.icon color="#FFFFFF" size="24" />
                  </Box>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    color="#1F2937"
                    _dark={{ color: "#FFFFFF" }}
                  >
                    {service.title}
                  </Heading>
                </Box>
              </CardHeader>
              <CardBody>
                <Text
                  color="#4B5563"
                  _dark={{ color: "#D1D5DB" }}
                  fontSize="16px"
                  mb={4}
                  lineHeight="1.625"
                >
                  {service.description}
                </Text>
                <SimpleGrid columns={2} spacing={2}>
                  {service.features.map((feature, featureIndex) => (
                    <Box
                      key={featureIndex}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Box w={2} h={2} bg="#3B82F6" borderRadius="full" />
                      <Text
                        fontSize="sm"
                        color="#4B5563"
                        _dark={{ color: "#9CA3AF" }}
                      >
                        {feature}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* CTA Section */}
        <Box
          textAlign="center"
          bgGradient="linear(to-r, #EFF6FF, #DBEAFE)" // blue.50 to blue.100
          _dark={{ bgGradient: "linear(to-r, #374151, #4B5563)" }} // gray.700 to gray.600
          borderRadius="2xl"
          p={12}
        >
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            color="#1F2937" // gray.800
            _dark={{ color: "#FFFFFF" }}
            mb={4}
          >
            Need a Custom Solution?
          </Heading>
          <Text
            fontSize="xl"
            color="#4B5563" // gray.600
            _dark={{ color: "#D1D5DB" }} // gray.300
            mb={8}
            maxW="2xl"
            mx="auto"
          >
            Every business is unique. Let's discuss your specific requirements
            and create a tailored solution that fits your needs and budget.
          </Text>
          <Button
            size="lg"
            bg="#2563EB" // blue.600
            _hover={{ bg: "#1D4ED8" }} // blue.700
            color="#FFFFFF" // white
            px={8}
            py={3}
          >
            <Link to={"/contact"}>Get Custom Quote</Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
