import styles from "./Projects.module.css";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

import projectsData from "./projectsData";


function Projects() {

    return (

        <section
            id="productos"
            className={styles.projects}
        >

            <Container>

                <SectionTitle
                    eyebrow={
                        projectsData.eyebrow
                    }

                    title={
                        projectsData.title
                    }

                    description={
                        projectsData.description
                    }
                />


                <div
                    className={
                        styles.grid
                    }
                >

                    {
                        projectsData.projects.map(
                            (project) => (

                                <article
                                    key={
                                        project.id
                                    }
                                    className={
                                        styles.card
                                    }
                                >

                                    <div
                                        className={
                                            styles.imageWrapper
                                        }
                                    >

                                        <div
                                            className={
                                                styles.imagePlaceholder
                                            }
                                        >

                                            <span>
                                                {
                                                    project.number
                                                }
                                            </span>

                                        </div>


                                        <div
                                            className={
                                                styles.overlay
                                            }
                                        />

                                    </div>


                                    <div
                                        className={
                                            styles.content
                                        }
                                    >

                                        <div
                                            className={
                                                styles.meta
                                            }
                                        >

                                            <span>
                                                {
                                                    project.category
                                                }
                                            </span>


                                            <span>
                                                {
                                                    project.year
                                                }
                                            </span>

                                        </div>


                                        <h3>
                                            {
                                                project.title
                                            }
                                        </h3>


                                        <p>
                                            {
                                                project.description
                                            }
                                        </p>


                                        <div
                                            className={
                                                styles.technologies
                                            }
                                        >

                                            {
                                                project.technologies.map(
                                                    (technology) => (

                                                        <span
                                                            key={
                                                                technology
                                                            }
                                                        >
                                                            {
                                                                technology
                                                            }
                                                        </span>

                                                    )
                                                )
                                            }

                                        </div>

                                    </div>

                                </article>

                            )
                        )
                    }

                </div>

            </Container>

        </section>

    );

}


export default Projects;