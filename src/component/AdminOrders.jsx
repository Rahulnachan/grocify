import { useEffect, useState } from "react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">📦 All Orders</h2>

      {orders.map(order => (
        <div
          key={order._id}
          className="border p-4 mb-4 rounded shadow"
        >
          <p><b>Name:</b> {order.customerName}</p>
          <p><b>Address:</b> {order.address}</p>
          <p><b>Total:</b> ₹{order.totalAmount}</p>
          <p><b>Status:</b> {order.status}</p>

          <p className="mt-2 font-semibold">Products:</p>
          {order.products.map((p, i) => (
            <p key={i}>
              {p.name} × {p.quantity} (₹{p.price})
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;
