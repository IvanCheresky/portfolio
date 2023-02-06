import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";

export default function Skills() {
  return (
    <HeaderLayout currentRoute={routes.skills.path}>
      PORTFOLIO Skills
    </HeaderLayout>
  );
}
