import React, { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {
  const groupTeamMembers = () => {
    var teams = [];

    var teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    var teamA = {
      team: "TeamA",
      employees: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };

    teams.push(teamA);

    var teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    var teamB = {
      team: "TeamB",
      employees: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };

    teams.push(teamB);

    var teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    var teamC = {
      team: "TeamC",
      employees: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };

    teams.push(teamC);

    var teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    var teamD = {
      team: "TeamD",
      employees: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };

    teams.push(teamD);

    return teams;
  };
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  return (
    <main className="container">
      {groupedEmployees.map((teamObj) => (
        <>
          <h1>{teamObj.team}</h1>
          {teamObj.employees.map((employee) => {
            return <h3>{employee.fullName}</h3>;
          })}
        </>
      ))}
    </main>
  );
};

export default GroupedTeamMembers;
