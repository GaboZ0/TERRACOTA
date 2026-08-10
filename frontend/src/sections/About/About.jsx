import styles from "./About.module.css";

import Container from "../../components/Container";
import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";
import FeatureCard from "../../components/FeatureCard";

import aboutData from "./aboutData";

function About() {
  return (
    <section
      className={styles.about}
      id="nosotros"
    >
      <Container>
        <SectionTitle
          eyebrow={aboutData.tag}
          title={aboutData.title}
          description={aboutData.description}
        />

        <div className={styles.grid}>
          {aboutData.features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <Button>
            {aboutData.button}
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default About;