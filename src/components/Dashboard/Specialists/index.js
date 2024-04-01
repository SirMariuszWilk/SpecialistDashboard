import React, { useEffect } from "react";
import { SpecialistsContainer, Loader, NoResults } from "./styles";
import SpecialistCard from "../SpecialistCard/index";
import { filterBySearch } from "../utils";

const Specialists = ({ specialists, search = "", range, setRange }) => {
  const displayedSpecialists = filterBySearch(specialists, search);

  const handleScroll = () => {
    const scrollNearBottom =
      document.body.scrollHeight - (window.scrollY + window.innerHeight) < 24;
    const moreSpecialistsPresent = displayedSpecialists?.length > range;

    if (scrollNearBottom && moreSpecialistsPresent) {
      setRange((range) => range + 100);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [displayedSpecialists]);

  if (!specialists) {
    return <Loader />;
  }

  if (displayedSpecialists.length === 0) {
    return <NoResults>No results</NoResults>;
  }

  return (
    <SpecialistsContainer>
      {displayedSpecialists.slice(0, range).map((props) => (
        <SpecialistCard key={props.id} {...props} />
      ))}
    </SpecialistsContainer>
  );
};

export default Specialists;
