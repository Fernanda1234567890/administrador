// // src/main/components/OrgChart.jsx
// import React from 'react';
// import { Tree, TreeNode } from 'react-organizational-chart';

// // Componente para renderizar asignaciones en un nodo (tabla pequeña)
// const AssignmentsTable = ({ docentes, admins }) => (
//   <div className="bg-gray-100 p-2 rounded text-xs">
//     <h4 className="font-bold text-gray-800 mb-1">Asignaciones:</h4>
//     {docentes.length > 0 && (
//       <div>
//         <h5 className="text-blue-600 font-semibold">Docentes:</h5>
//         <ul className="list-disc list-inside">
//           {docentes.map((d, i) => (
//             <li key={i}>{d.persona} - {d.cargo} ({d.fechaInicio} - {d.fechaFin || 'Activo'})</li>
//           ))}
//         </ul>
//       </div>
//     )}
//     {admins.length > 0 && (
//       <div className="mt-2">
//         <h5 className="text-green-600 font-semibold">Administrativos:</h5>
//         <ul className="list-disc list-inside">
//           {admins.map((a, i) => (
//             <li key={i}>{a.persona} - {a.cargo} ({a.fechaIngreso} - {a.fechaFin || 'Activo'})</li>
//           ))}
//         </ul>
//       </div>
//     )}
//     {docentes.length === 0 && admins.length === 0 && <p className="text-gray-500">Sin asignaciones</p>}
//   </div>
// );

// // Nodo personalizado para unidad
// const UnitNode = ({ node }) => (
//   <div className="border border-gray-300 rounded p-4 bg-white shadow-md w-64">
//     <h3 className="font-bold text-lg mb-1">{node.name}</h3>
//     <p className="text-sm text-gray-600 mb-3">{node.descripcion}</p>
//     <AssignmentsTable docentes={node.assignments.docentes} admins={node.assignments.admins} />
//   </div>
// );

// const OrgChart = ({ treeData }) => {
//   if (!treeData || treeData.length === 0) {
//     return <p className="text-center text-gray-500">No hay estructura organizacional disponible.</p>;
//   }

//   const renderTree = (nodes) => (
//     <>
//       {nodes.map((node) => (
//         <TreeNode key={node.id} label={<UnitNode node={node} />}>
//           {node.children && node.children.length > 0 && renderTree(node.children)}
//         </TreeNode>
//       ))}
//     </>
//   );

//   return (
//     <div className="p-4 border rounded-lg bg-white shadow-md">
//       <Tree label={<UnitNode node={treeData[0]} />}> {/* Asume una raíz principal */}
//         {treeData[0].children && renderTree(treeData[0].children)}
//       </Tree>
//     </div>
//   );
// };

// export default OrgChart;