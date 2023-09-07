import { createBrowserRouter } from "react-router-dom";
import SuccessCard from "../components/SuccessCard";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/success",
    element: <SuccessCard />,
  },
]);
export default router;
