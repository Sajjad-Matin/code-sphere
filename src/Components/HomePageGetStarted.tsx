import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const HomePageGetStarted = () => {
  return (
    <Box
      as="section"
      py={20}
      px={4}
      bgGradient="linear(to-r, #2563EB, #1E40AF)" // blue.600 to blue.800 hex
      color="white"             
      textAlign="center"
    >
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        mb={4}
      >
        Ready to Get Started?
      </Heading>
      <Text
        fontSize="xl"                             
        mb={8}
        maxW="2xl"
        mx="auto"
        color="blue.100"               
      >
        Let's discuss your project and create something amazing together. Get your free consultation today.
      </Text>
      <Button
        size="lg"
        bg="white"                               
        color="#2563EB"                          // text-blue-600
        _hover={{ bg: "#EBF4FF" }}               // hover:bg-blue-50
        px={8}
        py={3}
        fontSize="lg"
      >
        <Link to={'/contact'}>
        Start Your Project <ArrowRightIcon ml={2} w={5} h={5} />
        </Link>
      </Button>
    </Box>
  )
}

export default HomePageGetStarted
