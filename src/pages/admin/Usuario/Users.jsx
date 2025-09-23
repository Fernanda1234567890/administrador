import React, { useEffect, useState } from 'react';
import UsuarioService from '../../../services/Usuario';
import { useUser } from '../../../contexts/UserContext'; // 🔹 importar el contexto

const Users = () => {
  const { user } = useUser(); // 🔹 obtener usuario logueado
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || user.role !== 'admin') return; // solo admins pueden cargar la lista
    const fetchUsers = async () => {
      try {
        const data = await UsuarioService.findAll();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [user]);

  const handleDeactivate = async (id) => {
    try {
      await UsuarioService.deactivate(id);
      setUsers(prev => prev.map(u => u.id === id ? { ...u, activo: false } : u));
    } catch (err) {
      console.error("Error al dar de baja:", err);
    }
  };

  if (loading) return <p>Sin acceso...</p>;///Cargando usuarios

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Usuarios registrados</h2>
      <ul className="divide-y divide-gray-300">
        {users.map(u => (
          <li key={u.id} className="py-2 flex justify-between items-center">
            <div>
              <p className="font-medium">{u.name}</p>
              <p className="text-sm text-gray-500">{u.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm">{u.role}</p>
              {u.activo && (
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDeactivate(u.id)}
                >
                  Dar de baja
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
