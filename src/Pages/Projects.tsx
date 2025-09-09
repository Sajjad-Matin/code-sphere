import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Tag,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiExternalLink as ExternalLink   } from "react-icons/fi";
import { LuGithub as Github } from "react-icons/lu"; 

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Responsive design for all devices.",
      image: "src/assets/placeholder.svg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "HealthTracker Mobile App",
      description:
        "Cross-platform health and fitness tracking application with workout plans, nutrition logging, and progress analytics. Syncs with wearable devices.",
      image: "src/assets/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "EduLearn Online Platform",
      description:
        "Educational platform with course management, video streaming, quizzes, and progress tracking. Supports multiple user roles and payment integration.",
      image: "src/assets/placeholder.svg",
      technologies: ["Angular", "Django", "PostgreSQL", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "PropertyHub Real Estate Portal",
      description:
        "Real estate listing platform with advanced search filters, virtual tours, mortgage calculator, and agent management system. SEO optimized for local searches.",
      image: "src/assets/placeholder.svg",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "TravelMate Booking System",
      description:
        "Comprehensive travel booking system with flight, hotel, and car rental options. User reviews, itinerary management, and secure payment gateway integration.",
      image: "src/assets/placeholder.svg",
      technologies: ["Vue.js", "Laravel", "MySQL", "PayPal API"],
      liveUrl: "#",
      githubUrl: "#",
    },{
      title: "Foodie Delivery App",
      description:
        "On-demand food delivery application with restaurant listings, real-time order tracking, and user reviews. Integrated with multiple payment options.",
      image: "src/assets/placeholder.svg",
      technologies: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    }
  ];

  const bg = useColorModeValue("#ffffff", "#0f172a");
  const cardBg = useColorModeValue("#ffffff", "#1e293b");
  const cardText = useColorModeValue("#1e293b", "#ffffff");
  const subText = useColorModeValue("#475569", "#cbd5e1");
  const tagBg = useColorModeValue("#dbeafe", "#1e40af");
  const tagColor = useColorModeValue("#1e40af", "#bfdbfe");
  const borderColor = useColorModeValue("#e2e8f0", "#334155");

  return (
    <Box minH="100vh" py="20" bg={bg}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6 }}>
        {/* Header */}
        <Box textAlign="center" mb={16}>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={4} color={cardText}>
            Our Portfolio
          </Heading>
          <Text fontSize="xl" maxW="3xl" mx="auto" color={subText}>
            Explore our recent projects and see how we've helped businesses across various industries achieve their
            digital goals with custom web solutions.
          </Text>
        </Box>

        {/* Projects Grid */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={16}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg={cardBg}
              borderRadius="xl"
              boxShadow="lg"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ boxShadow: "xl" }}
            >
              <Box position="relative" overflow="hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  w="full"
                  h="200px"
                  objectFit="cover"
                  transition="transform 0.3s"
                  _groupHover={{ transform: "scale(1.05)" }}
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-t, rgba(0,0,0,0.5), transparent)"
                  opacity="0"
                  transition="opacity 0.3s"
                  _groupHover={{ opacity: 1 }}
                />
              </Box>

              <Box p={6}>
                <Heading fontSize="xl" color={cardText} mb={3}>
                  {project.title}
                </Heading>
                <Text mb={4} color={subText}>
                  {project.description}
                </Text>

                <HStack wrap="wrap" spacing={2} mb={4}>
                  {project.technologies.map((tech, techIndex) => (
                    <Tag
                      key={techIndex}
                      size="sm"
                      px={3}
                      py={1}
                      bg={tagBg}
                      color={tagColor}
                      borderRadius="full"
                    >
                      {tech}
                    </Tag>
                  ))}
                </HStack>

                <HStack spacing={3}>
                  <Button
                    size="sm"
                    bg="#2563eb"
                    _hover={{ bg: "#1d4ed8" }}
                    color="white"
                    leftIcon={<ExternalLink size={16} />}
                  >
                    <Link to={project.liveUrl} target="_blank" >
                    Live Demo
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    borderColor={borderColor}
                    color={subText}
                    _hover={{
                      bg: useColorModeValue("#f8fafc", "#334155"),
                    }}
                    leftIcon={<Github size={16} />}
                  >
                    <Link to={project.githubUrl} target="_blank">

                    Code
                    </Link>
                  </Button>
                </HStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* CTA Section */}
        <Box
          textAlign="center"
          bgGradient={useColorModeValue(
            "linear(to-r, #eff6ff, #dbeafe)",
            "linear(to-r, #1e293b, #334155)"
          )}
          borderRadius="2xl"
          p={12}
        >
          <Heading fontSize="3xl" mb={4} color={cardText}>
            Like What You See?
          </Heading>
          <Text fontSize="xl" color={subText} maxW="2xl" mx="auto" mb={8}>
            Ready to start your own project? Let's discuss your requirements and create something amazing together.
          </Text>
          <Button
            size="lg"
            bg="#2563eb"
            _hover={{ bg: "#1d4ed8" }}
            color="white"
            px={8}
            py={6}
          >
            <Link to={'/contact'}>
            Start Your Project
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
