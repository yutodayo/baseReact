import React from "react";
import ReactDom from "react-dom"; //htmlにコンポーネントを反映させるために必要
import App from "./App.jsx"; //Appをコンポーネント化

ReactDom.render(<App />, document.getElementById("root")); //reactをhtmのどこに反映するかを記述
