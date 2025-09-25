// // @admin/services/orgChart.js
// import unidadesData from "./unidades";
// import cargoIntermedioDocenteData from "./cargoIntermedioDocente";
// import administrativoCargoRegularUnidadData from "./administrativoCargoRegularUnidad";

// const orgChartData = () => {
//   const fetchHierarchyAndAssignments = async () => {
//     try {
//       // Fetch todas las unidades
//       const unidadesRes = await unidadesData().getData(1, 1000, "", "", "", "todos");
//       const unidades = unidadesRes.data || [];

//       // Fetch asignaciones
//       const docentesRes = await cargoIntermedioDocenteData().getAll();
//       const asignacionesDocentes = docentesRes || [];

//       const adminsRes = await administrativoCargoRegularUnidadData().getData(1, 1000);
//       const asignacionesAdmins = adminsRes.data || [];

//       // DEBUG: Ver estructura real de los datos
//       console.log("Unidades recibidas:", unidades);
//       console.log("Asignaciones docentes:", asignacionesDocentes);
//       console.log("Asignaciones admins:", asignacionesAdmins);

//       // Construir árbol jerárquico - CORREGIDO
//       const buildTree = (unidades, parentId = null) => {
//         return unidades
//           .filter((u) => {
//             // Ajusta según tu estructura real - opciones comunes:
//             return u.id_unidad_padre === parentId || 
//                    u.unidad_padre?.id === parentId ||
//                    u.parentId === parentId;
//           })
//           .map((unidad) => ({
//             id: unidad.id,
//             name: unidad.nombre,
//             descripcion: unidad.descripcion,
//             children: buildTree(unidades, unidad.id),
//             assignments: {
//               docentes: asignacionesDocentes
//                 .filter((a) => a.unidad?.id === unidad.id)
//                 .map((a) => ({
//                   persona: `${a.docente?.persona?.nombres || ''} ${a.docente?.persona?.apellidos || ''}`,
//                   cargo: a.cargo_intermedio?.nombre || '',
//                   fechaInicio: a.fecha_inicio,
//                   fechaFin: a.fecha_fin,
//                 })),
//               admins: asignacionesAdmins
//                 .filter((a) => a.unidad?.id === unidad.id)
//                 .map((a) => ({
//                   persona: `${a.administrativo?.persona?.nombres || ''} ${a.administrativo?.persona?.apellidos || ''}`,
//                   cargo: a.cargo_regular?.nombre || '',
//                   fechaIngreso: a.fecha_ingreso,
//                   fechaFin: a.fecha_fin,
//                 })),
//             },
//           }));
//       };

//       // Encontrar raíces (unidades sin padre)
//       const roots = buildTree(unidades);
//       console.log("Árbol construido:", roots);

//       return { 
//         success: true, 
//         tree: roots, 
//         totalUnidades: unidades.length,
//         rawData: { unidades, asignacionesDocentes, asignacionesAdmins } // Para debug
//       };
//     } catch (error) {
//       console.error("Error al fetch datos para OrgChart:", error);
//       return { success: false, tree: [], error: error.message };
//     }
//   };

//   return { fetchHierarchyAndAssignments };
// };

// export default orgChartData;