import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import OrderOnline from "./pages/OrderOnline";

let router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { path: "/", Component: Home },
      { path: "aboutUs", Component: AboutUs },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "orderOnline", Component: OrderOnline },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
