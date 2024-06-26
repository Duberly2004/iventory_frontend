import { useRoutes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import LoginForm from "../components/forms/LoginForm";
import Home from "../pages/Home";
import About from "../pages/About";
import ProtectedRoute from "../middlewares/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../modules/dashboard/Dashboard";
import Setting from "../modules/setting/Setting";
import Inventory from "../modules/product/Inventory";
import Sale from "../modules/sales/Sale";
import SaleForm from "../modules/sales/SaleForm";
import Products from "../pages/Products";
function AppRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <PublicLayout><Home /></PublicLayout>
    },
    {
      path: "login",
      element: <PublicLayout><LoginForm /></PublicLayout>
    },
    {
      path: "products",
      element: <PublicLayout><Products /></PublicLayout>
    },
    {
      path: "about",
      element: <PublicLayout><About /></PublicLayout>
    },
    {
      path: "admin",
      element:<ProtectedRoute> <AdminLayout/></ProtectedRoute>,
      children: [
        {
          path: "",
          element: <Dashboard/>
        },
        {
          path: "inventory",
          element:<Inventory/>
        },
        {
          path: "sales",
          element:<Sale/>
        },
        {
          path: "sales/new",
          element:<SaleForm/>
        },
        {
          path: "settings",
          element:<Setting/>
        },
      ]
    },
  ])
  return element
}

export default AppRoutes