import React from "react";
import ReactDOM from "react-dom/client";

// INTRODUCING JSX 👋
// jsx is a javascript extension syntax that makes easier to create "React Element"
// jsx is not  a part of react , and react is also not a part of jsx
// jsx is not html, jsx is not javascript,
// jsx is a html or xml like syntax

// Behind the secens of jsx 👀
// --> Jsx is transpailed to browser understandable  before it reaches to the js engine
// --> This is doing by Parcel🔥 the beast of react 🐦‍🔥
// --> Parcel itself doesnt doing but it gives reponsibilites to  Babel✨
// --> Babel is a package  is a javascript comapiler or transpiler that converts the jsx into the browser understandable code.

// React.createElement => reactElement-Js Object => Html element(browser understandable)

/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste react from react element "
);
 */

// jsxHeading => React.creatElement => ReactElement - Js Object => Html element

// JSX => REACT.CREATELEMENT => REACT_ELEMTN -JS OBJECT => HTML ELEMENT --> PARCEL - BABEL

/* const jsxHeading = (
  <h1 id="heading" className="hello" tabIndex="5">
    Namaste React from jsx 🚀{" "}
  </h1>
);
console.log(jsxHeading); */

// Component
// Functional Component

const FirstComponent = () => <h1>Namaste React 🚀 </h1>;
const SecondComponent = () => <h1 className="Second">From Second Component</h1>;

// Component Composition
// Component Composition means Composition the components in a single component or putting a component in another component
const ComponentComposition = () => (
  <div>
    <h1>From the Component Composition</h1>
    <FirstComponent />
    <SecondComponent />
  </div>
);

// In Case of name and anonymous functions  we must use function syntax (curly braces for open and close and return keyword to wrap the jsx and to return it)

const NamedFunction = function () {
  return (
    <>
      <h1>Jai Sai Master</h1>
      <h2>Jai Bapuji maharaj</h2>
      {/* {ReactElement} */}
      <h4>{javascript}</h4>
    </>
  );
};

const javascript = "JavaScript";

const ReactElement = (
  <div>
    <h1> React Element</h1>
    {/* {NamedFunction()}
    <NamedFunction /> */}
    <NamedFunction></NamedFunction>
  </div>
);

root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

// root.render(<ComponentComposition />);

root.render(ReactElement);
