import AdminRoot from "../components/admin/admin-root";
import MainRoot from "../components/site/main-root";
import HomePage from "../pages/site/home-page";
import AboutPage from "../pages/site/about-page";
import ProductsPage from "../pages/site/products-page";
import LoginPage from "../pages/site/login-page";
import SignupPage from "../pages/site/signup-page";
import ProductsListPage from "../pages/admin/products-lists-page";
import UsersListPage from "../pages/admin/users-lists-page";
import NotFound from "../pages/site/not-found";
import Dashboard from "../pages/admin/dashboard";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        // element: <ProductDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard/>,
      },
      {
        path: "users",
        element: <UsersListPage />,
      },
      {
        path: "products",
        element: <ProductsListPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
];

export default ROUTES;
