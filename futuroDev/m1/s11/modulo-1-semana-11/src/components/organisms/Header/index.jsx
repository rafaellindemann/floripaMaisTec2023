import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

function Header() {
 const navigate = useNavigate();

 return (
  <div className={styles.wrapper}>
   <div className={styles["app-logo"]} onClick={() => navigate("/")}>
    <img src="/assets/app-logo.png" alt="App logo" />
    <h3>Blog de estudos</h3>
   </div>
  </div>
 );
}

export default Header;
