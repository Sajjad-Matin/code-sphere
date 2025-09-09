import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
      const error = useRouteError();
  return (
    <>
        <Navbar />
        <Flex direction="column" minH="90.6vh">
        <Box flex="1" padding={5}>
          <Heading>Oops!</Heading>
          <Text mt={2}>
            {isRouteErrorResponse(error)
              ? "This page does not exist."
              : "An unexpected error occurred."}
          </Text>
        </Box>
        <Footer />
      </Flex>
    </>
  )
}

export default ErrorPage