import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { M_PLUS_1_Code } from "next/font/google";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";

export default function Home() {
    return (
        <>
            <Head>
                {/* Global site tag (gtag.js) - Google Analytics */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-154885375-1"></Script>
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
                    content="Ahmad Dzuizz Annajib: My Web Coding Portfolio"
                />
                <meta
                    name="viewport"
                    content="width = device-width, initial-scale = 1.0"
                />
            </Head>

            <main className={`flex min-h-screen flex-col`}>
                <Navbar />
                <About />
                <Projects />
                <Achievements />

                {/* Social Links */}
                <Link className="lg:before:bg-accent lg:hover:text-accent hidden duration-100 lg:fixed lg:-right-[4.5rem] lg:bottom-56 lg:block lg:-rotate-90 lg:before:block lg:before:h-px lg:before:-translate-x-[19rem] lg:before:translate-y-4" href="mailto:ahmad.dzuizz.annajib@gmail.com">
                ahmad.dzuizz.annajib@gmail.com
                </Link>

                {/* Credits */}
                <a className="mb-8 mt-16 text-center text-xs" href="https://github.com/dzuizz/next-app">
                    <p>
                          Built with Next.js and TailwindCSS, <br />
                          By yours truly, Ahmad Dzuizz Annajib
                    </p>
                </a>
            </main>
        </>
    );
}
