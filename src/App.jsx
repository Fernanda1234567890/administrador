// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './views/Login';
// import Users from './views/Users';
// import Units from './views/Units';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               {/* Componente protegido, por ejemplo, Users o un Dashboard */}
//               <Users />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/users" element={<Users />} />
//         <Route path="/units" element={<Units />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Login from './views/Login.jsx';
  import Dashboard from './views/Dashboard.jsx';

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;