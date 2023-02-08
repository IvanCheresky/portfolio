import { useColorModeValue } from "@chakra-ui/react";
import { colors } from "@/utils/theme";

const useContentStyle = () => {
  const contentBg = useColorModeValue("white", "#000006");
  const contentColor = useColorModeValue(colors.brand.black, "white");

  return {
    background: contentBg,
    color: contentColor,
    borderRadius: "25px",
    boxShadow: "none",
  };
};

export default useContentStyle;
