import React from "react";
import ReactDOM from "react-dom/client";
import "./header.css";

// import logo from "./assests/namasteLogo";

/* const FunctionComponent = () => (
  <div className="Component">
    <h1>This is compoent</h1>
  </div>
);

const jsVariable = <FunctionComponent />;
console.log(jsVariable); */

//   ---Header---
const HeaderComponent = () => {
  return (
    <div className="container">
      <div className="head-logo headrs-header">
        <img
          className="logo"
          src="https://w7.pngwing.com/pngs/225/781/png-transparent-namaste-indisches-restaurant-indian-cuisine-logo-decal-others-food-text-cafe-thumbnail.png"
          alt="logo"
        />
      </div>
      <div className="search headrs-header">
        <div className="searc-bar">
          <label htmlFor="search">
            <input
              type="text"
              name="userSearch"
              id="search"
              placeholder="search.."
            />
          </label>
        </div>
      </div>
      <div className="right headrs-header"> User Icon</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
// root.render(jsVariable);
