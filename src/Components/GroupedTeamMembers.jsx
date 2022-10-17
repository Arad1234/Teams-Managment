import React, { useState } from "react";
import { useData } from "../context/DataProvider";

const GroupedTeamMembers = () => {
  const { employees, selectedTeam, setSelectedTeam } = useData();

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

  const handleTeamClick = (event) => {
    const newGroupedData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );

    setGroupedData(newGroupedData);
    setSelectedTeam(event.currentTarget.id);
  };

  return (
    <main className="container">
      {groupedEmployees.map((teamObj) => (
        <>
          <div key={teamObj.team} className="card mt-2">
            <h4
              id={teamObj.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
              style={{ cursor: "pointer" }}
            >
              Team Name: {teamObj.team}
            </h4>
            <div
              id={"collapse_" + teamObj.team}
              className={teamObj.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {teamObj.employees.map((employee) => {
                return (
                  <div key={employee.id} className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {employee.fullName}
                      </span>
                    </h5>
                    <p>Designation: {employee.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ))}
    </main>
  );
};

export default GroupedTeamMembers;
