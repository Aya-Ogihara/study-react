import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';

const Home = ({
  count,
  isShow,
  handleAddClick,
  handleDeductClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAddItem,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
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
      <Main page='index' />
      <Footer />
    </div>
  );
}

export default Home;