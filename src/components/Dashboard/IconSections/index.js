import React from "react";
import { TopCardSection, Menu, Heart } from "./styles";

import { ReactSVG } from "react-svg";
import { setAsMySpecialist } from "../slice";
import unionIcon from "../../../assets/icons/union.svg";
import heartFillIcon from "../../../assets/icons/heart-fill.svg";
import { useDispatch } from "react-redux";

const IconSections = ({ id }) => {
  const dispatch = useDispatch();

  const moveToMySpecialists = () => {
    dispatch(setAsMySpecialist({ id }));
  };

  return (
    <TopCardSection>
      <Menu role="button" tabIndex="0">
        <ReactSVG src={unionIcon} />
      </Menu>

      <Heart
        role="button"
        onClick={moveToMySpecialists}
        onKeyDown={(e) => (e.key === "Enter" ? moveToMySpecialists() : null)}
        tabIndex="0"
      >
        <ReactSVG src={heartFillIcon} />
      </Heart>
    </TopCardSection>
  );
};

export default IconSections;
