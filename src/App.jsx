import React from "react";
import Router from "./router";
import { NavBar } from "./components";

function App() {
  return (
    <div className="p-4 flex flex-col gap-4 ">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
