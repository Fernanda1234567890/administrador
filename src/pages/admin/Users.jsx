// import React from 'react';

// const Users = () => {
//   return (
    
//     <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
//           <h2 className="text-2 font-bold mb-4 text-gray-800 text-left">
//     Personas registradas :
//     </h2>
//       <ul className="divide-y divide-gray-300 dark:divide-white-900 dark:bg-[#082F47]/90 rounded-lg shadow">
//         {[
//           {
//             name: "Ph. D. Ing. Pedro Guido López Cortés",
//             title: "Rector",
//             email: "email@flowbite.com",
//             phone: "79847563",
//             image: "/docs/images/people/profile-picture-1.jpg",
//           },
//           {
//             name: "M. Sc. Ing. David Soraide Lozano",
//             title: "Vicerrector",
//             email: "email@flowbite.com",
//             phone: "68429785",
//             image: "/docs/images/people/profile-picture-3.jpg",
//           },
//           {
//             name: "M. Sc. Abog. Jaqueline Filipps Díaz",
//             title: "Secretaria General",
//             email: "email@flowbite.com",
//             phone: "75386482",
//             image: "/docs/images/people/profile-picture-2.jpg",
//           },
//           {
//             name: "M. Sc. Abog. Carlos Severo Colque Iporre",
//             title: "Decano - Facultad de Derecho",
//             email: "email@flowbite.com",
//             phone: "69438931",
//             image: "/docs/images/people/profile-picture-5.jpg",
//           },
//           {
//             name: "M. Sc. Lic. Carlos Poveda Choque",
//             title: "Director - Facultad de Derecho",
//             email: "email@flowbite.com",
//             phone: "72409862",
//             image: "/docs/images/people/profile-picture-4.jpg",
//           },
//         ].map((user, index) => (
//           <li key={index} className="py-4 sm:py-5 px-2 sm:px-4">
//             <div className="flex items-center space-x-4">
//               <div className="shrink-0">
//                 <img
//                   className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
//                   src={user.image}
//                   alt={`${user.name} image`}
//                 />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm sm:text-base font-medium text-gray-100 truncate dark:text-white">
//                   {user.name}
//                 </p>
//                 <p className="text-sm text-gray-700 dark:text-gray-400 truncate">{user.title}</p>
//                 <p className="text-sm text-gray-500 truncate dark:text-gray-500">{user.email}</p>
//               </div>
//               <div className="text-right text-sm sm:text-base font-semibold text-gray-400 dark:text-white">
//                 {user.phone}
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-2 font-bold mb-4 text-gray-800 text-left">
        Personas registradas :
      </h2>
      <ul className="divide-y divide-gray-300 dark:divide-white-900 dark:bg-[#082F47]/90 rounded-lg shadow">
        {users.map((user, index) => (
          <li key={index} className="py-4 sm:py-5 px-2 sm:px-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  src={user.image}
                  alt={`${user.name} image`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-medium text-gray-100 truncate dark:text-white">
                  {user.name}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400 truncate">{user.title}</p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-500">{user.email}</p>
              </div>
              <div className="text-right text-sm sm:text-base font-semibold text-gray-400 dark:text-white">
                {user.phone}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;