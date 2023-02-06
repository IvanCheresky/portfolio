import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import { Text } from "@chakra-ui/react";
import SkillList from "@/components/SkillList";

export default function Skills() {
  return (
    <HeaderLayout currentRoute={routes.skills.path}>
      <Text color="brand.orange" fontSize="70px">
        My Skills
      </Text>
      <SkillList />
    </HeaderLayout>
  );
}
