import BioSection from "../components/BioSection";
import RutasRectorado from "../components/RutasRectorado";
import RutasVicerrectorado from "../components/RutasVicerrectorado";
import RutaSecGral from "../components/RutaSecGral";
import RutaRecComEco from "../components/RutaRecComEco";
import RutaPlanUniv from "../components/RutaPlanUniv";
import RutaAdmFin from "../components/RutaAdmFin";
import RutaDeptoFinanzas from "../components/RutaDeptoFinanzas";
import RutaDivAcademica from "../components/RutaDivAcademica";
import RutaFacultades from "../components/RutaFacultades";
import RutaFacDerecho from "../components/RutaFacDerecho";
import RutaFacIngGeo from "../components/RutaFacIngGeo";
import RutaFacIngMin from "../components/RutaFacIngMin";
import RutaFacCienAgrPec from "../components/RutaFacCienAgrPec";
import RutaFacIng from "../components/RutaFacIng";
import RutaFacCienPuras from "../components/RutaFacCienPuras";
import RutaFacCienEcoFinAdm from "../components/RutaFacCienEcoFinAdm";
import RutaFacCienSocHum from "../components/RutaFacCienSocHum";
import RutaFacingTec from "../components/RutaFacIngTec";
import RutaFacArtes from "../components/RutaFacArtes";
import RutaFacMedicina from "../components/RutaFacMedicina";
import RutaFacCienSalud from "../components/RutaFacCienSalud";
import RutaDivAdministrativa from "../components/RutaDivAdministrativa";
import RutaServAcad from "../components/RutaServAcad";
import MainLayout from "../components/layout/MainLayout";

const publicRoutes = [
  { path: "/", element: <BioSection />, layout: null }, // sin layout
  { path: "/rutas-rectorado", element: <RutasRectorado />, layout: MainLayout },
  { path: "/rutas-vicerrectorado", element: <RutasVicerrectorado />, layout: MainLayout },
  { path: "/secretaria-general", element: <RutaSecGral />, layout: MainLayout },
  { path: "/comision-economica", element: <RutaRecComEco />, layout: MainLayout },
  { path: "/dir-plan-univ", element: <RutaPlanUniv />, layout: MainLayout },
  { path: "/dir-adm-fin", element: <RutaAdmFin />, layout: MainLayout },
  { path: "/dep-fin", element: <RutaDeptoFinanzas />, layout: MainLayout },
  { path: "/academica", element: <RutaDivAcademica />, layout: MainLayout },
  { path: "/facultades", element: <RutaFacultades />, layout: MainLayout },
  { path: "/fac-derecho", element: <RutaFacDerecho />, layout: MainLayout },
  { path: "/fac-ing-geo", element: <RutaFacIngGeo />, layout: MainLayout },
  { path: "/fac-ing-min", element: <RutaFacIngMin />, layout: MainLayout },
  { path: "/fac-cien-agri-pec", element: <RutaFacCienAgrPec />, layout: MainLayout },
  { path: "/fac-ing", element: <RutaFacIng />, layout: MainLayout },
  { path: "/fac-cien-pur", element: <RutaFacCienPuras />, layout: MainLayout },
  { path: "/fac-cien-eco-fin-adm", element: <RutaFacCienEcoFinAdm />, layout: MainLayout },
  { path: "/fac-cien-soc-hum", element: <RutaFacCienSocHum />, layout: MainLayout },
  { path: "/fac-ing-tec", element: <RutaFacingTec />, layout: MainLayout },
  { path: "/fac-art", element: <RutaFacArtes />, layout: MainLayout },
  { path: "/fac-med", element: <RutaFacMedicina />, layout: MainLayout },
  { path: "/fac-cien-sal", element: <RutaFacCienSalud />, layout: MainLayout },
  { path: "/administrativa", element: <RutaDivAdministrativa />, layout: MainLayout },
  { path: "/dir-serv-acad", element: <RutaServAcad />, layout: MainLayout },
];

export default publicRoutes;
