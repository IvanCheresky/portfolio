import { Button, Flex, Text } from "@chakra-ui/react";
import HeaderLayout from "../layouts/HeaderLayout";

export default function Home() {
  return (
    <HeaderLayout>
      <Flex flexDir="column" alignItems="flex-start">
        <Text color="brand.orange" fontSize="90px">
          Ivan Cheresky
        </Text>
        <Text fontSize="30px">Software Developer</Text>
        <Button
          bg="brand.orange"
          textTransform="uppercase"
          w="auto"
          border="3px solid"
          borderColor="brand.orange"
          borderRadius="6px"
          px="24px"
        >
          Contact me
        </Button>
      </Flex>
    </HeaderLayout>
  );
}
