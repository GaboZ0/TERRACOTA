import styles from "./Stats.module.css";

import Container from "../../components/Container";
import useInView from "../../hooks/useInView";

import statsData from "./statsData";


function Stats() {

    const [
        sectionRef,
        sectionVisible,
    ] = useInView();


    return (
        <section
            id="stats"
            ref={sectionRef}
            aria-labelledby="stats-title"
            className={`
                ${styles.stats}
                ${sectionVisible ? styles.visible : ""}
            `}
        >

            <h2
                id="stats-title"
                className={styles.visuallyHidden}
            >
                Datos destacados de Terracota Software
            </h2>


            <Container>

                <div
                    className={styles.grid}
                >

                    {statsData.map(
                        (item, index) => (

                            <article
                                key={item.id}
                                className={`
                                    ${styles.card}
                                    ${sectionVisible ? styles.cardVisible : ""}
                                `}
                                style={{
                                    "--stats-delay":
                                        `${index * 90}ms`,
                                }}
                            >

                                <span
                                    className={styles.number}
                                >
                                    {item.value}
                                </span>


                                <h3>
                                    {item.title}
                                </h3>


                                <p>
                                    {item.description}
                                </p>

                            </article>

                        )
                    )}

                </div>

            </Container>

        </section>
    );
}


export default Stats;