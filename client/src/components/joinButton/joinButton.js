import React,{useState} from "react"
import {Link} from "react-router-dom";
import {SocketContext} from "../../Context/SocketContext"
import "./joinButton.css"
const JoinButton = ()=>{
    const [name,setName]=useState("");
    const [room,setRoom] =useState("");
    // const [alert,setAlert]=useState(false);
    const {alerts} = React.useContext(SocketContext)
    console.log(alerts)
    React.useEffect(() => {
      console.log(alerts)
      return alerts && <div>Alerts</div>
    }, [alerts])
    return(
       <div className="joinOuterContainer">
         <div className="joinInnerContainer">
          <h1 className="heading">Hi there!😀</h1>
          <h2 className="heading2">I am really excited to Welcome you onboard with Live Chat !</h2>
          <h2 className="heading2">
          Try it out now !{" "}
          <span role="img" aria-label="emoji" style={{height:"20px"}} >
          👇 
          </span>
        </h2>
           <div><input placeholder="Name" className="joinInput" type="text" onChange={(e)=>setName(e.target.value)} required/></div>
           <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(e)=>setRoom(e.target.value)} required/></div>
           <Link onClick={e=>(!name || !room)? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
           <button className="button mt-20" type="submit">Join The Room</button>
           </Link>
           {alerts && alert("UserName exists ,please try for another UserName")}
         </div>
       </div>
    )
}

export default JoinButton;