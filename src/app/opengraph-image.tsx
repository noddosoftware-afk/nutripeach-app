import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Nutripeach — Consultorio privado de nutrición";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), "public/brand/nutripeach-lockup.png")).toString("base64");

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
          background: "#FBF9F5",
        }}
      >
        <img src={`data:image/png;base64,${logo}`} width={620} height={207} alt="Nutripeach" />
        <div style={{ fontSize: 32, color: "#6B7A6C", marginTop: 28, display: "flex" }}>
          Consultorio privado de nutrición
        </div>
      </div>
    ),
    { ...size },
  );
}
