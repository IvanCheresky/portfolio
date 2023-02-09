import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "@/components/Header";

interface HeaderLayoutProps {
  currentRoute: string;
  children: ReactNode;
}

const HeaderLayout = ({ children, currentRoute }: HeaderLayoutProps) => {
  const bg = useColorModeValue("white", "brand.black");

  return (
    <Box
      bg={bg}
      minW="100vw"
      minH="100vh"
      py={{
        base: 2,
        md: 8,
      }}
      px={{
        base: 4,
        md: 24,
      }}
      position="absolute"
    >
      <Header currentRoute={currentRoute} />
      {children}
    </Box>
  );
};

export default HeaderLayout;
