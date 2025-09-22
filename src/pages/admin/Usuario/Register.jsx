import React, { useState } from 'react';
import UsuarioService from '../../../services/Usuario';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'usuario'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await UsuarioService.create(formData);
      alert('Usuario creado correctamente');
      navigate('/usuarios/ver'); // ir a la lista
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Registrar Usuario</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre completo"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          type="password"
          className="w-full p-2 mb-2 border rounded"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        >
          <option value="usuario">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Guardando...' : 'Registrar'}
        </button>
      </form>
    </div>
  );
};

export default Register;
