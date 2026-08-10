import styles from "./Logo.module.css";

import logo from "../../assets/logos/logo-horizontal.svg";

function Logo() {

    return (

        <img
            src={logo}
            alt="Terracota Software"
            className={styles.logo}
            draggable={false}
        />

    );

}

export default Logo;