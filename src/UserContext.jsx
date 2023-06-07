import React, { useState } from "react"
import { useContext } from "react"

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ username: "", score: 0 });


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
