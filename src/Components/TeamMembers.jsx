import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { useData } from "../context/DataProvider";

const TeamMembers = () => {
  const { employees } = useData();

  return employees.map((employee) => (
    <TeamMemberCard key={employee.id} employee={employee} />
  ));
};

export default TeamMembers;
