import BaseIcon from "./BaseIcon";

function DatabaseIcon(props) {
  return (
    <BaseIcon {...props}>
      <ellipse
        cx="32"
        cy="18"
        rx="14"
        ry="6"
      />

      <path d="M18 18V34C18 37.5 24.3 40 32 40C39.7 40 46 37.5 46 34V18" />

      <path d="M18 26C18 29.5 24.3 32 32 32C39.7 32 46 29.5 46 26" />

      <path d="M18 34C18 37.5 24.3 40 32 40C39.7 40 46 37.5 46 34" />

      <line
        x1="32"
        y1="40"
        x2="32"
        y2="52"
      />
    </BaseIcon>
  );
}

export default DatabaseIcon;