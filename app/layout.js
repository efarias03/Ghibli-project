import "./styles/styles.css";

export const metadata = {
  title: "Ghibli ReDesign from Howard.le",
  description: "Used the design of Howard.le to create the website. Enzo Farias here =)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
