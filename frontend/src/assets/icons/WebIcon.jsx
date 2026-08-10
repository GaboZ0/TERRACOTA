import BaseIcon from "./BaseIcon";

function WebIcon(props) {
  return (
    <BaseIcon {...props}>
      <rect
        x="12"
        y="14"
        width="40"
        height="34"
        rx="6"
      />

      <line
        x1="12"
        y1="22"
        x2="52"
        y2="22"
      />

      <circle
        cx="18"
        cy="18"
        r="1.3"
        fill="currentColor"
        stroke="none"
      />

      <circle
        cx="22"
        cy="18"
        r="1.3"
        fill="currentColor"
        stroke="none"
      />

      <circle
        cx="26"
        cy="18"
        r="1.3"
        fill="currentColor"
        stroke="none"
      />

      <polyline points="24 34 20 38 24 42" />

      <polyline points="40 34 44 38 40 42" />

      <line
        x1="30"
        y1="42"
        x2="34"
        y2="34"
      />
    </BaseIcon>
  );
}

export default WebIcon;