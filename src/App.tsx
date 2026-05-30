import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const events = [
    { title: "حفلة محمد عبده", city: "الرياض" },
    { title: "حفلة عمرو دياب", city: "جدة" },
    { title: "حفلة راب", city: "الرياض" },
    { title: "حفلة غنائية حية", city: "الدمام" },
  ];

  const filtered = events.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>

      {/* Header */}
      <header style={styles.header}>
        <h1>🎟️ TicketPromoLive</h1>
        <p>دليل الحفلات الموسيقية</p>
      </header>

      {/* Search */}
      <input
        type="text"
        placeholder="ابحث عن حفلة..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* Events */}
      <div style={styles.grid}>
        {filtered.map((event, i) => (
          <div key={i} style={styles.card}>
            <h3>{event.title}</h3>
            <small>{event.city}</small>
          </div>
        ))}
      </div>

      {/* Notice */}
      <div style={styles.notice}>
        <h3>⚠️ تنويه</h3>
        <p>
          نحن لسنا جهة بيع تذاكر، وإنما نقدم هذا الموقع كدليل لاكتشاف الحفلات فقط.
        </p>
      </div>

    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    background: "#0a1128",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px"
  },
  header: {
    textAlign: "center",
    marginBottom: "20px"
  },
  search: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gap: "15px"
  },
  card: {
    background: "#111",
    padding: "15px",
    borderRadius: "10px"
  },
  notice: {
    marginTop: "30px",
    background: "#111",
