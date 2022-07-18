import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/index";
import Auth from "../pages/auth/index";
import Expenses from "../pages/expenses/index";
import Home from "../pages/home/index";
import Incomes from "../pages/incomes/index";
import Welcome from "../pages/welcome/index";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="auth" element={<Auth />} />
        <Route path="home" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="incomes" element={<Incomes />} />
      </Route>
    </Routes>
  );
}
