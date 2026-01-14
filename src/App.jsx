import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signUp";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error"
import dashboard from "./pages/dashboard";
import balance from "./pages/balances";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";

function App() {
  const {user} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return user ? children : <Navigate to="/login/" />
  }

  const NotQequireAuth =({children}) => {
    return user ? <Navigate to="/" /> : children;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <DashboardPage />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
    },
  ]);
}
export default App;
