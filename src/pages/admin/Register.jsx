// import React, { useState } from 'react';

// const Register = () => {
//   // Estados para cada campo
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     ci: '',
//     phone: '',
//     email: '',
//     address: '',
//     birthDate: '',
//     profileImage: null,
//     userType: ''
//   });

//   // Maneja los cambios en inputs de texto, date y select
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Maneja cambio en input file (imagen)
//   const handleFileChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       profileImage: e.target.files[0] || null
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Datos del formulario:', formData);

//     // Aquí puedes hacer la llamada a API para enviar los datos
//     // por ejemplo usando fetch o axios.
//   };

//   return (
//     <>
//       <h2 className="text-2 font-bold mb-4 text-gray-800 text-left">
//         Ingresar datos :
//       </h2>

//       <div className="p-6 sm:p-2 lg:p-12 sm:ml-50 mt-18 min-h-screen dark:bg-[#082F47]">
//         <div className="max-w-2xl mx-auto">
//           <form className="bg-white shadow-lg rounded-lg p-6 sm:p-20" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <div className="relative z-0 w-full mb-10 group">
//                 <input
//                   type="text"
//                   name="firstName"
//                   id="floating_first_name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="floating_first_name"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-top-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Nombres
//                 </label>
//               </div>

//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="text"
//                   name="lastName"
//                   id="floating_last_name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="floating_last_name"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-top-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Apellidos
//                 </label>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 md:gap-6 mb-6">
//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="text"
//                   name="ci"
//                   id="floating_ci"
//                   value={formData.ci}
//                   onChange={handleChange}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="floating_ci"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-top-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   C.I.
//                 </label>
//               </div>
//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="tel"
//                   pattern="^(\d{8}|\d{3}-\d{4})$"
//                   name="phone"
//                   id="floating_phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="floating_phone"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-top-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   telefono(62*-**** or ********)
//                 </label>
//               </div>
//             </div>

//             <div className="mb-6">
//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="email"
//                   name="email"
//                   id="floating_email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="floating_email"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-top-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Correo electronico
//                 </label>
//               </div>
//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="text"
//                   name="address"
//                   id="floating_address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="floating_address"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-top-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Dirección
//                 </label>
//               </div>
//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="date"
//                   name="birthDate"
//                   id="birth_date"
//                   value={formData.birthDate}
//                   onChange={handleChange}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="birth_date"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-top-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Fecha de Nacimiento
//                 </label>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 md:gap-6 mb-6">
//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="file"
//                   name="profileImage"
//                   id="profile_image"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   className="block w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 bg-transparent dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-900 hover:file:bg-blue-100"
//                   required
//                 />
//                 <label
//                   htmlFor="profile_image"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-top-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Subir Imagen
//                 </label>
//               </div>
//               <div className="relative z-0 w-full mb-5 group">
//                 <select
//                   name="userType"
//                   id="user_type"
//                   value={formData.userType}
//                   onChange={handleChange}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
//                   required
//                 >
//                   <option value="" disabled hidden>Selecciona tipo</option>
//                   <option value="admin">Administrative</option>
//                   <option value="user">Professor</option>
//                   <option value="guest">Student</option>
//                 </select>
//                 <label
//                   htmlFor="user_type"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-top-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Tipo
//                 </label>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="text-white bg-blue-950 border border-red-900 hover:bg-red-900 hover:border-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition duration-300"
//             >
//               Guardar
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;


import React, { useState, useContext } from 'react';
//import { UserContext } from './UserContext';

const Register = () => {
  const { addUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    ci: '',
    phone: '',
    email: '',
    address: '',
    birthDate: '',
    profileImage: null,
    userType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      profileImage: e.target.files[0] || null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const titleMap = {
      'admin': 'Administrative',
      'user': 'Professor',
      'guest': 'Student'
    };

    const newUser = {
      name: `${formData.firstName} ${formData.lastName}`,
      title: titleMap[formData.userType] || 'User',
      email: formData.email,
      phone: formData.phone,
      image: formData.profileImage ? URL.createObjectURL(formData.profileImage) : '/default-profile.jpg'
    };

    addUser(newUser);

    setFormData({
      firstName: '',
      lastName: '',
      ci: '',
      phone: '',
      email: '',
      address: '',
      birthDate: '',
      profileImage: null,
      userType: ''
    });
  };

  return (
    <>
      <h2 className="text-2 font-bold mb-4 text-gray-800 text-left">
        Ingresar datos :
      </h2>

      <div className="p-6 sm:p-2 lg:p-12 sm:ml-50 mt-18 min-h-screen dark:bg-[#082F47]">
        <div className="max-w-2xl mx-auto">
          <form className="bg-white shadow-lg rounded-lg p-6 sm:p-20" onSubmit={handleSubmit}>
            {/* Todos los campos del formulario se mantienen exactamente igual */}
            {/* ... */}

            <button
              type="submit"
              className="text-white bg-blue-950 border border-red-900 hover:bg-red-900 hover:border-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition duration-300"
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;