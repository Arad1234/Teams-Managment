import "./App.css";
import GroupedTeamMembers from "./Components/GroupedTeamMembers";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Employees from "./Components/Employees";
import Nav from "./Components/Nav";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataProvider from "./context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />}></Route>
          <Route
            path="/GroupedTeamMembers"
            element={<GroupedTeamMembers />}
          ></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </Router>
    </DataProvider>
  );
};

export default App;
