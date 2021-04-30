import React, { useState, useEffect } from "react";
import queryString from "query-string";
import {useHistory} from "react-router-dom";
import {SocketContext} from "../../Context/SocketContext"
import io from "socket.io-client";
import "./chatRoom.css";
import Navbar from "../navbarComponent/navbar.js";
import Input from "../Input/Input.js";
import Participant from "../participantComponent/participant";
import Messages from "../Messages/Messages.js";
let socket;
const ChatRoom = ({ location }) => {
 const {alerts,setAlerts} = React.useContext(SocketContext)
  const history = useHistory()
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    const data = queryString.parse(location.search);
    console.log(location.search)
    console.log(data)

    socket = io(ENDPOINT);

    setName(data.name);
    setRoom(data.room);

    console.log(socket);

    socket.emit("join", { name: data.name, room: data.room },(error)=> error && history.push("/"));
    return () => {
       socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    return () => {
      socket.off();
    };
  }, [messages,users]);

  //function for sending messages
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message, messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <Navbar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <Participant users={users} />
    </div>
  );
};

export default ChatRoom;
