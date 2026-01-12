import "./App.css";
import SignIn from "./pages/SignInignIn";
import SignUp from "./pages/signUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error"
function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="text-blue-600">
            Masuk
          </Link>
          |
        <Link to="/register" className="text-primary text-sm font-bold">
            Create an account
        </Link>
        </div>
      ),
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
