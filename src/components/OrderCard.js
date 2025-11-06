function OrderCard({ order }) {
  // Trygga fallback-värden
  const id = order.id ?? order.parcel_id ?? "—";
  const rawStatus = (order.status ?? "unknown").toString().trim();
  const status = rawStatus.toUpperCase();
  const etaISO = order.eta ?? order.expected_at ?? null;
  const eta = etaISO ? new Date(etaISO).toLocaleString("sv-SE") : "Okänt";

  const pickup = order.location_name ?? "—";
  const customer = order.user_name ?? "—";
  const sender = order.sender ?? "—";

  // --- Telefon: rensa och normalisera ---
  const phoneRaw = order.user_phone ?? "";

  // Enkel funktion: ta bara siffror. Om numret börjar med landskod 46 -> gör till +46 <resten>
  function formatPhone(p) {
    if (!p) return "—";
    const digits = p.replace(/\D/g, ""); // behåll bara siffror (tar bort s, p, :, mellanslag osv)

    if (!digits) return "—";

    if (digits.startsWith("46")) {
      const rest = digits.slice(2); // ta bort landskoden
      return `+46 ${rest}`;         // enkel formatering: +46 följt av resten
    }

    // annars visa siffrorna som de är (inga länkar)
    return digits;
  }

  const phone = formatPhone(phoneRaw);

  // Enkel badge-färg per status
  const badge =
    status === "DELIVERED" ? "success" :
    status === "READY-FOR-PICKUP" ? "warning" :
    status === "ON-THE-WAY" ? "primary" :
    status === "ORDER-INFO-RECEIVED" ? "secondary" :
    "dark";

  return (
    <div className="card h-100 w-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h6 className="card-title mb-1">Order #{id}</h6>
          <span className={`badge bg-${badge}`}>{status}</span>
        </div>

        <p className="card-text mb-1"><strong>Kund:</strong> {customer}</p>
        {/* OBS: ingen länk här, bara ren text */}
        <p className="card-text mb-1"><strong>Telefon:</strong> {phone}</p>
        <p className="card-text mb-1"><strong>Avsändare:</strong> {sender}</p>
        <p className="card-text mb-1"><strong>ETA:</strong> {eta}</p>
        <p className="card-text mb-0"><strong>Pickup:</strong> {pickup}</p>
      </div>
    </div>
  );
}

export default OrderCard;
