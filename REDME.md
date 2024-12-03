jai sai master
jai bapuji maharaj

# React 🚀

// CREATING REACT ELEMENT(h1)
// REACT ELEMENT IS A JS OBJECT THAT CONTAINS KEY VALUE PAIRS (WHICH DOESN'T UNDERSTAND DIRECTLY for BROWSER)

---Simple React Element----
const heading = React.createElement("h1", {id:"heading"}, "From ReactDomApI")

console.log(heading); // JS OBJECT

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading); // RENDER METHOD CONVERTS THE REACT ELEMENT(JS OBJECT ) INTO HTML ELEMENT AND PUT IT INTO THE DOM
NOTE: React will overwrite everything inside "root" and replaces with whatever given inside render.

---------------------------------------------END----------------------------------------------------

// 07-11-2024
✨ JSX ✨

// INTRODUCING JSX 👋

**Points to Remembar**
// jsx is a javascript extension syntax that makes easier to create "React Element" or "React Code".
// jsx is not a part of react , and react is also not a part of jsx
// jsx is not html, jsx is not javascript,
// jsx is a html or xml like syntax

==> Advance points
// jsx is very protective that it sanitizes the all the code in it before the execution
// jsx prevents the CROSS SITE SCRIPTING(Hackers steal the data through api) malicious attacks

// Behind the secens of jsx 👀
// --> Jsx is transpailed to browser understandable before it reaches to the js engine
// --> This is doing by Parcel🔥 the beast of react 🐦‍🔥
// --> Parcel itself doesnt doing but it gives reponsibilites to Babel✨
// --> Babel is a package is a javascript comapiler or transpiler that converts the jsx into the browser understandable code.

// React.createElement => reactElement-Js Object => Html element(browser understandable)

const heading = React.createElement(
"h1",
{ id: "heading" },
"Namaste react from react element "
);

// jsxHeading => React.creatElement => ReactElement - Js Object => Html element

// JSX => REACT.CREATELEMENT => REACT_ELEMTN -JS OBJECT => HTML ELEMENT --> PARCEL - BABEL
const jsxHeading = <h1>Namaste React from jsx 🚀 </h1>;
console.log(jsxHeading);

root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(jsxHeading);

// LAST BUT NOT LEAST 🔛
It is mandatory to wrap the multpile lines of jsx code into the paranthesis() .This is because the Babel indentifies the jsx form starting and ending by using this paranthesis()

✨ COMPONENT ✨
INTRODUCING COMPONENT 👋
**Points to Remembar**
// A component is a resusable , self conatined piece of code that represnts the part of the user interface.
*Resuable
*SelfContained
// We will Render a Component with in the self colsing tag (Means it calling the function and For understanding it is a component for babel )

- // There are two types of components

1. Class Based Components
2. Functional Based Components

==> Functional Based Component
// Functional Based component is a javaScript function that returns Jsx or react Elements
// A component must and should mandatory to start with Capital letter, because babel should understand component
// Functional Based compoenents can be written in two ways as shown in below in case of using Arrow Functions👇

const FirstComponent = () => <h1>Namaste React 🚀 </h1>;
const SecondComponent = () => <h1 className="Second">From Second Component</h1>;

--> Abovee is the one way to write functional Components In case of Using Arrow Fuctions Only 👆

// Component Composition ♻️
// Component Composition means Composing the components in a single component or putting a component in another component

const ComponentComposition = () => (

  <div>
    <h1>From the Component Composition</h1>
    <FirstComponent />  // Composing the  another component
    <SecondComponent />
  </div>
);

--> Above component is the second way to write the functional Component in case of using Arrow functions only👆
--> The above two ways of creating functional components cannot be possible using named functions, Ananonymous function as shown in below

// In Case of name and anonymous functions we must use function syntax (curly braces for open and close and return keyword to wrap the jsx and to return it)

const NamedFunction = function () {
return (
<>

<h1>Jai Sai Master</h1>
<h2>Jai Bapuji maharaj</h2>
</>
);
};

root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(<ComponentComposition />);

==> INTRESTING POINTS OF COMPONENT AND JSX

// We can insert javaScript into the component using curly braces ({jsCode}) and render it to browser
// we can insert reactEement into component
// we can insert component into (jsx)
--> We can use component in three different ways in jsx one is with in curlbraces we can call the component as js function{component()}
--> We can use coponent as like this to </Componenet>
--> we can use componnet as like this alse <Component> </Component>

ASSIGNMENT QUESTIONS:
● What is JSX?
● Superpowers of JSX
● Role of type attribute in script tag? What options can I use there?
● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX

CODING ASSIGNMENT:

● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
○ Create the same element using JSX
○ Create a functional component of the same with JSX
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX

● Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice

---------------------------------------------END----------------------------------------------------
