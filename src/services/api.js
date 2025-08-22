// const BASE_URL = "http://localhost:3000"; // Cambia al endpoint real

// export const fetchEntities = async (entity) => {
//   const res = await fetch(`${BASE_URL}/${entity}`);
//   if (!res.ok) throw new Error("Error al obtener datos");
//   return res.json();
// };

// export const createEntity = async (entity, data) => {
//   const res = await fetch(`${BASE_URL}/${entity}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) throw new Error("Error al crear entidad");
//   return res.json();
// };

// export const updateEntity = async (entity, id, data) => {
//   const res = await fetch(`${BASE_URL}/${entity}/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) throw new Error("Error al actualizar entidad");
//   return res.json();
// };

// export const deleteEntity = async (entity, id) => {
//   const res = await fetch(`${BASE_URL}/${entity}/${id}`, {
//     method: "DELETE",
//   });
//   if (!res.ok) throw new Error("Error al eliminar entidad");
//   return res.json();
// };
