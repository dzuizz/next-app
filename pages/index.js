import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../public/data.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ achievements }) {
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
            <img>
            </img>
            <div>
              <h1>Ahmad Dzuizz Annajib</h1>
              <h2>Student @ NUS High</h2>
              <article>
                Hey there! I'm Dzuizz, an Indonesian boy reporting from Singapore. I'm a Secondary 1 student at <a href="https://www.nushigh.edu.sg" target="_blank">NUS High School of Math and Science</a> and a proud alumni of <a href="https://www.irsyad.sg">Madrasah Irsyad Zuhri Al-Islamiah</a>.
              </article>

              <h3>My Coding Profiles</h3>
              <ul>
                <li>CodeBreaker → <a href="codebreaker.xyz/profile/dzuizz">codebreaker.xyz/profile/dzuizz</a></li>
                <li>Codeforces → <a href="codeforces.com/profile/dzuizz">codeforces.com/profile/dzuizz</a></li>
                <li>mrJudge → <a href="dunjudge.me/users/dzuizz">dunjudge.me/users/dzuizz</a></li>
                <li>Kattis → <a href="open.kattis.com/users/dzuizz">open.kattis.com/users/dzuizz</a></li>
                <li>Github → <a href="github.com/dzuizz">github.com/dzuizz</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.container}>
          <Achievements />
        </section>

        <section className={styles.container}>
          projects
        </section>
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
            <b>{item.title}</b> <i>({contests[item.title]})</i> - <b className={item.award}>{item.award}</b> <i>{item.ranking}</i> <a href={"certs/"+item.filename}>view cert.</a>
          </li>
        )}
      </ul>
    </div>))}
  </div>
}