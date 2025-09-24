// import { createContext, useState } from 'react';

// // 1. Crear el contexto (sin exportar aún)
// const UserContext = createContext();

// // 2. Crear el Provider (sin exportar aún)
// const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([
//     {
//       name: "Ph. D. Ing. Pedro Guido López Cortés",
//       title: "Rector",
//       email: "email@flowbite.com",
//       phone: "79847563",
//       image: "/docs/images/people/profile-picture-1.jpg",
//     },
//     {
//       name: "M. Sc. Ing. David Soraide Lozano",
//       title: "Vicerrector",
//       email: "email@flowbite.com",
//       phone: "68429785",
//       image: "/docs/images/people/profile-picture-3.jpg",
//     },
//     {
//       name: "M. Sc. Abog. Jaqueline Filipps Díaz",
//       title: "Secretaria General",
//       email: "email@flowbite.com",
//       phone: "75386482",
//       image: "/docs/images/people/profile-picture-2.jpg",
//     },
//     {
//       name: "M. Sc. Abog. Carlos Severo Colque Iporre",
//       title: "Decano - Facultad de Derecho",
//       email: "email@flowbite.com",
//       phone: "69438931",
//       image: "/docs/images/people/profile-picture-5.jpg",
//     },
//     {
//       name: "M. Sc. Lic. Carlos Poveda Choque",
//       title: "Director - Facultad de Derecho",
//       email: "email@flowbite.com",
//       phone: "72409862",
//       image: "/docs/images/people/profile-picture-4.jpg",
//     },
//   ]);

//   const addUser = (newUser) => {
//     setUsers(prevUsers => [...prevUsers, newUser]);
//   };

//   return (
//     <UserContext.Provider value={{ users, addUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // 3. Exportar todo al final (forma correcta)
// export { UserContext, UserProvider };