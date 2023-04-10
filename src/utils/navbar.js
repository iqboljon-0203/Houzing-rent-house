import useId from "../hooks/useId.js";
import Home from "../components/Home";
import Properties from "../components/Properties";
export const navbar = [
  {
    id: useId,
    element: <Home />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Generic signin</h1>,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Generic signup</h1>,
    title: "Sign up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
