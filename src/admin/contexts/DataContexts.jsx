import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {

  const [docentes, setDocentes] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [organizaciones, setOrganizaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para cargar datos desde el backend
  const fetchData = async () => {
    try {
      setLoading(true);
      const [resDocentes, resPersonas, resOrg] = await Promise.all([
        axios.get("http://localhost:3000/api/docente"),
        axios.get("http://localhost:3000/api/persona"),
        axios.get("http://localhost:3000/api/organizacion"),
      ]);

      setDocentes(resDocentes.data);
      setPersonas(resPersonas.data);
      setOrganizaciones(resOrg.data);
    } catch (error) {
      console.error("Error cargando datos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar un docente
  const addDocente = async (docente) => {
    try {
      const res = await axios.post("http://localhost:3000/api/docente", docente);
      setDocentes((prev) => [...prev, res.data]); // Actualiza estado global
    } catch (error) {
      console.error("Error agregando docente:", error);
      throw error;
    }
  };

  // Función para actualizar un docente
  const updateDocente = async (id, updatedData) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/docente/${id}`, updatedData);
      setDocentes((prev) =>
        prev.map((d) => (d.id === id ? res.data : d))
      );
    } catch (error) {
      console.error("Error actualizando docente:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        docentes,
        personas,
        organizaciones,
        loading,
        fetchData,
        addDocente,
        updateDocente,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
