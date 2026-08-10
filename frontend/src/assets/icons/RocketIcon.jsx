import BaseIcon from "./BaseIcon";

function RocketIcon(props) {
  return (
    <BaseIcon {...props}>
      {/* Cuerpo */}
      <path d="M32 14C39 18 44 27 44 36L36 44C27 44 18 39 14 32L22 24C22 17 27 12 32 14Z" />

      {/* Ventana */}
      <circle
        cx="33"
        cy="25"
        r="2.8"
      />

      {/* Aletas */}
      <path d="M22 36L16 42L24 40" />
      <path d="M36 44L42 48L40 40" />

      {/* Fuego */}
      <path d="M24 40C24 46 28 50 32 52C36 50 40 46 40 40" />
    </BaseIcon>
  );
}

export default RocketIcon;