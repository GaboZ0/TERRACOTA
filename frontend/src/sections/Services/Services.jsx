import styles from "./Services.module.css";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ServiceCard from "../../components/ServiceCard";

import servicesData from "./servicesData";

function Services() {
    const {
        eyebrow,
        title,
        description,
        services,
    } = servicesData;

    return (
        <section
            id="servicios"
            className={styles.services}
        >
            <Container>
                <SectionTitle
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />

                <div className={styles.grid}>
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Services;