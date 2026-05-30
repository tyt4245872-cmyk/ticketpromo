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

      {/* Search */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
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
      <div style={{ display: "grid", gap: "20px" }}>

        <div style={cardStyle}>
          <h3>🎤 حفلات موسيقية</h3>
          <p>أحدث الحفلات الغنائية في مدينتك</p>
        </div>

        <div style={cardStyle}>
          <h3>⚽ مباريات</h3>
          <p>تابع أقوى المباريات والبطولات</p>
        </div>

        <div style={cardStyle}>
          <h3>🎪 مهرجانات</h3>
          <p>فعاليات ترفيهية وعائلية متنوعة</p>
        </div>

        <div style={cardStyle}>
          <h3>⭐ عروض خاصة</h3>
          <p>أفضل العروض من المنظمين الرسميين</p>
        </div>

      </div>

      {/* Notice */}
      <div style={{
        marginTop: "40px",
        background: "#111",
        padding: "15px",
        borderRadius: "8px"
      }}>
        <h3>⚠️ تنويه</h3>
        <p>
          نحن لسنا جهة بيع تذاكر، وإنما نقدم هذا الموقع كدليل لمساعدتك في اكتشاف الفعاليات والعروض فقط.
        </p>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: "40px",
        textAlign: "center",
        fontSize: "14px"
      }}>
        © 2026 TicketPromoLive — جميع الحقوق محفوظة
      </footer>

    </div>
  );
}

const cardStyle = {
  background: "#111",
  padding: "20px",
  borderRadius: "10px",
};
``
