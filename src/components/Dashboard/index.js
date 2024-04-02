import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./TopBar";
import Specialists from "./Specialists";
import { DashboardContainer } from "./styles";
import { addSpecialists } from "./slice";
import { fetch } from "../../utils/index";

const Dashboard = () => {
  const dispatch = useDispatch();

  const specialists = useSelector((state) => state.dashboard.specialists);

  const [search, setSearch] = useState("");
  const [range, setRange] = useState(100);
  const [showMySpecialists, setShowMySpecialists] = useState(false);

  useEffect(() => {
    const data = fetch("/specialists");
    dispatch(addSpecialists({ data }));
  }, []);

  const filteredSpecialists = showMySpecialists
    ? specialists.filter((specialist) => specialist.isMySpecialist)
    : specialists;

  const setMySpecialists = (value) => {
    setShowMySpecialists(value);
    window.scrollTo(0, 0);

    if (value) {
      setRange(100);
    }
  };

  return (
    <DashboardContainer>
      <TopBar
        specialistsCount={filteredSpecialists?.length || 0}
        handleInputChange={setSearch}
        showMySpecialists={showMySpecialists}
        setShowMySpecialists={setMySpecialists}
      />
      <Specialists
        specialists={filteredSpecialists}
        search={search}
        range={range}
        setRange={setRange}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
