import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function actividadesData() {
  return {
    async getData() {
      const res = await axios.get(`${API_URL}/actividades`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.data;
    },
  };
}
