import axios from "axios";
export const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error en la petición: " + res.statusText);
  }

  return res.json();
};
