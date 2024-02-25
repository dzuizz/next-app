import Link from "next/link";
import styles from "@/styles/components/Achievements.module.css";

export default function Achievement({ contests, achievements }) {
  return (
    <section id="Achievements" className={styles.Achievements}>
      <h1>2. Achievements</h1>
      {achievements.map((grp) => (
        <div>
          <h2 className={styles.heading}>
            {grp.year} - {grp.grade}
          </h2>
          <ul>
            {grp.items.map((item) => (
              <li className={styles.item}>
                {">"} <b>{item.title}</b> <i>({contests[item.title]})</i> -{" "}
                <b className={item.award}>{item.award}</b> <i>{item.ranking}</i>{" "}
                {item.filename == "" ? (
                  <></>
                ) : (
                  <Link href={"certs/" + item.filename} target="_blank">
                    view cert.
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
