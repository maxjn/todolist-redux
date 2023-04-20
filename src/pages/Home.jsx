import React from "react";
import Form from "../components/Form";
import TaskView from "../redux/features/task/taskView";

function Home() {
  return (
    <>
      <Form />
      <TaskView />
    </>
  );
}

export default Home;
