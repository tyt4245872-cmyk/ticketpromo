import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const events = [
    { title: "حفلة محمد عبده", city: "الرياض" },
    { title: "حفلة عمرو دياب", city: "جدة" },
    { title: "حفلة راب", city: "الرياض" },
    { title: "حفلة غنائية حية", city: "الدمام" }
  ];

  const filtered = events.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  const copyCode = () => {
    navigator.clipboard.writeText("MD15");
    alert("✅ تم نسخ كود الخصم");
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🎟️ TicketPromoLive</h1>
        <p>دليل الحفلات الموسيقية</p>
      </header>

      <div style={styles.promo}>
        🎉 استخدم كود الخصم:
        <strong style={{ margin: "0 10px", color: "#00ffcc" }}>MD15</strong>
        <button onClick={copyCode} style={styles.button}>نسخ</button>
      </div>

      <input
        type="text"
        placeholder="ابحث عن حفلة..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      <div style={styles.grid}>
        {filtered.map((event, i) => (
          <div key={i} style={styles.card}>
            <h3>{event.title}</h3>
            <small>{event.city}</small>
          </div>
        ))}
      </div>

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
  promo: {
    background: "#111",
    padding: "12px",
    borderRadius: "8px",
    textAlign: "center",
    marginBottom: "20px"
  },
  button: {
    marginLeft: "10px",
    padding: "5px 10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer"
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
    padding: "15px",
    borderRadius: "8px"
  }
};
