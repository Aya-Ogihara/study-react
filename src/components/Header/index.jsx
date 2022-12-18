import Link from 'next/link';
import styles from 'src/components/Header/Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'><span className={styles.anchor}>Index</span></Link>
      <Link href='/about'><span className={styles.anchor}>About</span></Link>
    </header>
  );
}
