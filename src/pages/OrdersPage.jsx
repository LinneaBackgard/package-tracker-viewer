// src/pages/OrderPage.js
import { useEffect, useState } from 'react';
import fetchOrders from '../api/OrdersService';
import OrderCard from '../components/OrderCard';

function OrdersPage() {
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=> {
    async function load() {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (e) {
        setError(e.message || 'Något gick fel');
      }
    }
    load();
  }, []);

  if (error) return <div className="container py-3">Fel: {error}</div>;
  if (!orders) return <div className="container py-3">Laddar…</div>;

  return (
    <div className="container py-3">
      <h1 className="h4 mb-3">Package Tracking Viewer</h1>
      <div className="row g-3">
        {orders.map(o => (
          <div className="col-12 col-md-6 col-lg-4" key={o.id ?? o.parcel_id}>
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
