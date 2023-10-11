import styles from "./App.module.scss";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className={styles.wrapper}>
     <Todos/>
    </div>
  );
}
export default App;
