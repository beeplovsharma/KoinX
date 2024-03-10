import "./globals.css";
import NavBar from "./components/NavBar/NavBar";


export const metadata = {
  title: "KoinX",
  description:
    "CryptoKoinX is known for their impeccable crypto tax calculations and portfolio management solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
