import "@/styles/globals.css";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import { Nunito } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import ToasterContext from "@/components/ToasterContext.jsx";

const inter = Nunito({ subsets: ["latin"], weight: "400" });

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <div className={`${inter.className}`}>
      <SessionProvider session={session}>
        <Navbar />
        <ToasterContext />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </div>
  );
};

export default App;
