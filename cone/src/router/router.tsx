import ErrorPage from "../pages/404/ErrorPage";
import ConePage from "../pages/cone/ConePage";

export const router = [
  {
    path: "/",
    element: <ConePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
