import React from "react";
import ReactDOM from "react-dom/client";
import "./NestedStyle.css";

/* Coding Assignment:
● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
○ Create the same element using JSX
○ Create a functional component of the same with JSX
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX  */

// 1. Using React.createElement
/* const NestedHeader = React.createElement("div", { tabIndex: "title" }, [
  React.createElement("h1", {}, "h1 Tag from react.createElement"),
  React.createElement("h2", {}, "h2 Tag from react.createElement"),
  React.createElement("h3", {}, "h3 Tag from react.createElement"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(NestedHeader); 

React.createElement => ReactElement-JS Object => Html element(broswer understandable)
*/

// 2. Using JSX

// Jsx => React.createElement => ReactElement- JS Object => HTml Element

/* const jsxNestedHeader = (
  <div className="title">
    <h1>h1 Tag From Jsx jsx</h1>
    <h2>h2 Tag From Jsx jsx</h2>
    <h3>h3 Tag From Jsx jsx</h3>
  </div>
);

console.log(jsxNestedHeader);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxNestedHeader);

*/

// 3.Functional Component using Jsx

// --> One way
/* const FunctionalComponent = () => (
  <div className="title">
    <h1>h1 tag from functional Component</h1>
    <h2>h2 tag from functional Component</h2>
    <h3>h3 tag from functional Component</h3>
  </div>
);
 */

// --> Second way
/* const FunctionalComponent = () => {
  return (
    <div className="title">
      <h1 className="h1tag">h1 tag from functional Component</h1>
      <h2 className="h2tag">h2 tag from functional Component</h2>
      <h3 className="h3tag">h3 tag from functional Component</h3>
    </div>
  );
}; */

// 4. Composition  Component

/* 
const FirstComponent = () => (
  <div className="FirstComp">
    <h1>FirstComponent</h1>;
  </div>
);

const CompositionComponent = () => (
  <div className="Composition">
    <h1>From Compostion Component</h1>
    {FirstComponent()}
    <FirstComponent />
  </div>
); */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CompositionComponent />);
