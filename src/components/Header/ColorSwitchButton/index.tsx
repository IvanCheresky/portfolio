import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorSwitchButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      border="1px"
      borderColor="brand.orange"
      bg="transparent"
      aria-label="Toggle light dark mode"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    />
  );
};

export default ColorSwitchButton;
