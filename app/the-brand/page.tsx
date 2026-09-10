export default function TheBrand() {
  return (
    <main className="pt-14 flex-1">

      {/* Hero */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "50vh", background: "#f5f5f3" }}
      >
        <div className="text-center">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#14b8a6", marginBottom: "1rem" }}>
            Who We Are
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "4rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#000",
            }}
          >
            The Brand
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "6rem 2rem" }}>

        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.6rem",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#111",
            marginBottom: "3rem",
          }}
        >
          Mek Boutique was born from a simple belief: fashion should be beautiful, ethical, and enduring.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(0,0,0,0.6)" }}>
            Based on the sun-drenched island of Kos, Greece, it is a contemporary fashion boutique offering carefully curated, unique clothing for women who truly love style.
          </p>

          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(0,0,0,0.6)" }}>
            Each piece in our collection tells a story of thoughtful craftsmanship and conscious living. We select garments for their quality, sustainability, and timeless aesthetic, partnering with artisans and ethical manufacturers who share our commitment to both people and the planet.
          </p>

          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(0,0,0,0.6)" }}>
            At Mek Boutique, you will find distinctive pieces for every occasion — from effortless everyday looks to more elevated, standout outfits. For us, fashion is not about following trends, but about expressing who you are in a beautiful and responsible way.
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", margin: "4rem 0" }} />

        {/* Values */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
          {[
            { label: "Slow Fashion", desc: "Timeless over trendy" },
            { label: "Eco Friendly", desc: "Conscious manufacturing" },
            { label: "Curated", desc: "Every piece has a story" },
          ].map((v) => (
            <div key={v.label} style={{ flex: 1, textAlign: "center" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#14b8a6", marginBottom: "0.75rem" }}>
                {v.label}
              </p>
              <p style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.5)" }}>{v.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </main>
  );
}
