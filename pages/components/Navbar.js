import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-bg fixed flex w-full flex-row justify-between px-12 py-5 z-50">
      <Link className="text-2xl font-semibold" href="/">
        AHMAD DZUIZZ
      </Link>

      <div className="flex flex-row items-center gap-12">
        <ul className="flex list-none flex-row items-center gap-6">
          <li className="hover:text-accent duration-150">
            <Link href="#About">About</Link>
          </li>
          <li className="hover:text-accent duration-150">
            <Link href="/">Projects (soon :D)</Link>
          </li>
          <li className="hover:text-accent duration-150">
            <Link href="#Achievements">Achievements</Link>
          </li>
        </ul>

        {/*<button onClick={alert("Get trolled lmao!")}>*/}
        {/*  <svg*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    width="16"*/}
        {/*    height="16"*/}
        {/*    fill="currentColor"*/}
        {/*    class="bi bi-moon-fill"*/}
        {/*    viewBox="0 0 16 16"*/}
        {/*  >*/}
        {/*    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />*/}
        {/*  </svg>*/}
        {/*</button>*/}
      </div>
    </nav>
  );
}
