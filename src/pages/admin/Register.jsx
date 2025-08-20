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