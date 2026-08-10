import BaseIcon from "./BaseIcon";

function AutomationIcon(props) {
  return (
    <BaseIcon {...props}>
      <circle
        cx="32"
        cy="32"
        r="8"
      />

      <line
        x1="32"
        y1="14"
        x2="32"
        y2="20"
      />

      <line
        x1="32"
        y1="44"
        x2="32"
        y2="50"
      />

      <line
        x1="14"
        y1="32"
        x2="20"
        y2="32"
      />

      <line
        x1="44"
        y1="32"
        x2="50"
        y2="32"
      />

      <line
        x1="20"
        y1="20"
        x2="24"
        y2="24"
      />

      <line
        x1="40"
        y1="40"
        x2="44"
        y2="44"
      />

      <line
        x1="20"
        y1="44"
        x2="24"
        y2="40"
      />

      <line
        x1="40"
        y1="24"
        x2="44"
        y2="20"
      />
    </BaseIcon>
  );
}

export default AutomationIcon;