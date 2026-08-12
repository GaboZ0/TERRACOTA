import styles from "./SectionTitle.module.css";

import useInView from "../../hooks/useInView";


function SectionTitle({
    eyebrow,
    title,
    description,
    align = "center",
}) {

    const [
        ref,
        visible,
    ] = useInView();


    return (
        <div
            ref={ref}
            className={`
                ${styles.sectionTitle}
                ${styles[align]}
                ${visible ? styles.visible : ""}
            `}
        >

            {eyebrow && (
                <span
                    className={styles.eyebrow}
                >
                    {eyebrow}
                </span>
            )}


            <h2
                className={styles.title}
            >
                {title}
            </h2>


            {description && (
                <p
                    className={styles.description}
                >
                    {description}
                </p>
            )}

        </div>
    );
}


export default SectionTitle;