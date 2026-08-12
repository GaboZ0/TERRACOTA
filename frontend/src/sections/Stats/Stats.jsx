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
            ref={sectionRef}
            className={`
                ${styles.stats}
                ${sectionVisible ? styles.visible : ""}
            `}
        >

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