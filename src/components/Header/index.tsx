import { Box, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

interface HeaderProps {
  currentRoute: string;
}

const Header = ({ currentRoute }: HeaderProps) => {
  const [onClient, setOnClient] = useState(false);

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)", {
    fallback: true,
  });

  useEffect(() => {
    setOnClient(true);
  }, []);

  const getHeader = () => {
    return isLargerThan800 ? (
      <DesktopHeader currentRoute={currentRoute} />
    ) : (
      <MobileHeader currentRoute={currentRoute} />
    );
  };

  return <Box h="48px">{onClient ? getHeader() : null}</Box>;
};

export default Header;
