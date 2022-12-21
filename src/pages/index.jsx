import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useEffect, useState } from 'react';


export default function Home() {
  const [count, setCount] = useState(1)

  const handleAddClick = (e) => {
    setCount((count) => count + 1);
  }
  const handleDeductClick = (e) => {
    setCount((count) => count - 1);
  }

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button
        onClick={handleAddClick}
      >
        +
      </button>
      <button
        onClick={handleDeductClick}
      >
        -
      </button>
      <Main page='index' />
      <Footer />
    </div>
  );
}
