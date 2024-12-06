import React, {
  createContext,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./src/Components/About";
import Error from "./src/Components/Error";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Contact from "./src/Components/Contact";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import ShimmerUI from "./src/Components/ShimmerUI.js";
// import Grocery from "./src/Components/Grocery";
import { createContext } from "react";
import { UserContext } from "./src/utilits/context/UserContext.js";
import { MailContext } from "./src/utilits/context/MailContext.js";
const Grocery = lazy(() => import("./src/Components/Grocery"));
const About = lazy(() => import("./src/Components/About"));

// const GlobalData = createContext();

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const obj = {
      userName: "Bhanu prakash",
    };
    setUserName(obj.userName);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <MailContext.Provider>
          <Header />
        </MailContext.Provider>
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <About />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

root.render(<RouterProvider router={appRouter} />);

/* import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App"; */

/**
 * Header
 *  - Logo
 *  - NavItems
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 *     -Img , name of the restaturant, ..etc
 * Footer
 *  - copyright
 *  - Links
 *  - Address
 *  - Contact
 */

/* const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(<App />);
 */
