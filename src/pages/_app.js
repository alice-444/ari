import "@/styles/globals.css";
import { Nunito, Ubuntu } from "next/font/google";
import ToasterContext from "@/components/ToasterContext.jsx";

const inter = { subsets: ["latin"] };

const App = ({ Component, pageProps }) => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ToasterContext />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
