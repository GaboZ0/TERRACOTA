import styles from "./FeatureCard.module.css";


function FeatureIcon({ type }) {

    if (type === "development") {
        return (
            <svg
                className={styles.iconSvg}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <rect
                    x="13"
                    y="13"
                    width="22"
                    height="22"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />

                <rect
                    x="18"
                    y="18"
                    width="12"
                    height="12"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />

                <path
                    d="M9 17H13M9 24H13M9 31H13M35 17H39M35 24H39M35 31H39"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M17 9V13M24 9V13M31 9V13M17 35V39M24 35V39M31 35V39"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
            </svg>
        );
    }


    if (type === "technology") {
        return (
            <svg
                className={styles.iconSvg}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M14 34H34"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M15 34V28C15 24.686 17.686 22 21 22H27C30.314 22 33 24.686 33 28V34"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M18 22C18 17.582 21.582 14 26 14C30.418 14 34 17.582 34 22"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M20 14C20 11.791 21.791 10 24 10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
            </svg>
        );
    }


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
                    d="M9 38V29"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M19 38V23"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M29 38V17"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M39 38V10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M7 38H41"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
            </svg>
        );
    }


    if (type === "support") {
        return (
            <svg
                className={styles.iconSvg}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M10 25V22C10 14.268 16.268 8 24 8C31.732 8 38 14.268 38 22V25"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M10 24H14V34H10C8.895 34 8 33.105 8 32V26C8 24.895 8.895 24 10 24Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />

                <path
                    d="M38 24H34V34H38C39.105 34 40 33.105 40 32V26C40 24.895 39.105 24 38 24Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />

                <path
                    d="M34 34C34 37.314 31.314 40 28 40H24"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
            </svg>
        );
    }


    /*
     * Compatibilidad con los iconos
     * que ya existían en About.
     */

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
    variant = "default",
}) {

    const className =
        variant === "hero"
            ? `${styles.card} ${styles.heroCard}`
            : styles.card;


    return (
        <article
            className={className}
        >

            <div className={styles.icon}>
                <FeatureIcon type={icon} />
            </div>


            <div className={styles.content}>

                <h3 className={styles.title}>
                    {title}
                </h3>


                <p className={styles.description}>
                    {description}
                </p>

            </div>


            {variant !== "hero" && (
                <div className={styles.arrow}>
                    →
                </div>
            )}

        </article>
    );
}


export default FeatureCard;