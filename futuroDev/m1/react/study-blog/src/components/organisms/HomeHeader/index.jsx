import styles from "./index.module.css";

function HomeHeader() {
 return (
  <div className={styles.wrapper}>
   <h1 className={styles.bigText}>Bem vindo,</h1>
   <h3 className={styles.message}>Saiba mais sobre o que estou aprendendo</h3>
  </div>
 );
}

export default HomeHeader;
