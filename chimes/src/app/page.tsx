import styles from "./page.module.css";
import Chimes from "./components/Chimes";

export default function Home() {
  return (
    <div className={styles.page}>
      <Chimes />
    </div>
  );
}
