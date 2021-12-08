import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NhostAuthProvider } from "@nhost/react-auth";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { nhost } from "./utils/nhost";
import { Customers } from "./components/Customers";
import { Router } from "./components/Router";

function App() {
  return (
    <NhostAuthProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <Router />
      </NhostApolloProvider>
    </NhostAuthProvider>
  );
}

export default App;
