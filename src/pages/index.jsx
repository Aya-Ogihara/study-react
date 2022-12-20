import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCallback, useEffect } from 'react';


export default function Home() {
  const foo = 1

  const handleClick = useCallback((e) => {
    console.log(e.target.innerText)
    e.preventDefault();
    alert(foo);
  }, [])

  useEffect(() => {
    console.log('mount')
    document.body.style.backgroundColor = 'lightblue';

    return () => {
      console.log('unmount')
      document.body.style.backgroundColor = '';
    }
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      <button
        onClick={handleClick}
      >
        Button
      </button>
      <Main page='index' />
      <Footer />
    </div>
  );
}
