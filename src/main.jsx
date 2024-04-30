import * as ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/Root/Root";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import AddCraft from "./components/AddCraft/AddCraft";
import AllArtAndCraft from "./components/AllArtAndCraft/AllArtAndCraft";
import UserArtCraftList from "./components/UserArtCraftList/UserArtCraftList";
import { HelmetProvider } from "react-helmet-async";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UpdateCraft from "./components/UpdateCraft/UpdateCraft";
import CraftDetails from "./components/CraftDetails/CraftDetails";
import Subcategory from "./components/Subcategory/Subcategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          Promise.all([
            fetch("http://localhost:5000/crafts"),
            fetch("http://localhost:5000/subcategory"),
          ]),
      },
      {
        path: "/add-craft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-art-craft",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/user-craft-list",
        element: (
          <PrivateRoute>
            <UserArtCraftList></UserArtCraftList>
          </PrivateRoute>
        ),
      },

      {
        path: "/update-craft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft></UpdateCraft>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },

      {
        path: "/craft-details/:id",
        element: (
          <PrivateRoute>
            <CraftDetails></CraftDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },

      {
        path: "/subcategory/:subcategory-Name",
        element: (
          <PrivateRoute>
            <Subcategory></Subcategory>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/subcategory/${params['subcategory-Name']}`),
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    <ToastContainer></ToastContainer>
  </AuthProvider>
);
