import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Employees from "./components/forms/Employee/Employees";
import { Stack } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./components/forms/Employee/Create";
import EditEmployee from "./components/forms/Employee/Edit";

function App() {
  return (
    <Router>
      <Stack direction={"column"}>
        <Topbar />
        <Stack direction={"row"} spacing={2}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/create-employee" element={<CreateEmployee />} />
            <Route path="/edit-employee" element={<EditEmployee />} />
          </Routes>
        </Stack>
      </Stack>
    </Router>
  );
}

export default App;
