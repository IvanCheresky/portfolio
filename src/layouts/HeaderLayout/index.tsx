import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "../../components/Header";
import routes from "../../utils/routes";

interface HeaderLayoutProps {
  children: ReactNode;
}

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  const bg = useColorModeValue("white", "black");

  return (
    <Box bg={bg} minW="100vw" minH="100vh" py="8" px="24">
      <Header currentRoute={routes.home.path} />
      {children}
    </Box>
  );
};

export default HeaderLayout;
