import React, {createContext} from 'react'

export const SocketContext = createContext()

 const SocketContextProvider = ({children})=>{
  const [alerts,setAlerts] = React.useState(false)
  let value={alerts,setAlerts}
  return <SocketContext.Provider value={value}>
    {children}
  </SocketContext.Provider>
 }

 export default SocketContextProvider