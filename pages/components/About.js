import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="About"
      className="flex min-h-screen w-full flex-row place-items-center content-center gap-8 p-16"
    >
      <Image
        className="rounded-2xl"
        src="/images/dzuizz.jpg"
        width={500}
        height={500}
        alt="Picture of Ahmad Dzuizz Annajib"
      ></Image>
      <div>
        <h1 className="text-primary after:bg-accent mb-8 text-5xl font-semibold leading-normal after:block after:h-px">
          About Me
        </h1>
        <article>
          Hi, I'm Dzuizz! A secondary 1 student at{" "}
          <Link
            className="decoration-accent underline decoration-2 underline-offset-4 duration-150 hover:underline-offset-8 active:underline-offset-8"
            href="https://www.nushigh.edu.sg"
            target="_blank"
          >
            NUS High School of Math and Science
          </Link>
          , and alumni of{" "}
          <Link
            className="decoration-accent underline decoration-2 underline-offset-4 duration-150 hover:underline-offset-8 active:underline-offset-8"
            href="https://www.irsyad.sg"
            target="_blank"
          >
            Madrasah Irsyad Zuhri Al-Islamiah
          </Link>
          . <br />
          <br />I enjoy making things happen with technology. Web development,
          competitive programming, computer hardware ... you name it!
          <br />
          <br />
          Here are some of my coding profiles:
          <ul className="ml-4 list-disc">
            <li>
              Codebreaker -{" "}
              <Link
                className="decoration-accent underline decoration-2 underline-offset-4 duration-150 hover:underline-offset-8 active:underline-offset-8"
                href="https://codebreaker.xyz/profile/dzuizz"
                target="_blank"
              >
                codebreaker.xyz/profile/dzuizz
              </Link>
            </li>
            <li>
              Codeforces -{" "}
              <Link
                className="decoration-accent underline decoration-2 underline-offset-4 duration-150 hover:underline-offset-8 active:underline-offset-8"
                href="https://codeforces.com/profile/dzuizz"
                target="_blank"
              >
                codeforces.com/profile/dzuizz
              </Link>
            </li>
            <li>
              Kattis -{" "}
              <Link
                className="decoration-accent underline decoration-2 underline-offset-4 duration-150 hover:underline-offset-8 active:underline-offset-8"
                href="https://open.kattis.com/users/dzuizz"
                target="_blank"
              >
                open.kattis.com/users/dzuizz
              </Link>
            </li>
            <li>
              Github -{" "}
              <Link
                className="decoration-accent underline decoration-2 underline-offset-4 duration-150 hover:underline-offset-8 active:underline-offset-8"
                href="https://github.com/dzuizz"
                target="_blank"
              >
                github.com/dzuizz
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
