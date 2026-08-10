import styles from "./ServiceCard.module.css";

function ServiceCard({
    icon: Icon,
    title,
    description,
}) {
    return (
        <article className={styles.card}>
            <div className={styles.iconContainer}>
                <Icon
                    className={styles.icon}
                    size={52}
                />
            </div>

            <h3 className={styles.title}>
                {title}
            </h3>

            <p className={styles.description}>
                {description}
            </p>
        </article>
    );
}

export default ServiceCard;