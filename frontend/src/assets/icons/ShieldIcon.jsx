import BaseIcon from "./BaseIcon";

function ShieldIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M32 12L46 18V29C46 39 39.8 47.4 32 52C24.2 47.4 18 39 18 29V18L32 12Z" />

      <path d="M26 32L30 36L38 27" />
    </BaseIcon>
  );
}

export default ShieldIcon;