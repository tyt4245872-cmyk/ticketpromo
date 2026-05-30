export default function App() {
  return (
    <div style={{
      fontFamily: "sans-serif",
      color: "#fff",
      background: "#0a1128",
      minHeight: "100vh",
      padding: "20px"
    }}>

      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1>🎟️ TicketPromoLive</h1>
        <p>اكتشف أفضل الفعاليات حولك بسهولة</p>
      </header>

      {/* Search Box (مثل nofomo) */}
      <div style={{
        marginBottom: "30px",
        textAlign: "center"
      }}>
        <input
          placeholder="ابحث عن فعالية..."
          style={{
            width: "80%",
            padding: "10px",
            borderRadius: "8px",
            border: "none"
          }}
        />
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gap: "20px"
      }}>

        <div style={cardStyle}>
          <h3>🎤 حفلات موسيقية</h3>
