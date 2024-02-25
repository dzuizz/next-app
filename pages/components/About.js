import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/About.module.css";

export default function About() {
  return (
    <section id="About" className={styles.About}>
      <Image
        src="/dzuizz.jpg"
        width={500}
        height={500}
        alt="Picture of Ahmad Dzuizz Annajib"
      ></Image>
      <div>
        <h1>1. About Me</h1>
        <article>
          Hi, I'm Dzuizz! A secondary 1 student at{" "}
          <Link href="https://www.nushigh.edu.sg" target="_blank">
            NUS High School of Math and Science
          </Link>
          , and alumni of{" "}
          <Link href="https://www.irsyad.sg" target="_blank">
            Madrasah Irsyad Zuhri Al-Islamiah
          </Link>
          . <br />
          <br />I enjoy making things happen with technology. Web development,
          competitive programming, computer hardware ... you name it!
          <br />
          <br />
          Here are some of my coding profiles:
          <ul>
            <li>
              {"> Codebreaker - "}
              <Link
                href="https://codebreaker.xyz/profile/dzuizz"
                target="_blank"
              >
                codebreaker.xyz/profile/dzuizz
              </Link>
            </li>
            <li>
              {"> Codeforces - "}
              <Link
                href="https://codeforces.com/profile/dzuizz"
                target="_blank"
              >
                codeforces.com/profile/dzuizz
              </Link>
            </li>
            <li>
              {"> Kattis - "}
              <Link href="https://open.kattis.com/users/dzuizz" target="_blank">
                open.kattis.com/users/dzuizz
              </Link>
            </li>
            <li>
              {"> Github - "}
              <Link href="https://github.com/dzuizz" target="_blank">
                github.com/dzuizz
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
