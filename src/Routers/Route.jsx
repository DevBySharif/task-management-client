import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Mainlayout from "../Layout/Mainlayout";
import TaskManagement from "../Pages/Dashboard/TaskManagement";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manage",
        element: <TaskManagement></TaskManagement>,
      },
    ],
  },
]);

export default Route;
