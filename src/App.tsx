import React from "react";

import {ProjectIndex} from './screens/project-list/index';

import { LoginScreen } from './screens/login/index'

import "./App.css";

function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/* <ProjectIndex /> */}
    </div>
  );
}

export default App;
