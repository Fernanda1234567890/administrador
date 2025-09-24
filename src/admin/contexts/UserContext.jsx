import { createContext, useContext, useState, useEffect, useRef } from "react";
import axios from "axios";

//const UserContext = createContext();
export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Si hay usuario en localStorage, lo cargamos al iniciar
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });


  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const [users, setUsers] = useState([]); // lista de autoridades
  const inactivityTimer = useRef(null);

  // -----------Login con backend----------------
  const login = async (email, password, rememberMe) => {
    try {
      const res = await axios.post("http://localhost:3000/usuario/login", {
        email,
        password,
      });

      const { user: loggedUser, access_token } = res.data;

      setUser(loggedUser);
      setToken(access_token);

      if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", access_token);
    } else {
      sessionStorage.setItem("user", JSON.stringify(loggedUser));
      sessionStorage.setItem("token", access_token);
    }

    startInactivityTimer();

    return { success: true };
  } catch (error) {
    console.error("Error en login:", error);
    return { success: false, message: "Credenciales inválidas" };
  }
};

  // ----------- Logout-----------------
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    stopInactivityTimer();
  };

   // ------------Inactividad----------------
 const startInactivityTimer = () => {
    stopInactivityTimer();
    inactivityTimer.current = setTimeout(() => {
      alert("Sesión expirada por inactividad");
      logout();
    }, 5 * 60 * 1000); 
  }; 

  const stopInactivityTimer = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
  };

  const resetInactivityTimer = () => {
    if (user) startInactivityTimer();
  };

  useEffect(() => {
    if (user) {
      startInactivityTimer();
    } else {
      stopInactivityTimer();
    }
  }, [user]);

  useEffect(() => {
    const events = ["mousemove", "keydown", "click", "scroll"];
    events.forEach((e) => window.addEventListener(e, resetInactivityTimer));
    return () => {
      events.forEach((e) =>
        window.removeEventListener(e, resetInactivityTimer)
      );
    };
  }, [user]);

  return (
    <UserContext.Provider value={{ user, token, login, logout, users, setUsers, setUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};