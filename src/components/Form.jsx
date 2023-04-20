import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add } from "../redux/features/task/taskSlice";
import { v4 as uuid4 } from "uuid";
import "./Form.css";

function Form() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Form initial State
  const [formData, setFormData] = useState({
    task: "",
    time: "",
  });

  //handle Input Change
  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //handle Form Add
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...formData, id: uuid4() };
    setFormData({ task: "", time: "" });
    dispatch(add(newTask));
  };

  return (
    <>
      <section className="container">
        <form onSubmit={handleFormSubmit}>
          <textarea
            type="text"
            name="task"
            id="task"
            placeholder="Task"
            value={formData.task}
            onChange={handleFormInputChange}
            required
          ></textarea>
          <input
            type="text"
            name="time"
            id="time"
            placeholder="Time"
            value={formData.time}
            onChange={handleFormInputChange}
            required
          />
          <button>Add</button>
        </form>
      </section>
    </>
  );
}

export default Form;
