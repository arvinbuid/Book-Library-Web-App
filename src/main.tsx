import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import BookDetails from "./components/BookDetails.tsx";
import BooksList from "./components/BooksList.tsx";
import About from "./components/AboutUs.tsx";

// query
const queryClient = new QueryClient();

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "book",
        element: <BooksList />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
