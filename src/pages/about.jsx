import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';

export default function About(props) {
  const {
    count,
    isShow,
    handleAddClick,
    handleDeductClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAddItem,
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleDisplay}>
        {isShow ? 'Hide count' : 'Display count'}
      </button>
      <br />
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleDeductClick}>-</button>
      <br />
      <input type='text' value={text} onChange={handleChange} />
      <br />
      <button onClick={handleAddItem}>Add item</button>
      <ol>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
      <Main page='about' />

      <Footer />
    </div>
  );
}
