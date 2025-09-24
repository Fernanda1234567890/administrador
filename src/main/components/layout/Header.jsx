import { Link } from "react-router-dom";
import frontisImage from '../../assets/FRONTIS.png';
import Breadcrumbs from '../../components/Breadcrumbs';
const Header = () => {
  return (
    <>
      <header className="bg-[#AB2A2A] text-white py-2 flex justify-end items-center px-6 w-full">
        <a
          href="https://www.uatf.edu.bo/"
          className="bg-red-800 text-white px-4 py-1 rounded hover:bg-[#082F47]"
        >
          Página Principal
        </a>
      </header>

      <div className="bg-slate-800 text-white px-4 py-1 flex items-center gap-4">
        <div className="flex items-center">
          <img src={frontisImage} alt="Frontis" className="h-8 mr-3" />
          <h2 className="text-xl font-bold">UNIVERSIDAD AUTÓNOMA TOMÁS FRÍAS</h2>
        </div>
      </div>

      {/* Breadcrumb de navegación */}
      <Breadcrumbs />
    </>
  );
};

export default Header;
