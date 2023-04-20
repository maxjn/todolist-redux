import React, { useEffect, useState } from "react";
import "./Form.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../redux/features/task/taskSlice";

function UpdateForm() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const task = useSelector((state) =>
    state.task.tasks.find((task) => {
      return task.id === id;
    })
  );
  const [formData, setFormData] = useState({
    task: "",
    time: "",
    id: "",
  });

  console.log(task.task);
  useEffect(() => {
    setFormData({ task: task.task, time: task.time, id: task.id });
  }, []);

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(update(formData));
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
          <button>Update</button>
        </form>
      </section>
    </>
  );
}

export default UpdateForm;
