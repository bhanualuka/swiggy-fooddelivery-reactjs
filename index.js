{
  /* <div id="parent">
  <div id="child">
    <h1>helloo world from react</h1>
    <h2>h2 tag  </h2>
  </div>
</div>; */
}

{
  /* <div id="parent">
  <div id="child1">
    <h1>h1 tag</h1>
    <h2>h2 tag</h2>
  </div>

  <div id="child2">
    <h1>h1 tag</h1>
    <h2>h2 tag</h2>
  </div>
</div>;
 */
}

// CREATING REACT ELEMENT(h1)
// REACT ELEMENT IS A JS OBJECT THAT CONTAINS KEY VALUE PAIRS (WHICH DOESN'T UNDERSTAND DIRECTLY BY BROWSER)

/* const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello world! from React "),
    React.createElement("h2", {}, "h2 tag "),
  ]),
  React.createElement("div", { id: "ChildTwo" }, [
    React.createElement("h1", {}, "hello world! from React "),
    React.createElement("h2", {}, "h2 tag "),
  ]),
]);
 */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "iam an h1 tag"),
    React.createElement("h2", {}, "iam an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "iam an h1 tag"),
    React.createElement("h2", {}, "iam an h2 tag"),
  ]),
]);
console.log(heading); // JS OBJECT

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading); // RENDER METHOD CONVERTS THE  REACT ELEMENT(JS OBJECT ) INTO HTML ELEMENT AND PUT IT INTO THE DOM
