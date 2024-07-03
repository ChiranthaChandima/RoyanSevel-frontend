import Homepage from "./Routes/homepage/homepage"
import ListPage from "./Routes/list/listPage";
import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";
import Layout from "./Routes/layout/layout";
import Login from "./Routes/login/login";
import SinglePage from "./Routes/singlePage/singlePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },

      ]
    }

  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App