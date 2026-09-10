export default function Footer() {
  return (
    <footer
      className="border-t border-black/10 bg-white mt-auto"
      style={{ padding: "2.5rem 4rem" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>

        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <span style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.3em", color: "#14b8a6", textTransform: "uppercase", fontFamily: "var(--font-cormorant)" }}>
            MEK BOUTIQUE
          </span>
          <p style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.4)" }}>Instagram</p>
          <a href="https://www.instagram.com/mek_boutique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.5)" }}>
            @mek_boutique
          </a>
          <p style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.4)", lineHeight: 1.6 }}>
            Αθήνα, Ελλάδα
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "0.25rem" }}>Navigate</p>
          <a href="/ready-to-wear" style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.6)" }}>Ready to Wear</a>
          <a href="/the-brand" style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.6)" }}>The Brand</a>
          <a href="/contact" style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.6)" }}>Contact</a>
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "0.25rem" }}>Contact</p>
          <a href="tel:+30" style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.6)" }}>+30 000 000 0000</a>
          <a href="mailto:hello@mekboutique.gr" style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.6)" }}>hello@mekboutique.gr</a>
        </div>

        {/* Values */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "0.25rem" }}>Our Values</p>
          <p style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.6)" }}>Slow Fashion</p>
          <p style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.6)" }}>Eco Friendly</p>
          <p style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.6)" }}>Timeless Style</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(0,0,0,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.3)" }}>MEK Boutique © 2025. All rights reserved.</p>
        <p style={{ fontSize: "0.625rem", color: "rgba(0,0,0,0.15)", userSelect: "none" }}>this website was created by A.P.</p>
      </div>
    </footer>
  );
}
