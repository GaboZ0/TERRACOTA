import BaseIcon from "./BaseIcon";

function CircuitIcon(props) {
  return (
    <BaseIcon {...props}>
      {/* Chip */}
      <rect
        x="22"
        y="22"
        width="20"
        height="20"
        rx="4"
      />

      {/* Núcleo */}
      <rect
        x="28"
        y="28"
        width="8"
        height="8"
        rx="2"
      />

      {/* Pines superiores */}
      <line x1="26" y1="16" x2="26" y2="22" />
      <line x1="32" y1="16" x2="32" y2="22" />
      <line x1="38" y1="16" x2="38" y2="22" />

      {/* Pines inferiores */}
      <line x1="26" y1="42" x2="26" y2="48" />
      <line x1="32" y1="42" x2="32" y2="48" />
      <line x1="38" y1="42" x2="38" y2="48" />

      {/* Pines izquierdos */}
      <line x1="16" y1="26" x2="22" y2="26" />
      <line x1="16" y1="32" x2="22" y2="32" />
      <line x1="16" y1="38" x2="22" y2="38" />

      {/* Pines derechos */}
      <line x1="42" y1="26" x2="48" y2="26" />
      <line x1="42" y1="32" x2="48" y2="32" />
      <line x1="42" y1="38" x2="48" y2="38" />
    </BaseIcon>
  );
}

export default CircuitIcon;