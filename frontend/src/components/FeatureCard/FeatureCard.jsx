import styles from "./FeatureCard.module.css";

function FeatureIcon({ type }) {
  if (type === "innovation") {
    return (
      <svg
        className={styles.iconSvg}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 20.5C16 13.5964 21.5964 8 28.5 8C35.4036 8 41 13.5964 41 20.5C41 25.0717 38.5457 29.0698 35 31.2222V36H22V31.2222C18.4543 29.0698 16 25.0717 16 20.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M22 40H35"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M24 44H33"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M28.5 15V25"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M24.5 20H32.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "security") {
    return (
      <svg
        className={styles.iconSvg}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M24 6L39 12V22C39 31.2 33.15 39.35 24 43C14.85 39.35 9 31.2 9 22V12L24 6Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M16.5 24L21.5 29L31.5 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "scalability") {
    return (
      <svg
        className={styles.iconSvg}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M9 39L18 30L25 35L39 18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M31 18H39V26"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          cx="9"
          cy="39"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="18"
          cy="30"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="25"
          cy="35"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="39"
          cy="18"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  return null;
}

function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <FeatureIcon type={icon} />
      </div>

      <h3 className={styles.title}>
        {title}
      </h3>

      <p className={styles.description}>
        {description}
      </p>

      <div className={styles.arrow}>
        →
      </div>
    </article>
  );
}

export default FeatureCard;