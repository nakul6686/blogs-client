import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
  const userData=  localStorage.getItem("userData");
  setUser(JSON.parse(userData))
  }, []);
  const handleUser = (userdata) => {
    setUser(userdata);
  };

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};
