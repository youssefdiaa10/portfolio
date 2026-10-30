import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yosof Alwakil — Developer & Engineer",
    template: "%s | Yosof Alwakil",
  },
  description: "The portfolio of Yosof Alwakil, an engineering student and developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
