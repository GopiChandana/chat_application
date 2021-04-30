import React from "react";
import ReactDOM from "react-dom";
import SocketContextProvider from "./Context/SocketContext.js"
import App from "./App"

ReactDOM.render(
    <SocketContextProvider>
<App/></SocketContextProvider>, document.querySelector("#root"));
