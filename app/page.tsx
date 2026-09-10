import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-14 flex-1">
      <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 relative">
        <p className="text-teal-500 text-sm tracking-[0.3em] uppercase">
          Slow Fashion · Eco Friendly · Timeless
        </p>
        <Image
          src="/mek_boutique_logo.svg"
          alt="Mek Boutique Logo"
          width={300}
          height={300}
        />
        <p className="text-black text-sm tracking-[0.2em]">
          Sustainable Fashion. Timeless Style.
        </p>
        <div className="flex items-center" style={{ marginTop: "2.5rem" }}>
          <button
            className="flex items-center gap-3 tracking-[0.15em] active:text-gray-500"
            style={{
              color: "#090909",
              padding: "0.7em 1.7em",
              fontSize: "18px",
              borderRadius: "0.5em",
              background: "#e8e8e8",
              cursor: "pointer",
              border: "1px solid #e8e8e8",
              transition: "all 0.3s",
              boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff",
            }}
          >
            Shop Now
          </button>
        </div>
        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-[0.3em] uppercase">Discover</span>
          <span className="animate-bounce text-lg">↓</span>
        </div>
      </div>
      {/* Brands Section */}
      <div className="w-full bg-white" style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="text-center" style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
          <h2 className="text-6xl text-black" style={{ letterSpacing: "0.05em" }}>
            Explore Our World
          </h2>
          <p className="text-sm text-gray-400" style={{ marginTop: "1.5rem", letterSpacing: "0.2em" }}>Our brand partners that share our values.</p>
        </div>
        <div className="flex gap-1 px-20">
          <div className="relative w-1/2 overflow-hidden group" style={{ height: "100vh" }}>
            <Image src="/maisonhotel.png" alt="Maison Hotel" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
            <span
              className="absolute bottom-10 left-10 text-white text-4xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Maison Hotel
            </span>
          </div>
          <div className="relative w-1/2 overflow-hidden group" style={{ height: "100vh" }}>
            <Image src="/lotuseaters.png" alt="Lotus Eaters" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
            <span
              className="absolute bottom-10 left-10 text-white text-4xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Lotus Eaters
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
