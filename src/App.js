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
import ResetPassword from "./bloggers/components/reset-password.js";
import AddBlog from "./bloggers/components/add-blog.js";
import UserBlog from "./bloggers/components/user-blogs.js";
import "./App.css";
import BloggersPage from "./admin/components/totaluser.js";
import DashboardHome from "./dashboard/home.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ListBlog from "./dashboard/list-blog.jsx";
import CreateBlog from "./dashboard/createblog.jsx";
import Manageusers from "./admin/components/userutils.js";
import AdminProfile from "./admin/components/adminprofile.js";
import UserProfile from "./bloggers/components/user-profile.js";

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/" element={<Login />} />
          <Route path="register/" element={<Register />} />
          <Route path="forgot-password/" element={<ForgotPassword />} />
          <Route path="reset-password/" element={<ResetPassword/>} />
          <Route path="add-blogs/" element={<AddBlog/>} />
          <Route path="blogs/" element={<UserBlog/>} />
          <Route path="totaluser/" element={<BloggersPage />} />
          <Route path="dashboard/" element={<DashboardHome />} />
          <Route path="dashboard/list" element={<ListBlog />} />
          <Route path="dashboard/create" element={<CreateBlog />} />
          <Route path="manage-users/" element={<Manageusers/>} />
          <Route path="admin-profile/" element={<AdminProfile/>} />
          <Route path="user-profile/" element={<UserProfile/>} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
