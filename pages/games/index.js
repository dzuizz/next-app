import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Games.module.css'

export default function Games() {
    let colours = ['#7209b7', '#4361ee', '#f72585', '#ffddd2', '#ff5400']

    return (
        <>
            <Head>
                <title>Games</title>
            </Head>
            <Link href='/' className={styles.backButton}>
                <span>Back</span>
            </Link>
            <main className={styles.main}>
                <ul className={styles.container}>
                    <li className={styles.card} style={{backgroundColor: colours[0]}}>
                        <Link href='/'>
                            <h1 style={{color: colours[0]}}>UTT</h1>
                        </Link>
                    </li>
                    <li className={styles.card} style={{backgroundColor: colours[1]}}>
                        <Link href='/'>
                            <h1 style={{color: colours[1]}}>Chess</h1>
                        </Link>
                    </li>
                    <li className={styles.card} style={{backgroundColor: colours[2]}}>
                        <Link href='/'>
                            <h1 style={{color: colours[2]}}>Ping Pong</h1>
                        </Link>
                    </li>
                    <li className={styles.card} style={{backgroundColor: colours[3]}}>
                        <Link href='/'>
                            <h1 style={{color: colours[3]}}>Rock Papers Scissors</h1>
                        </Link>
                    </li>
                    <li className={styles.card} style={{backgroundColor: colours[4]}}>
                        <Link href='/'>
                            <h1 style={{color: colours[4]}}>Misc.</h1>
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    );
}