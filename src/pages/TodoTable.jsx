import React, { useState } from "react";
import Header from "../components/header/Header"
import Layout from "../components/layout/Layout"
import Table from "../components/table/Table"

const TodoTable = () => {

  return (
    <Layout>
      <Header />
      <Table />
    </Layout>
  );
};



export default TodoTable;