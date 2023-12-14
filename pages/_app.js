import "@/styles/globals.css";
import { Montserrat, Roboto } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400","500", "600"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
