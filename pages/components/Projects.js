import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const softwares = [
        {
            'title': 'Visual Studio Code',
            'img_file': '/images/softwares/vscode.png',
            'link': 'https://code.visualstudio.com/'
        },
        {
            'title': 'NeoVim',
            'img_file': '/images/softwares/neovim.png',
            'link': 'https://neovim.io/'
        },
        {
            'title': 'GitHub',
            'img_file': '/images/softwares/github.png',
            'link': 'https://github.com/'
        },
    ];

    const languages = [
        {
            'title': 'Python',
            'img_file': '/images/languages/python.png',
            'link': 'https://www.python.org/'
        },
        {
            'title': 'C++',
            'img_file': '/images/languages/cpp.png',
            'link': 'https://en.wikipedia.org/wiki/C%2B%2B'
        },
        {
            'title': 'JavaScript',
            'img_file': '/images/languages/js.png',
            'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            'title': 'Kotlin',
            'img_file': '/images/languages/kotlin.png',
            'link': 'https://kotlinlang.org/'
        },
    ];

    return (
        <section className='flex min-h-screen w-full flex-col justify-center place-items-center content-center gap-8 p-16'>
            <div className='flex flex-row w-full h-full mb-8'>
                <h2 className='text-xl font-semibold'>Some Softwares<br/> I use</h2>
                <ul className='flex flex-wrap gap-8 flex-row w-full h-full justify-around'>
                    {softwares.map((lang) => (
                        <Link href={lang.link} className='flex flex-row gap-8 bg-secondary rounded-xl p-8 place-items-center scale-100 duration-200 hover:scale-110'>
                            <Image src={lang.img_file} alt='' width={50} height={50}></Image>
                            <h1 className='text-3xl text-text font-bold align-middle'>{lang.title}</h1>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='flex flex-row w-full h-full'>
                <h2 className='text-xl font-semibold'>Some Languages<br/> I know</h2>
                <ul className='flex flex-wrap gap-8 flex-row w-full h-full justify-around'>
                    {languages.map((lang) => (
                        <Link href={lang.link} className='flex flex-row gap-8 bg-secondary rounded-xl p-8 place-items-center scale-100 duration-200 hover:scale-110'>
                            <Image src={lang.img_file} alt='' width={50} height={50}></Image>
                            <h1 className='text-3xl text-text font-bold align-middle'>{lang.title}</h1>
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
    );
}
