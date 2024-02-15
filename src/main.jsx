import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Here we import our pages
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

// Here we import our components
import NavBar from "./components/NavBar.jsx";

// Here we create our router and tell it what pages to render at what path

const router = createBrowserRouter([
  {
    path: "/",
  //   element: <HomePage />,
  // },
  // {
  //   path: "/about",
  //   element: <AboutPage />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactPage />,

    // Putting our NavBar as the main component will cause the children to render in the <Outlet />
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage />},
      { path: "/about", element: <AboutPage />},
      { path: "/contact", element: <ContactPage />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* here we wrap our app in the router provider so the pages render */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
