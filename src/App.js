import React, { useState } from "react";
import NavBar from "./components/NavBar";
import PageHeader from "./components/PageHeader";
import Table from "./components/Table";
import "./styles/index.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState("");
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  return (
    <div className="App layout">
      <PageHeader />
      <NavBar allData={allData} setFilteredData={setFilteredData} />
      <Table
        searchTerm={searchTerm}
        setAllData={setAllData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
}

export default App;
