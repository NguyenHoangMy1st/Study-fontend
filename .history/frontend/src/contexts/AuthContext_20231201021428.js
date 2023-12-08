// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") !== null
  );

  const login = () => {
    // Thực hiện logic đăng nhập, sau đó cập nhật setIsAuthenticated(true)
    localStorage.setItem("token", "yourAuthToken"); // Lưu token vào localStorage
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Thực hiện logic đăng xuất, sau đó cập nhật setIsAuthenticated(false)
    localStorage.removeItem("token"); // Xóa token từ localStorage
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
