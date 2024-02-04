import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Set user data after login
    
    setUser(userData);
  };

 
  async function logoutUser() {
    // Your logout logic here
    // Clear the user state and local storage
    localStorage.removeItem('token');
    setUser(null); // Set user to null after logout
   
  }
  return (
    <AuthContext.Provider value={{ user, login, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
