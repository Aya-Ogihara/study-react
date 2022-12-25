import styles from 'src/components/Headline/Headline.module.css'


export const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.title}>
        {props.page} page
      </h1>
      <p className={styles.description}>
        You have{' '}
        {props.children}
        {' '} items
      </p>
      <button onClick={props.reduceItem}>Remove item</button>
    </div>
  )
}