import styles from "./index.module.css"

function Treco(props) {
  return (
    <div className={styles.contreco}>
      {props.n}
    </div>
  )
}

export default Treco
