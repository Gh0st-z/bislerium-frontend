import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./bloggers/components/login.js";
import Register from "./bloggers/components/register.js";
import Home from "./bloggers/components/home.js";
import ForgotPassword from "./bloggers/components/forgot-password.js";
import "./App.css";
import BloggersPage from "./admin/components/totaluser.js";
import DashboardHome from "./dashboard/home.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ListBlog from "./dashboard/list-blog.jsx";
import CreateBlog from "./dashboard/createblog.jsx";
import Manageusers from "./admin/components/userutils.js";

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/" element={<Login />} />
          <Route path="register/" element={<Register />} />
          <Route path="forgot-password/" element={<ForgotPassword />} />
          <Route path="totaluser/" element={<BloggersPage />} />
          <Route path="dashboard/" element={<DashboardHome />} />
          <Route path="dashboard/list" element={<ListBlog />} />
          <Route path="dashboard/create" element={<CreateBlog />} />
          <Route path="manage-users/" element={<Manageusers/>} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
