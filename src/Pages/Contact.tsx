"use client"

import { useState, type FC } from "react"
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Icon,
  Stack,
} from "@chakra-ui/react"
import { CiMail } from "react-icons/ci" 
import { FiPhone } from "react-icons/fi" 
import { SlLocationPin } from "react-icons/sl" 
import { LuClock4 } from "react-icons/lu"
import { BsSend } from "react-icons/bs" 
import type { IconType } from "react-icons"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const bgCard = useColorModeValue("#ffffff", "#1e293b")
  const textPrimary = useColorModeValue("#1e293b", "#ffffff")
  const textSecondary = useColorModeValue("#475569", "#cbd5e1")

  interface InfoCardProps {
    icon: IconType
    title: string
    lines: string[]
  }

  const InfoCard: FC<InfoCardProps> = ({ icon, title, lines }) => (
    <Box bg={bgCard} p={6} boxShadow="lg" borderRadius="lg">
      <Stack direction="row" spacing={4} align="flex-start">
        <Box
          w="3rem"
          h="3rem"
          bgGradient="linear(to-br, #3b82f6, #2563eb)"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={icon} color="white" boxSize={6} />
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="semibold" color={textPrimary} mb={1}>
            {title}
          </Text>
          {lines.map((line, idx) => (
            <Text key={idx} color={textSecondary}>
              {line}
            </Text>
          ))}
        </Box>
      </Stack>
    </Box>
  )

  return (
    <Box minH="100vh" py={20} bg={useColorModeValue("#ffffff", "#0f172a")}> 
      <Box maxW="7xl" mx="auto" px={4}>
        <Box textAlign="center" mb={16}>
          <Heading fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold" color={textPrimary} mb={6}>
            Get In Touch
          </Heading>
          <Text fontSize="xl" color={textSecondary} maxW="3xl" mx="auto">
            Ready to start your project? Have questions about our services? We'd love to hear from you. Send us a
            message and we'll respond within 24 hours.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} maxW="6xl" mx="auto">
          <Box bg={bgCard} boxShadow="xl" p={6} borderRadius="lg">
            <Heading fontSize="2xl" color={textPrimary} mb={6}>
              Send us a Message
            </Heading>
            <form onSubmit={handleSubmit}>
              <VStack spacing={6} align="stretch">
                <FormControl isRequired>
                  <FormLabel color={textSecondary}>Full Name</FormLabel>
                  <Input
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    bg={useColorModeValue("white", "#334155")}
                    borderColor={useColorModeValue("#cbd5e1", "#475569")}
                    color={textPrimary}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={textSecondary}>Email Address</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    bg={useColorModeValue("white", "#334155")}
                    borderColor={useColorModeValue("#cbd5e1", "#475569")}
                    color={textPrimary}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={textSecondary}>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project or ask any questions..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    bg={useColorModeValue("white", "#334155")}
                    borderColor={useColorModeValue("#cbd5e1", "#475569")}
                    color={textPrimary}
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="blue"
                  bg="#2563eb"
                  _hover={{ bg: "#1e40af" }}
                  size="lg"
                  w="full"
                  leftIcon={<BsSend size={18} />}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>

          <VStack spacing={8} align="stretch">
            <InfoCard icon={CiMail} title="Email Us" lines={["codesphere@gmail.com", "support@codesphere.com"]} />
            <InfoCard icon={FiPhone} title="Call Us" lines={["+1 (555) 123-4567", "+1 (555) 987-6543"]} />
            <InfoCard icon={SlLocationPin } title="Visit Us" lines={["123 Tech Street", "San Francisco, CA 94105"]} />
            <InfoCard
              icon={LuClock4 }
              title="Business Hours"
              lines={[
                "Monday - Friday: 9:00 AM - 6:00 PM",
                "Saturday: 10:00 AM - 4:00 PM",
                "Sunday: Closed",
              ]}
            />
            <Box
              bgGradient="linear(to-r, #2563eb, #1e40af)"
              p={6}
              borderRadius="lg"
              color="white"
              boxShadow="lg"
            >
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                Follow Us
              </Text>
              <Stack direction="row" spacing={4}>
                <Text as="a" href="#" color="#bfdbfe" _hover={{ color: "white" }}>
                  LinkedIn
                </Text>
                <Text as="a" href="#" color="#bfdbfe" _hover={{ color: "white" }}>
                  Twitter
                </Text>
                <Text as="a" href="#" color="#bfdbfe" _hover={{ color: "white" }}>
                  GitHub
                </Text>
                <Text as="a" href="#" color="#bfdbfe" _hover={{ color: "white" }}>
                  Instagram
                </Text>
              </Stack>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
