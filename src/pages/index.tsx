import { Button, Flex, Text } from "@chakra-ui/react";
import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";

export default function Home() {
  return (
    <HeaderLayout currentRoute={routes.home.path}>
      <Flex flexDir="column" alignItems="flex-start" h="100%">
        <Text color="brand.orange" fontSize="90px" pt="15%">
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
          mt="3%"
        >
          Contact me
        </Button>
      </Flex>
    </HeaderLayout>
  );
}
