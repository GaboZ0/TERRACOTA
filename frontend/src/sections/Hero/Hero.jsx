import styles from "./Hero.module.css";

import Container from "../../components/Container";
import Button from "../../components/Button";
import ScrollIndicator from "../../components/scrollIndicator";

import heroData from "./heroData";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <span className={styles.tag}>
              {heroData.tag}
            </span>

            <h1 className={styles.title}>
              {heroData.title}
            </h1>

            <p className={styles.description}>
              {heroData.description}
            </p>

            <div className={styles.buttons}>
              <Button>
                {heroData.primaryButton}
              </Button>

              <Button variant="secondary">
                {heroData.secondaryButton}
              </Button>
            </div>
          </div>

          <div className={styles.right}></div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;