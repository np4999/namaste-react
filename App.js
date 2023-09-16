/**
<div id="parent">
  <div id="child">
    <h1>This is Sub Child - h1 tag</h1>
  </div>
</div>;

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This the Sub Child - h1 tag"),
    React.createElement("h2", {}, "This is the Sub Child - h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "This is the Sub Child Sibiling h3"),
    React.createElement("h4", {}, "This is the Sub Child sibiling h4"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("top"));
root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is a Header from React"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
