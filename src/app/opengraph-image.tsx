import { ImageResponse } from "next/og";

export const alt = "Nutripeach — Consultorio privado de nutrición";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#FFF8F2",
        }}
      >
        <div style={{ fontSize: 160, display: "flex" }}>🍑</div>
        <div style={{ fontSize: 72, fontWeight: 600, color: "#4A2A16", marginTop: 24, display: "flex" }}>
          Nutripeach
        </div>
        <div style={{ fontSize: 32, color: "#9C7A5C", marginTop: 16, display: "flex" }}>
          Consultorio privado de nutrición
        </div>
      </div>
    ),
    { ...size },
  );
}
