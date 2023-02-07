import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

interface HeaderProps {
  currentRoute: string;
}

const Header = ({ currentRoute }: HeaderProps) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)", {
    fallback: true,
  });

  if (isLargerThan800) {
    return <DesktopHeader currentRoute={currentRoute} />;
  } else {
    return <MobileHeader currentRoute={currentRoute} />;
  }
};

export default Header;
