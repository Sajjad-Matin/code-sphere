import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Alexnder Hipp",
    role: "Project Manager & Full Stack Developer",
    bio: "Specializes in React.js, Laravel, database architecture and modern UI/UX design. 3+ years creating beautiful, responsive websites.",
    image: "src/assets/team/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
  },
  {
    name: "Christiana Rivers",
    role: "Graphic Designer & Full Stack Developer",
    bio: "Expert in React.js and Django. Builds scalable and fast websites.",
    image: "src/assets/team/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
  },
  {
    name: "christian Buehner",
    role: "Full Stack Developer",
    bio: "Versatile developer with expertise in both frontend and backend technologies. Problem solver extraordinaire.",
    image: "src/assets/team/christian-buehner-DItYlc26zVI-unsplash.jpg",
  },
  {
    name: "Shamsia Alizada",
    role: "Frontend Developer",
    bio: "Specializing in modern frontend technolgies like: React.js, TypeScript...",
    image: "src/assets/team/umar-ben-ZGQKW-nIW8o-unsplash.jpg",
  },
  {
    name: "vicky Mitrovic",
    role: "Sales Manager",
    bio: "Handles hosting, deployment, and server management. Keeps your websites running smoothly 24/7Driving sales growth with strategic planning and customer-focused leadership.",
    image: 'src/assets/team/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg',
  },
  {
    name: "Kelly Sikkema",
    role: "Sales Manager",
    bio: "Building strong client relationships and maximizing revenue opportunities.",
    image: 'src/assets/team/kelly-sikkema-JN0SUcTOig0-unsplash.jpg',
  },
];

export default function Team() {
  const bg = useColorModeValue("#ffffff", "#0f172a");
  const cardBg = useColorModeValue("#ffffff", "#1e293b");
  const headingColor = useColorModeValue("#1f2937", "#ffffff");
  const textColor = useColorModeValue("#4b5563", "#d1d5db");
  const roleColor = useColorModeValue("#2563eb", "#60a5fa");
  const borderColor = useColorModeValue("#93c5fd", "#2563eb");
  const hoverBgOutline = useColorModeValue("#eff6ff", "#1e293b");

  return (
    <Box py={20} bg={bg} px={4}>
      <Box textAlign="center" mb={16}>
        <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={6} color={headingColor}>
          Meet Our Team
        </Heading>
        <Text fontSize="xl" color={textColor} maxW="3xl" mx="auto">
          Our talented team of developers, designers, and project managers work
          together to bring your vision to life. Each member brings unique
          expertise and passion to every project.
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        maxW="6xl"
        mx="auto"
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            p={6}
            bg={cardBg}
            borderRadius="xl"
            boxShadow="lg"
            textAlign="center"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-8px)", boxShadow: "xl" }}
          >
            <Image
              src={member.image}
              alt={member.name}
              boxSize="128px"
              mx="auto"
              mb={6}
              borderRadius="full"
              objectFit="cover"
              objectPosition={'top'}
              boxShadow="lg"
              transition="transform 0.3s"
            />
            <Heading fontSize="xl" color={headingColor} mb={2}>
              {member.name}
            </Heading>
            <Text color={roleColor} fontWeight="semibold" mb={3}>
              {member.role}
            </Text>
            <Text color={textColor} fontSize="sm">
              {member.bio}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Box
        textAlign="center"
        mt={20}
        bgGradient={useColorModeValue(
          "linear(to-r, #eff6ff, #dbeafe)",
          "linear(to-r, #1e293b, #0f172a)"
        )}
        borderRadius="2xl"
        p={12}
      >
        <Heading fontSize="3xl" color={headingColor} mb={4}>
          Ready to Work With Us?
        </Heading>
        <Text fontSize="xl" color={textColor} mb={8} maxW="2xl" mx="auto">
          Our experienced team is ready to tackle your next project. Let's
          discuss how we can help bring your ideas to life.
        </Text>
        <Box
          display="flex"
          flexDir={{ base: "column", sm: "row" }}
          justifyContent="center"
          gap={4}
        >
          <Button
            bg="#2563eb"
            color="#ffffff"
            px={8}
            py={3}
            fontSize="lg"
            _hover={{ bg: "#1d4ed8" }}
          >
            <Link to={'/contact'}>
            Start a Project
            </Link>
          </Button>
          <Button
            variant="outline"
            borderColor={borderColor}
            color={roleColor}
            bg={cardBg}
            px={8}
            py={3}
            fontSize="lg"
            _hover={{ bg: hoverBgOutline }}
          >
            <Link to={'/projects'}>
            View Our Work
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
