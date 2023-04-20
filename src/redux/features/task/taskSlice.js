import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getLocalStorage, setLocalStorage } from "../../../utils/localstorage";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    add: (state, { payload }) => {
      state.tasks.push(payload);
      setLocalStorage("task_list", state.tasks);
      // message
      toast.success(`Task was added to list`);
    },
    remove: (state, { payload }) => {
      const index = state.tasks.findIndex((task) => {
        return task.id === payload;
      });
      state.tasks.splice(index, 1);
      setLocalStorage("task_list", state.tasks);
      toast.error(`Task was removed from list`);
    },
    get: (state) => {
      state.tasks = getLocalStorage("task_list");
    },
    update: (state, { payload }) => {
      const index = state.tasks.findIndex((task) => task.id === payload.id);

      state.tasks[index] = payload;
      setLocalStorage("task_list", state.tasks);
      toast.success(`Task was updated`);
    },
  },
});

export const { add, get, remove, update } = taskSlice.actions;
export default taskSlice.reducer;
