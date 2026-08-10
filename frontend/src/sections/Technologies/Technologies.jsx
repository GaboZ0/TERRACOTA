import styles from "./Technologies.module.css";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

import technologiesData from "./technologiesData";

function Technologies() {
    return (
        <section
            id="tecnologias"
            className={styles.technologies}
        >
            <Container>

                <SectionTitle
                    eyebrow={technologiesData.eyebrow}
                    title={technologiesData.title}
                    description={technologiesData.description}
                />

                <div className={styles.categories}>

                    {technologiesData.categories.map((category) => (

                        <div
                            key={category.id}
                            className={styles.category}
                        >

                            <div className={styles.categoryHeader}>

                                <span className={styles.categoryNumber}>
                                    {category.number}
                                </span>

                                <h3>
                                    {category.title}
                                </h3>

                            </div>

                            <div className={styles.technologiesList}>

                                {category.items.map((technology) => (

                                    <div
                                        key={technology}
                                        className={styles.technology}
                                    >
                                        {technology}
                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </Container>
        </section>
    );
}

export default Technologies;