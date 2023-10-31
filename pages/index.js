import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import data from '../public/data.json'

export default function Home() {
    return (
        <>
            <Head>
                <title>Dzuizz.com</title>
                <meta name="description" content="Dzuizz.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.introduction}>
                        <img></img>

                        <div>
                            <h1>Ahmad Dzuizz Annajib</h1>
                            <h2>Student @ NUS High</h2>
                            <article>
                                Hey there! I'm Dzuizz, an Indonesian boy reporting from Singapore. I'm a Secondary 1 student at <a className={styles.link} href="https://www.nushigh.edu.sg" target="_blank">NUS High School of Math and Science</a> and a proud alumni of <a className={styles.link} href="https://www.irsyad.sg" target="_blank">Madrasah Irsyad Zuhri Al-Islamiah</a>.
                            </article>

                            <h3>My Coding Profiles</h3>
                            <ul>
                                <li>CodeBreaker → <a className={styles.link} href="https://codebreaker.xyz/profile/dzuizz" target="_blank">codebreaker.xyz/profile/dzuizz</a></li>
                                <li>Codeforces → <a className={styles.link} href="https://codeforces.com/profile/dzuizz" target="_blank">codeforces.com/profile/dzuizz</a></li>
                                {/* <li>mrJudge → <a className={styles.link} href="https://dunjudge.me/users/dzuizz" target="_blank">dunjudge.me/users/dzuizz</a></li> */}
                                <li>Kattis → <a className={styles.link} href="https://open.kattis.com/users/dzuizz" target="_blank">open.kattis.com/users/dzuizz</a></li>
                                <li>Github → <a className={styles.link} href="https://github.com/dzuizz" target="_blank">github.com/dzuizz</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.container}>
                    <Achievements />
                </section>

                {/* <section className={styles.container}>
                    <ul className={styles.projects}>
                        <a href="/games" className={styles.project}>
                            <h2>Games collection</h2>
                            <img src='' />
                        </a>
                        <a href="/algorithms" className={styles.project}>
                            <h2>Algorithm Wiki</h2>
                            <img src='' />
                        </a>
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

export function Achievements() {
    const {
        contests, achievements
    } = data;
    return <div className={styles.achievements}>
        {achievements.map(((grp) => <div>
            <h2 className={styles.heading}>{grp.year} - {grp.grade}</h2>
            <ul>
                {grp.items.map((item) =>
                    <li className={styles.item}>
                        <b>{item.title}</b> <i>({contests[item.title]})</i> - <b className={item.award}>{item.award}</b> <i>{item.ranking}</i> {item.filename==""?<></>:<a className={styles.link} href={"certs/"+item.filename} target="_blank">view cert.</a>}
                    </li>
                )}
            </ul>
        </div>))}
    </div>
}
