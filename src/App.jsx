import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error"
import dashboard from "./pages/dashboard";
import balance from "./pages/balances";
import { Balance } from "@mui/icons-material";
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
    {
      path: "/balance",
      element:<Balance/>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
