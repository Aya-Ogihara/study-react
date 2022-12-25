import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgLightblue } from 'src/hooks/useBgLightblue';


export default function About() {
  const {count, isShow, handleAddClick, handleDeductClick, handleDisplay} = useCounter();
  const {text, array, handleChange, handleAddItem} = useInputArray();
  useBgLightblue();

  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
      </Head>
      <Header />
      <button onClick={handleDisplay}>
        {isShow ? 'Hide count' : 'Display count'}
      </button>
      <br />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleDeductClick}>-</button>
      <br />
      <input type='text' value={text} onChange={handleChange} />
      <br />
      <button onClick={handleAddItem}>Add item</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />

      <Footer />
    </div>
  );
}
