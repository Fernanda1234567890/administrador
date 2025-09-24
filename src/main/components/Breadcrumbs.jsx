// import { Link, useLocation } from "react-router-dom";

// const routesMap = {
//   "": "Inicio",
//   "rutas-rectorado": "Rectorado",
//   "rutas-vicerrectorado": "Vicerrectorado", 
//   "fac-ingenieria": "Facultad de Ingeniería",
//   "fac-ciencias-juridicas": "Facultad de Derecho",
//   "secretaria-general": "Secretaría General",
//   "comision-economica": "Comisión Económica",
//   "dir-plan-univ": "Dir. de Planificación Universitaria",
//   "dir-adm-fin": "Dir. de Administración y Finanzas",
//   "dep-fin": "Depto. Finanzas",
//   "academica": "Dirección Académica",
//    facultades: "Facultades",
//    "fac-derecho": "Facultad de Derecho",
//   "fac-ing-geo": "Facultad de Ingeniería Geológica",
//   "fac-ing-min": "Facultad de Ingeniería Minera",
//   "fac-cien-agri-pec": "Facultad de Ciencias Agrarias y Pecuarias",
//   "fac-ing": "Facultad de Ingeniería",
//   "fac-cien-pur": "Facultad de Ciencias Puras",
//   "fac-cien-eco-fin-adm": "Facultad de Ciencias Económicas, Financieras y Administrativas",
//   "fac-cien-soc-hum": "Facultad de Ciencias Sociales y Humanas",
//   "fac-ing-tec": "Facultad de Ingeniería Técnica",
//   "fac-art": "Facultad de Artes",
//   "fac-med": "Facultad de Medicina",
//   "fac-cien-sal": "Facultad de Ciencias de la Salud",
//   "div-administrativa": "División Administrativa",
//   "administrativa": "Dirección Administrativa",
//   "dir-serv-acad": "Dirección de Servicios Académicos",
// };

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter(Boolean);

//   return (
//     <nav className="bg-gray-100 px-4 py-2 text-sm text-gray-600">
//       <ol className="list-reset flex">
//         <li>
//           <Link to="/" className="text-blue-950 hover:underline">Inicio</Link>
//         </li>
//         {pathnames.map((value, index) => {
//           const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const label = routesMap[value] || decodeURIComponent(value);
//           return (
//             <li key={to} className="mx-2">
//               <span className="mx-1">/</span>
//               <Link to={to} className="text-blue-800 hover:underline">
//                 {label}
//               </Link>
//             </li>
//           );
//         })}
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumbs;


import { Link, useLocation } from "react-router-dom";
import routesMap from "../routes/routesMap"; // Asegúrate que el path sea correcto

// Convierte slugs tipo "fac-cien-agri-pec" → "Fac Cien Agri Pec"
const slugToTitle = (slug) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="bg-gray-100 px-4 py-2 text-sm text-gray-600">
      <ol className="list-reset flex flex-wrap items-center">
        <li>
          <Link to="/" className="text-blue-950 hover:underline">Inicio</Link>
        </li>
        {pathnames.map((_, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const fullPath = pathnames.slice(0, index + 1).join("/");

          const label =
            routesMap[fullPath] ||
            routesMap[pathnames[index]] ||
            slugToTitle(pathnames[index]);

          return (
            <li key={to} className="mx-2 flex items-center">
              <span className="mx-1">/</span>
              {index === pathnames.length - 1 ? (
                <span className="text-gray-700">{label}</span>
              ) : (
                <Link to={to} className="text-blue-800 hover:underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;