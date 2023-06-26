//JSX is a javascript extension. It's the language of react
const h1 = <h1>Hello world</h1>;

//JSX is essentially javascript objects with HTML as the value
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

//this is doing something with the root object. i have no idea what
//and somehow it renders hello world like html but doesn't replace html
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("container");

const root = createRoot(container);
root.render(<h1>Hello world</h1>);
