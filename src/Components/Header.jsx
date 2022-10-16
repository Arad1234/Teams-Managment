import React from "react";

const Header = ({ countOfMembers, selectedTeam }) => {
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
