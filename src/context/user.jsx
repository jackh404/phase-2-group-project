import React from 'react';

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };