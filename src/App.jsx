import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
//Style
import "./App.css";
// Pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Update from "./pages/Update";
//Redux
import { get } from "./redux/features/task/taskSlice";
import { useDispatch } from "react-redux";
import UpdateNotFound from "./pages/UpdateNotFound";

function App() {
  // Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route
          path="/update/:id"
          element={<Update />}
          errorElement={<UpdateNotFound />}
        />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  //getting data
  const dispatch = useDispatch();
  dispatch(get());

  return (
    <>
      <main className="App">
        <RouterProvider router={router} />
      </main>
      {/* Toast Messages */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
