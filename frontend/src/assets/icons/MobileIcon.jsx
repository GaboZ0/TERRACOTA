import BaseIcon from "./BaseIcon";

function MobileIcon(props) {
  return (
    <BaseIcon {...props}>
      <rect
        x="20"
        y="10"
        width="24"
        height="44"
        rx="6"
      />

      <line
        x1="29"
        y1="16"
        x2="35"
        y2="16"
      />

      <rect
        x="24"
        y="22"
        width="16"
        height="20"
        rx="2"
      />

      <circle
        cx="32"
        cy="48"
        r="2"
      />
    </BaseIcon>
  );
}

export default MobileIcon;