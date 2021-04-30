import React from "react";

import {BrowserRouter as Router, Route} from "react-router-dom"
import JoinButton from "./components/joinButton/joinButton"
import ChatRoom from "./components/chatComponent/chatRoom"
const App = ()=>{
    return(
        <Router>
            <Route path="/" exact component={JoinButton}/>
            <Route path="/chat" component = {ChatRoom}/>

        </Router>
    )
}

export default App;