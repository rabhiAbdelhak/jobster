import React from "react";
import { FaCalendarCheck, FaCreativeCommonsNcEu, FaSuitcaseRolling } from "react-icons/fa";
import styled from "styled-components";

//local items
import StatsItem from "./StatsItem";

const StatsContainer = ({ stats }) => {
  const defaultStats = [
    {
      title: "Pending Applications",
      value: stats.pending,
      icon: <FaSuitcaseRolling />,
      background: "rgb(163, 209, 163)",
      color: "rgb(17, 126, 17)",
    },
    {
      title: "Interview Scheduled",
      value: stats.interview,
      icon: <FaCalendarCheck />,
      background: "rgb(173, 215, 243)",
      color: "rgba(0, 153, 255)",
    },
    {
      title: "Jobs Declined",
      value: stats.declined,
      icon: <FaCreativeCommonsNcEu />,
      background: "rgb(236, 183, 173)",
      color: "tomato",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((stat, index) => {
        return <StatsItem key={index} {...stat} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;
  gap: 2rem;
`;
