import "@/styles/globals.css";
import { Montserrat, Roboto } from "@next/font/google";
import { GlobalContextProvider } from "./Store/globalContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </GlobalContextProvider>
  );
}
