import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  const className =
    variant === "secondary"
      ? styles.secondary
      : styles.primary;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;