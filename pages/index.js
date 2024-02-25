import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import data from "../public/data.json";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Achievements from "./components/Achievements";

export default function Home() {
  const { contests, achievements } = data;

  return (
    <>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-154885375-1"
        ></Script>
        <Script id="google-analytics">{`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
              dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "UA-154885375-1");
        `}</Script>

        <title>Dzuizz.com</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Ahmad Dzuizz Annajib" />
        <meta
          name="description"
          content="A Web Portfolio by Ahmad Dzuizz Annajib"
        />
        <meta
          name="viewport"
          content="width = device-width, initial-scale = 1.0"
        />
      </Head>

      <main className="flex min-h-screen flex-col">
        <Navbar />
        <About />
        <Achievements contests={contests} achievements={achievements} />

        {/* Social Links */}
        <Link
          className="duration-100 lg:fixed lg:bottom-56 lg:right-[-4.5rem] lg:-rotate-90 lg:before:block lg:before:h-px lg:before:translate-x-[-19rem] lg:before:translate-y-4 lg:before:bg-[var(--accent-color)] lg:hover:text-[var(--accent-color)]"
          href="mailto:ahmad.dzuizz.annajib@gmail.com"
        >
          ahmad.dzuizz.annajib@gmail.com
        </Link>

        {/* Credits */}
        <a className={styles.credits} href="https://github.com/dzuizz/next-app">
          <p>
            Built with Next.js, <br />
            By yours truly, Ahmad Dzuizz Annajib
          </p>
        </a>
      </main>
    </>
  );
}
