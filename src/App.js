// src/App.js
import React from "react";
import Layout from "./components/layout";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <Layout>
      <ListarTarefa />
    </Layout>
  );
}

export default App;
