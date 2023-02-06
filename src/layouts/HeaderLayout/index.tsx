import { Box, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "@/components/Header";

interface HeaderLayoutProps {
  currentRoute: string;
  children: ReactNode;
}

const HeaderLayout = ({ children, currentRoute }: HeaderLayoutProps) => {
  const bg = useColorModeValue("white", "brand.black");

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box
      bg={bg}
      minW="100vw"
      minH="100vh"
      py={isLargerThan800 ? "8" : "2"}
      px={isLargerThan800 ? "24" : "4"}
    >
      <Header currentRoute={currentRoute} />
      {children}
    </Box>
  );
};

export default HeaderLayout;
