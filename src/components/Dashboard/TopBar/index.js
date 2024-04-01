import React from "react";
import {
  Title,
  Switch,
  TopBarContainer,
  LeftButton,
  RightButton,
  SearchInput,
  InputContainer,
  Icon,
  SwitchContainer,
} from "./styles";

import searchIcon from "../../../assets/icons/ic-search.svg";
import { debounce } from "../../../utils/index";

const TopBar = ({
  specialistsCount,
  handleInputChange,
  showMySpecialists,
  setShowMySpecialists,
}) => {
  const debouncedSearchData = debounce(handleInputChange, 500);

  const title = `${
    showMySpecialists ? "My" : "Favorite"
  } specialists (${specialistsCount})`;

  return (
    <TopBarContainer>
      <Title>{title}</Title>
      <SwitchContainer>
        <Switch>
          <LeftButton
            selected={!showMySpecialists}
            onClick={() => setShowMySpecialists(false)}
          >
            All favorite
          </LeftButton>
          <RightButton
            selected={showMySpecialists}
            onClick={() => setShowMySpecialists(true)}
          >
            My specialists
          </RightButton>
        </Switch>
      </SwitchContainer>

      <InputContainer>
        <SearchInput
          placeholder="Search..."
          onChange={(e) => debouncedSearchData(e.target.value)}
        />
        <Icon src={searchIcon} alt={"search icon"} />
      </InputContainer>
    </TopBarContainer>
  );
};

export default TopBar;
