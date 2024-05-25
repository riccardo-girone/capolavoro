import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <div className={styles.content}>
            <div className={styles.mainContent}>
                <div className={styles.error}>404</div>
                <div className={styles.title}>
                    <div>PAGE</div>
                    <div>NOT</div>
                    <div>FOUND</div>
                </div>
                <div className={styles.subTitle}>
                    <div>Sorry, what are you doing here?!</div>
                    <div>LET US COOK</div>
                </div>
            </div>

            <div className={styles.back}>
                <Link href="/"> ← Back to home</Link>
            </div>
        </div>
    )
}