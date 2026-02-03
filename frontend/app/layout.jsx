import "../styles/globals.css";

export const metadata = {
  title: "SavvyFi Dashboard",
  description: "Personal finance dashboard inspired by SavvyFi"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
