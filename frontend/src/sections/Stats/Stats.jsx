import styles from "./Stats.module.css";

import Container from "../../components/Container";
import statsData from "./statsData";

function Stats() {
  return (
    <section className={styles.stats}>
      <Container>
        <div className={styles.grid}>
          {statsData.map((item) => (
            <article
              key={item.id}
              className={styles.card}
            >
              <span className={styles.number}>
                {item.value}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;