import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import JobDetails from "./Pages/JobDetails/JobDetails";
import PrivateRoute from "./Routes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "Job/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
    // Component: Root,
    // loader: loadRootData,
  },
]);