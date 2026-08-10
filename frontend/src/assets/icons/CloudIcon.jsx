import BaseIcon from "./BaseIcon";

function CloudIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M22 42H46C50.4 42 54 38.4 54 34C54 29.9 50.9 26.5 46.9 26.1C45.8 20.9 41.2 17 35.7 17C30.7 17 26.5 20.2 24.9 24.8C19.9 25.1 16 29.2 16 34.2C16 38.6 19.6 42 24 42H22Z" />

      <line
        x1="28"
        y1="48"
        x2="28"
        y2="54"
      />

      <line
        x1="36"
        y1="48"
        x2="36"
        y2="54"
      />

      <line
        x1="44"
        y1="48"
        x2="44"
        y2="54"
      />
    </BaseIcon>
  );
}

export default CloudIcon;