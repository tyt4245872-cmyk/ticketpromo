

function App() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <h1 className="logo">TicketPromoLive</h1>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">اكتشف أفضل الفعاليات حولك</h2>
        <p className="hero-text">
          TicketPromoLive هو منصة لاكتشاف الفعاليات. نحن لا نبيع التذاكر، بل نساعدك في العثور على
          العروض والفعاليات الرسمية بسهولة.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-box">
          <h3>🎟️ اكتشف فعاليات جديدة</h3>
          <p>تصفح أحدث الحفلات، المباريات، والمهرجانات.</p>
        </div>

        <div className="feature-box">
          <h3>⭐ عروض حصرية</h3>
          <p>نساعدك في العثور على أفضل العروض من المنظمين الرسميين.</p>
        </div>

        <div className="feature-box">
          <h3>📍 حسب موقعك</h3>
          <p>اعثر على فعاليات قريبة منك بسهولة.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 TicketPromoLive — جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}

export default App;
