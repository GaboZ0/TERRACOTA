import styles from "./ScrollIndicator.module.css";

function ScrollIndicator() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Descubrí más</span>

      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;