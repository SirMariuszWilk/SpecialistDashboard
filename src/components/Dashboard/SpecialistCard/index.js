import React from "react";
import { CardContainer, Contact, BottomBar, BottomButton } from "./styles";
import UserRatings from "../UserRatings/index";
import ContactButton from "../ContactButton";
import IconSections from "../IconSections";
import SpecialistShowcase from "../SpecialistShowcase";

import bell from "../../../assets/icons/bell.svg";
import calendar from "../../../assets/icons/calendar.svg";
import envelope from "../../../assets/icons/envelope.svg";

const SpecialistCard = ({
  name,
  profession,
  image,
  rating,
  ratingsCount,
  userRating,
  id,
}) => (
  <CardContainer>
    <IconSections id={id} />

    <SpecialistShowcase image={image} name={name} profession={profession} />

    <Contact>
      <ContactButton icon={bell} />
      <ContactButton icon={calendar} />
      <ContactButton icon={envelope} />
    </Contact>

    <UserRatings
      rating={rating}
      ratingsCount={ratingsCount}
      userRating={userRating}
      id={id}
    />

    <BottomBar>
      <BottomButton tabIndex="0" role="button">
        PROFIL
      </BottomButton>
      <BottomButton tabIndex="0" role="button">
        BOOK A VISIT
      </BottomButton>
    </BottomBar>
  </CardContainer>
);

export default SpecialistCard;
