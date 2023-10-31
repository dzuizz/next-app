import Link from 'next/link';
import styles from '@/styles/BackButton.module.css';

export default function BackButton(props) {
    return (
        <>
            <Link href={props.destination} className={styles.backButton}>
                <span>Back</span>
            </Link>
        </>
    );
}