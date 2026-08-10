import styles from "./SectionDivider.module.css";

function SectionDivider() {
  return (
    <div className={styles.divider}>
      <div className={styles.glow}></div>
    </div>
  );
}

export default SectionDivider;