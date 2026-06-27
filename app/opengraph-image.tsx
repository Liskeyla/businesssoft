import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Business Soft S.A. - Soluciones CRM inteligentes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #082C5A 0%, #0F4C81 55%, #1665a8 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "linear-gradient(135deg,#0F4C81,#38BDF8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: 800,
            }}
          >
            B
          </div>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 700 }}>
            Business<span style={{ color: "#38BDF8" }}>Soft</span>
          </div>
        </div>

        <div
          style={{
            fontSize: "60px",
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Transformamos la gestión comercial con soluciones CRM inteligentes
        </div>

        <div
          style={{
            marginTop: "32px",
            fontSize: "28px",
            color: "#BBD7EE",
            maxWidth: "820px",
          }}
        >
          Optimiza ventas, marketing y atención al cliente con las plataformas
          CRM líderes del mercado.
        </div>
      </div>
    ),
    { ...size }
  );
}
