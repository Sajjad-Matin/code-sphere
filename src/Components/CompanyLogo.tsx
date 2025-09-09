import { Box, Text } from "@chakra-ui/react";
import { CgCode } from "react-icons/cg";
import { Link } from "react-router-dom";

const CompanyLogo = () => {
  return (
    <Link to={"/"}>
      <Box display="flex" alignItems="center" gap={2}>
        <Box
          rounded={"xl"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={8}
          height={8}
          bg="linear-gradient(to right bottom, rgb(59, 130, 246), rgb(37, 99, 235))"
          color="white"
        >
          <CgCode color="white" size={25} />
        </Box>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Code Sphere
        </Text>
      </Box>
    </Link>
  );
};

export default CompanyLogo;
