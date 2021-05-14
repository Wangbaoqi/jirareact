import React from "react";

import {ProjectIndex} from './screens/project-list/index';


import "./App.css";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unAuthenticated-app";
import { AuthenticatedApp } from "authenticated-app";



function App() {

  const { user } = useAuth()

  
  return (
    <div className="App">
      { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </div>
  );
}

export default App;
