import {
    useEffect,
    useRef,
    useState,
} from "react";


function useInView(options = {}) {

    const ref =
        useRef(null);

    const [
        isVisible,
        setIsVisible,
    ] = useState(false);


    useEffect(() => {

        const element =
            ref.current;

        if (!element) {
            return undefined;
        }


        /*
         * Si el usuario tiene activado
         * "reducir movimiento", mostramos
         * directamente el contenido.
         */
        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            setIsVisible(true);

            return undefined;
        }


        const observer =
            new IntersectionObserver(
                ([entry]) => {

                    if (
                        entry.isIntersecting
                    ) {

                        setIsVisible(true);

                        /*
                         * Una vez visible,
                         * dejamos de observar.
                         */
                        observer.unobserve(
                            element
                        );
                    }

                },
                {
                    threshold:
                        options.threshold ??
                        0.12,

                    rootMargin:
                        options.rootMargin ??
                        "0px 0px -12% 0px",
                }
            );


        observer.observe(
            element
        );


        return () => {

            observer.disconnect();

        };

    }, [
        options.threshold,
        options.rootMargin,
    ]);


    return [
        ref,
        isVisible,
    ];
}


export default useInView;