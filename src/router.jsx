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
            path: 'about',
            Component: About,
        },
        {
            path: 'services',
            Component: Services,
        },
        {
            path: 'contact',
            Component: Contact,
        },{
            path: 'register',
            Component: Register,
        }

    ]
    // Component: Root,
    // loader: loadRootData,
  },
]);