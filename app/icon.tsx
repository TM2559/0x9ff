import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "ui-monospace, monospace",
            fontWeight: 800,
            fontSize: 28,
            color: "#0099FF",
            lineHeight: 1,
            marginBottom: -2,
            display: "block",
          }}
        >
          _
        </span>
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
