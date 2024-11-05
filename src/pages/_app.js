import "@/styles/globals.css";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/AuthContext";
import { CartContextProvider } from "@/db/CartContext.js";
import ToasterContext from "@/components/ToasterContext.jsx";

const inter = Nunito({ subsets: ["latin"], weight: "400" });

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <CartContextProvider>
      <div className={`${inter.className}`}>
        <SessionProvider session={session}>
          <AuthProvider>
            <Navbar />
            <ToasterContext />
            <Component {...pageProps} />
            <Footer />
          </AuthProvider>
        </SessionProvider>
      </div>
    </CartContextProvider>
  );
};

export default App;
