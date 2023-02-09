import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import { Text } from "@chakra-ui/react";
import SkillList from "@/components/SkillList";
import Head from "next/head";

export default function Skills() {
  return (
    <HeaderLayout currentRoute={routes.skills.path}>
      <Head>
        <title>Skills</title>
      </Head>
      <Text color="brand.orange" fontSize="7xl" mt="2%">
        My Skills
      </Text>
      <SkillList />
    </HeaderLayout>
  );
}
