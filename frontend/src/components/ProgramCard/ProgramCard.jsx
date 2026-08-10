import styles from "./ProgramCard.module.css";

import Button from "../Button";

function ProgramCard({ program }) {
  return (
    <article className={styles.card}>
      <img
        src={program.image}
        alt={program.title}
        className={styles.image}
      />

      <div className={styles.content}>
        <span className={styles.category}>
          {program.category}
        </span>

        <h3>{program.title}</h3>

        <p>{program.description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>
            ${program.price}
          </span>

          <Button>
            Comprar
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProgramCard;