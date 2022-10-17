import React from "react";
import { useData } from "../context/DataProvider";

const Header = () => {
  const { employees, selectedTeam } = useData();

  const countOfMembers = employees.filter(
    (employee) => employee.teamName === selectedTeam
  ).length;
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <h3>
            {selectedTeam} has {countOfMembers}
            {countOfMembers === 1 ? " Member" : " Members"}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
