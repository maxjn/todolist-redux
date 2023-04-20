import { useSelector, useDispatch } from "react-redux";
import { remove } from "./taskSlice";
import { Link } from "react-router-dom";

function TaskView() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <>
      {tasks.length > 0 && (
        <section className="result">
          {tasks.map(({ id, task, time }) => (
            <div key={id}>
              <p>{task}</p>

              <div className="buttons">
                <p>{time}</p>
                <Link to={`update/${id}`} className="update btn">
                  update
                </Link>
                <button
                  className="remove btn"
                  onClick={(id) => {
                    dispatch(remove(id));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default TaskView;
