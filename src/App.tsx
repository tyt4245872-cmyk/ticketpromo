export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", color: "#fff", background: "#0a1128" }}>

      <h1>🎟️ TicketPromoLive</h1>

      <p>
        اكتشف أفضل الفعاليات حولك بسهولة.
      </p>

      <hr />

      <section>
        <h2>🔥 أحدث الفعاليات</h2>
        <p>تابع الحفلات، المباريات، والمهرجانات الجديدة.</p>
      </section>

      <section>
        <h2>⭐ عروض حصرية</h2>
        <p>أفضل العروض من المنظمين الرسميين.</p>
      </section>

      <section>
        <h2>📍 حسب موقعك</h2>
        <p>اعثر على فعاليات قريبة منك بسهولة.</p>
      </section>

      {/* ✅ التنويه الجديد */}
      <section style={{ marginTop: "30px", background: "#111", padding: "15px", borderRadius: "8px" }}>
        <h3>⚠️ تنويه</h3>
        <p>
          نحن لسنا جهة بيع تذاكر، وإنما نقدم هذا الموقع كدليل لمساعدتك في اكتشاف الفعاليات والعروض فقط.
        </p>
      </section>

      <hr />

      <footer style={{ marginTop: "40px" }}>
        © 2026 TicketPromoLive — جميع الحقوق محفوظة
      </footer>

    </div>
  );
}
