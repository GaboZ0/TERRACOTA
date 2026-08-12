import styles from "./ServiceCard.module.css";

import useInView from "../../hooks/useInView";


function ServiceCard({
    icon: Icon,
    title,
    description,
}) {

    const [
        ref,
        visible,
    ] = useInView();


    return (
        <article
            ref={ref}
            className={`
                ${styles.card}
                ${visible ? styles.visible : ""}
            `}
        >

            <div
                className={styles.iconContainer}
            >

                <Icon
                    className={styles.icon}
                    size={52}
                />

            </div>


            <h3
                className={styles.title}
            >
                {title}
            </h3>


            <p
                className={styles.description}
            >
                {description}
            </p>

        </article>
    );
}


export default ServiceCard;