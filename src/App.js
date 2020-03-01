import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import ErrorBoundary from "./components/errorHandling/ErrorBoundary";

function App() {


  return (
    <div className="App">
        <ErrorBoundary>
            <Layout />
        </ErrorBoundary>
    </div>
  );
}

export default App;
