import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log('Login exitoso');
        localStorage.setItem('token', 'fake-token'); // Ejemplo
        navigate('/dashboard');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/1010.jpg')`, // Usamos la ruta del primero (en public/)
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="backdrop-blur-md bg-white/20 p-10 rounded-2xl w-80 shadow-lg text-white">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full">
            <img
              src="/logo-uatf.png" // Usamos la ruta del segundo (en public/)
              alt="User Image"
              className="w-18 h-15 object-cover rounded-full"
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-100/20 text-red-200 p-3 rounded mb-4 text-center text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email ID
            </label>
            <div className="flex items-center border-b border-white/30 py-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75L12 13.5 2.25 6.75" />
              </svg>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-transparent outline-none flex-1 text-sm placeholder-white/60"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="flex items-center border-b border-white/30 py-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V9a4.5 4.5 0 10-9 0v1.5m1.5 0h6M6 10.5h12v8.25a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5V10.5z" />
              </svg>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-transparent outline-none flex-1 text-sm placeholder-white/60"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox text-indigo-500" />
              Remember me
            </label>
            <a href="#" className="text-white/70 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-gradient-to-r from-[#AB2A2A] to-[#082F47] rounded-lg font-bold text-sm tracking-widest"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;