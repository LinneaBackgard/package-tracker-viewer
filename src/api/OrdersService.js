// src/api/OrdersService.js
import localData from '../data/packagedata.json';

/**
 * Hämtar orderdata.
 * 1) Försök hämta från API.
 * 2) Om API fallerar eller ger konstigt svar → använd lokal JSON.
 */
async function fetchOrders() {
  try {
    const res = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');
    // Om API svarar 200 OK
    if (!res.ok) throw new Error(`API svarade ${res.status}`);
    const data = await res.json();

    // Säkerställ lista:
    if (Array.isArray(data) && data.length > 0) return data;

    // Fallback om strukturen inte är en lista:
    return localData;
  } catch (e) {
    console.warn('API-fel, använder lokal data:', e?.message || e);
    return localData;
  }
}

export default fetchOrders;
