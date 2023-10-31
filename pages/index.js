import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'
import data from '../public/data.json'

export default function Home() {
    const {
        contests, achievements
    } = data;

    return (
        <>
            <Head>
                {/* Global site tag (gtag.js) - Google Analytics */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-154885375-1"></Script>
                <Script id='google-analytics'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {
                            dataLayer.push(arguments);
                        }
                        gtag("js", new Date());
                        gtag("config", "UA-154885375-1");
                    `}
                </Script>

                <title>Dzuizz.com</title>
                <meta name="description" content="Dzuizz.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                {/* Landing Page */}
                <section className={styles.container}>
                    <div className={styles.landing}>
                        <h2>Hi 👋, I'm</h2>
                        <h1>Ahmad Dzuizz Annajib</h1>
                    </div>
                </section>

                {/* About Me */}
                <section className={styles.container}>
                    <div className={styles.introduction}>
                        <div className={styles.biography}>
                            <h3>--- About Me</h3>
                            <p>Hey there! I'm Dzuizz and I enjoy making things happen with technology. It all started when I got my first lego set. Who knew such a simple introduction to programming would have set me onto this path towards greatness? (the way I see it).</p>
                            <p>Now, I'm a Secondary 1 student at <a className={styles.link} href="https://www.nushigh.edu.sg" target="_blank">NUS High School of Math and Science</a> and an alumni of <a className={styles.link} href="https://www.irsyad.sg" target="_blank">Madrasah Irsyad Zuhri Al-Islamiah</a>, focusing all my efforts on learning and solving problems, especially in Informatics Olympiad and (a bit of) Math Olympiad.</p>
                            <p>Here are some of my coding profiles:</p>
                            <ul>
                                <li>CodeBreaker → <a className={styles.link} href="https://codebreaker.xyz/profile/dzuizz" target="_blank">codebreaker.xyz/profile/dzuizz</a></li>
                                <li>Codeforces → <a className={styles.link} href="https://codeforces.com/profile/dzuizz" target="_blank">codeforces.com/profile/dzuizz</a></li>
                                <li>Kattis → <a className={styles.link} href="https://open.kattis.com/users/dzuizz" target="_blank">open.kattis.com/users/dzuizz</a></li>
                                <li>Github → <a className={styles.link} href="https://github.com/dzuizz" target="_blank">github.com/dzuizz</a></li>
                            </ul>
                        </div>

                        {/* <Image src='/dzuizzNUSH.jpg' width={500} height={500}></Image> */}
                    </div>
                </section>

                <section className={styles.container}>
                    <div className={styles.achievements}>
                        <h3>--- Achievements</h3>
                        {achievements.map((grp) =>
                            <div>
                                <h2 className={styles.heading}>{grp.year} - {grp.grade}</h2>
                                <ul>
                                    {grp.items.map((item) =>
                                        <li className={styles.item}>
                                            <b>{item.title}</b> <i>({contests[item.title]})</i> - <b className={item.award}>{item.award}</b> <i>{item.ranking}</i> {item.filename==""?<></>:<a className={styles.link} href={"certs/"+item.filename} target="_blank">view cert.</a>}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>

                {/* <section className={styles.container}>
                    <ul className={styles.projects}>
                        <h3>--- Projects</h3>
                    </ul>
                </section> */}

                <div className={styles.social_media}></div>
                <a className={styles.credits} href="https://github.com/dzuizz/next-app">
                    <p>Envisioned and fabricated<br /> by Ahmad Dzuizz Annajib</p>
                </a>
            </main>
        </>
    )
}
