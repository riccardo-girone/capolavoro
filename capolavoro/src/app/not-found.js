import Link from 'next/link'
import styles from './not-found.module.css'
 
export default function NotFound() {
  return (
    <div className={styles.content}>
      <div className='gap-404-1 mb-404-2 flex justify-center items-center flex-col'>
        <div>404</div>
        <div className='font-primary font-extrabold text-sub-titel m-0 leading-10'>Page not Found</div>
        <div>Sorry, we couldn't find the page you're looking for.</div>
      </div>
      <Link href="/">Back to home</Link>
    </div>
  )
}