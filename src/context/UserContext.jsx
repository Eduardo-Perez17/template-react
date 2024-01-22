import React, { useState } from "react";

const ContextUser = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.localStorage.getItem("jwt"));
  const [user, setUser] = useState(
    () => JSON.parse(window.localStorage.getItem("user")) || ""
  );

  return (
    <ContextUser.Provider value={{ jwt, setJWT, user, setUser }}>
      {children}
    </ContextUser.Provider>
  );
}

export default ContextUser;
