import React from "react";
import { Container, Icon } from "./styles";
import { ReactSVG } from "react-svg";

const ContactButton = ({ icon }) => (
  <Container tabIndex="0" role="button">
    <Icon>
      <ReactSVG src={icon} />
    </Icon>
  </Container>
);

export default ContactButton;
