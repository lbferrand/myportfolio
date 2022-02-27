import React from "react";
import { ReactDOM } from "react-dom";
import Navigation from "./Navigation";

/*What do I want to render 
Where do I want to render*/

function App() {
  return (
    <div>
      <Navigation />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
