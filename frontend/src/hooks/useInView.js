import { useEffect, useRef, useState } from "react";

function useInView() {

    const ref = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    setIsVisible(true);

                    observer.unobserve(element);
                }

            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px -35% 0px",
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };

    }, []);

    return [ref, isVisible];
}

export default useInView;