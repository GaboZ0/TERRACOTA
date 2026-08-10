import styles from "./Banner.module.css";
import bannerData from "./bannerData";

import Button from "../Button";
import Container from "../Container";
import ScrollIndicator from "../ScrollIndicator";

import heroImage from "../../assets/images/hero.jpg";

function Banner() {
  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(rgba(13,13,13,.82), rgba(13,13,13,.92)), url(${heroImage})`,
      }}
    >
        <Container>
          <div className={styles.content}>
            <span className={styles.tag}>
              {bannerData.tag}
            </span>

            <h1>{bannerData.title}</h1>

            <p>{bannerData.subtitle}</p>

            <div className={styles.buttons}>
              <Button>
                {bannerData.primaryButton}
              </Button>

              <Button variant="secondary">
                {bannerData.secondaryButton}
              </Button>
            </div>
          </div>
        </Container>
      <ScrollIndicator />
    </section>
  );
}

export default Banner;