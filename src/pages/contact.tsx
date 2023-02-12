import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import { Flex, Text, Icon, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MessageIcon from "@mui/icons-material/Message";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Skills() {
  return (
    <HeaderLayout currentRoute={routes.contact.path}>
      <Head>
        <title>Contact</title>
      </Head>
      <Text color="brand.orange" fontSize="7xl" mt="2%">
        Get in touch
      </Text>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          flexDir="column"
          alignItems="flex-start"
          rowGap="10"
          mt="5%"
          px="10%"
          overflow="scroll"
        >
          <Link href="mailto:ivancheresky@gmail.com">
            <Flex alignItems="center" columnGap="20px">
              <Icon as={MessageIcon} color="brand.orange" w="10" h="10" />
              <ChakraLink fontSize="30px">ivancheresky@gmail.com</ChakraLink>
            </Flex>
          </Link>
          <Flex alignItems="center" columnGap="20px">
            <Icon as={CallIcon} color="brand.orange" w="10" h="10" />
            <Text fontSize="30px">54-9-1167035370</Text>
          </Flex>
          <Link href="https://www.linkedin.com/in/ivancheresky/">
            <Flex alignItems="center" columnGap="20px">
              <Icon as={LinkedInIcon} color="brand.orange" w="10" h="10" />
              <ChakraLink fontSize="30px">Linkedin</ChakraLink>
            </Flex>
          </Link>
          <Link href="https://github.com/ivancheresky">
            <Flex alignItems="center" columnGap="20px">
              <Icon as={GitHubIcon} color="brand.orange" w="10" h="10" />
              <ChakraLink fontSize="30px">Github</ChakraLink>
            </Flex>
          </Link>
          <Flex alignItems="center" columnGap="20px">
            <Icon as={LocationOnIcon} color="brand.orange" w="10" h="10" />
            <Text fontSize="30px">Buenos Aires, Argentina</Text>
          </Flex>
        </Flex>
      </motion.div>
    </HeaderLayout>
  );
}
