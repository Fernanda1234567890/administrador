import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../contexts/UserContext";
import UsuarioService from "../../services/Usuario";
import { login } from "../../services/auth"; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    setEmail('');
    setPassword('');
    setError('');
    setUser(null);
    localStorage.removeItem("token");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    try {
      const data = await UsuarioService.login(email, password);

      setUser(data.user);

      if (rememberMe) {
        localStorage.setItem("token", data.access_token); 
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("user", JSON.stringify(data.user));
      }

      setEmail('');
      setPassword('');
      setError('');

      navigate("/"); 
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Error al iniciar sesión");
    }
};

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#082F47]/80 to-red-700/80"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 0, 58, 0.6), rgba(0,0,0,0.6)), url('/src/assets/FRONTIS.png')`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-xs bg-white/15 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-lg text-white">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/15 rounded-full ">
            <img
              src="/logo-uatf.png"
              alt="User Image"
              className="w-20 h-25 sm:w-35 sm:h-30 object-cover rounded-full"
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-100/20 text-red-200 p-3 rounded mb-4 text-center text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email ID</label>
            <div className="flex items-center border-b border-white/30 py-2">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="Email"
                className="bg-transparent outline-none flex-1 text-sm placeholder-white/60"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <div className="flex items-center border-b border-white/30 py-2">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Password"
                className="bg-transparent outline-none flex-1 text-sm placeholder-white/60"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
           <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="form-checkbox text-indigo-500"
            />
            Remember me
          </label>
            <a href="/forgot-password" className="text-white/70 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
               className="w-full py-2 mt-2 bg-red-700 hover:bg-[#AB2A2A] text-white rounded-lg font-bold text-sm tracking-widest"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;