import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Estado inicial del usuario (puedes modificarlo con datos reales después del login)
const [user, setUser] = useState(null);


// const [user, setUser] = useState({
//   name: "Victor",
//   email: "victor@uatf.edu.bo",
//   avatar: ""
// });  


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);