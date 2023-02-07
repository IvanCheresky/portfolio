import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { interestedSkills, skills } from "@/utils/skills";
import Skill from "./Skill";

const SkillList = () => (
  <Flex flexDir="column" alignItems="center" mt="40px">
    <Grid
      templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
      gap={6}
      width="70%"
    >
      {skills.map((skill) => {
        return (
          <Skill
            imgSrc={`/skills/${skill.fileName}`}
            text={skill.description}
            key={skill.description}
          />
        );
      })}
    </Grid>
    <Text mt="40px" fontSize="30px">
      Interested in or currently learning:
    </Text>
    <Grid mt="12px">
      {interestedSkills.map((skill) => {
        return (
          <Skill
            imgSrc={`/skills/${skill.fileName}`}
            text={skill.description}
            key={skill.description}
          />
        );
      })}
    </Grid>
  </Flex>
);
export default SkillList;
