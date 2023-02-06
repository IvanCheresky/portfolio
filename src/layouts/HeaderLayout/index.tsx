import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "@/components/Header";

interface HeaderLayoutProps {
  currentRoute: string;
  children: ReactNode;
}

const HeaderLayout = ({ children, currentRoute }: HeaderLayoutProps) => {
  const bg = useColorModeValue("white", "black");

  return (
    <Box bg={bg} minW="100vw" minH="100vh" py="8" px="24">
      <Header currentRoute={currentRoute} />
      {children}
    </Box>
  );
};

export default HeaderLayout;
