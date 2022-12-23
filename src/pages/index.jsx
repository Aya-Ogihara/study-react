import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(3);
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(false);

  //User events
  const handleAddClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDeductClick = useCallback(() => {
    if (count > 3) {
      setCount((prevCount) => prevCount - 1);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('Too long!');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  //User events -end

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
      </Head>
      <Header />
      <button onClick={handleDisplay}>{isShow? 'Hide count': 'Display count'}</button><br />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleDeductClick}>-</button>
      <br />
      <input type='text' value={text} onChange={handleChange} />
      <Main page='index' />
      <Footer />
    </div>
  );
}
