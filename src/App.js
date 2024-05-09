import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./bloggers/components/login.js";
import Register from "./bloggers/components/register.js";
import Home from "./bloggers/components/home.js";
import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import DashboardHome from "./dashboard/home";
import DashboardLayout from "./dashboard/component/layout.jsx";
import ListBlog from "./dashboard/list-blog";
import createblog from "./dashboard/createblog.jsx";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Home,
  },
  {
    id: "login",
    path: "/login",
    Component: Login,
  },
  {
    id: "register",
    path: "/register",
    Component: Register,
  },
  {
    id: "dashboard",
    path: "/dashboard/",
    Component: DashboardLayout,
    children: [
      {
        path: "",
        Component: DashboardHome,
      },
      {
        path: "list",
        Component: ListBlog,
      },
      {
        path: "create",
        Component: createblog,
      },
    ],
  },
]);

function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </MantineProvider>
  );
}

export default App;
