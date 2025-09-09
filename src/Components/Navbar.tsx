import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useColorMode,
  IconButton,
  useBreakpointValue,
  Collapse,
} from "@chakra-ui/react";
import CompanyLogo from "./CompanyLogo";
import { pages } from "../Data/PagesList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  const { colorMode } = useColorMode();

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position="sticky" top={0} zIndex={1000}>
      <HStack
        p={4}
        justifyContent="space-between"
        alignItems="center"
        bg={colorMode === "dark" ? "#0f172a" : "white"}
        borderBottom={colorMode === "dark" ? "1px solid rgb(51, 65, 85)" : ""}
        shadow="lg"
      >
        <CompanyLogo />
        {isMobile ? (
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            size="md"
          />
        ) : (
          <HStack gap={8}>
            {pages.map((page) => (
              <Link
                to={page.link}
                key={page.name}
              >
                <Text
                  fontSize="md"
                  display="inline"
                  pb={location.pathname === page.link ? 1 : 0}
                  borderBottom={
                    location.pathname === page.link
                      ? "2px solid rgb(37, 99, 235)"
                      : "none"
                  }
                  color={
                    location.pathname === page.link ? "rgb(37, 99, 235)" : "inherit"
                  }
                >
                  {page.name}
                </Text>
              </Link>
            ))}
            <ThemeToggle />
            <Button
              bg="rgb(37, 99, 235)"
              color="white"
              _hover={{ bg: "rgb(29, 78, 216)" }}
              _active={{ bg: "rgb(37, 99, 235)" }}
            >
              <Link to="contact">Get Quote</Link>
            </Button>
          </HStack>
        )}
      </HStack>

      {/* Mobile menu dropdown */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          display={{ md: "none" }}
          align="start"
          spacing={4} // more gap between items
          px={6}
          py={6}
          bg={
            colorMode === "dark"
              ? "rgba(30,30,30,0.6)"
              : "rgba(255,255,255,0.15)"
          }
          // glass bg
          backdropFilter="blur(12px)" // blur for glass effect
          boxShadow="lg"
          borderRadius="md"
          mt={2}
        >
          {pages.map((page) => (
            <Link
              to={page.link}
              key={page.name}
              style={{ width: "100%" }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Text
                fontSize="md"
                px={3}
                py={2}
                borderRadius="md"
                transition="all 0.2s"
                width="full"
                _hover={{
                  bg: "blue.50",
                  color: "blue.600",
                  transform: "translateX(4px)",
                }}
                borderBottom={
                  location.pathname === page.link
                    ? "2px solid rgb(37, 99, 235)"
                    : "none"
                }
                color={
                  location.pathname === page.link ? "rgb(37, 99, 235)" : "inherit"
                }
              >
                {page.name}
              </Text>
            </Link>
          ))}

          <HStack>
            <ThemeToggle />
            <Button
              width="full"
              bg="rgb(37, 99, 235)"
              color="white"
              _hover={{
                bg: "rgb(29, 78, 216)",
                transform: "scale(1.02)",
              }}
              _active={{ bg: "rgb(37, 99, 235)" }}
              transition="all 0.2s"
            >
              <Link to="contact">Get Quote</Link>
            </Button>
          </HStack>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
