import React from "react";
import { Specialist, Avatar, Name, Profession, Initials } from "./styles";

import { images } from "../constants";
import { charToTheme } from "../utils";

const SpecialistShowcase = ({ name, profession, image }) => {
  const avatarImage = images[image];
  const theme = charToTheme(name[0]);
  const names = name.split(" ");

  return (
    <Specialist>
      <Avatar>
        {avatarImage ? (
          <img src={avatarImage} alt={"candidate image"} />
        ) : (
          <Initials color={theme.color} backgroundcolor={theme.backgroundColor}>
            {`${names[0][0]}${names[1][0]}`}
          </Initials>
        )}
      </Avatar>
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
    </Specialist>
  );
};

export default SpecialistShowcase;
