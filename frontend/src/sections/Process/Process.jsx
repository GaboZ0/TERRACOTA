import styles from "./Process.module.css";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

import processData from "./processData";

function Process() {
    return (
        <section
            id="proceso"
            className={styles.process}
        >
            <Container>

                <SectionTitle
                    eyebrow={processData.eyebrow}
                    title={processData.title}
                    description={processData.description}
                />

                <div className={styles.timeline}>

                    <div className={styles.line} />

                    {processData.steps.map((step) => (

                        <article
                            key={step.id}
                            className={styles.step}
                        >

                            <div className={styles.number}>
                                {step.number}
                            </div>

                            <div className={styles.content}>

                                <span className={styles.label}>
                                    {step.label}
                                </span>

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.description}
                                </p>

                            </div>

                        </article>

                    ))}

                </div>

            </Container>
        </section>
    );
}

export default Process;