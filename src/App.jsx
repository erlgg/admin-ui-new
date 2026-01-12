import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error"
import dashboard from "./pages/dashboard";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
