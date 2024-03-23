import Link from "next/link";
import data from "../../public/data.json";

export default function Achievement() {
  const { contests, achievements } = data;

  return (
    <section id="Achievements" className="p mx-auto my-0 p-24">
      <h1 className="text-primary after:bg-accent mb-10 text-5xl font-extrabold leading-normal after:block after:h-px">
        Achievements
      </h1>
      {achievements.map((grp) => (
        <div>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">
            {grp.year} - {grp.grade}
          </h2>
          <ul className="ml-4 list-disc">
            {grp.items.map((item) => (
              <li className="leading-9">
                <b>{item.title}</b> <i>({contests[item.title]})</i> -{" "}
                <b className={item.award}>{item.award}</b> <i>{item.ranking}</i>{" "}
                {item.filename == "" ? (
                  <></>
                ) : (
                  <Link
                    className="decoration-accent underline decoration-2 underline-offset-4 duration-150 hover:underline-offset-8 active:underline-offset-8"
                    href={"certs/" + item.filename}
                    target="_blank"
                  >
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
