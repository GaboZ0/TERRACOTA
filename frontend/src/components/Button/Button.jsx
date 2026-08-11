import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  href,
}) {
  const className =
    variant === "secondary"
      ? styles.secondary
      : styles.primary;

  if (href) {
    return (
      <a
        href={href}
        className={className}
      >
        {children}
      </a>
    );
  }

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