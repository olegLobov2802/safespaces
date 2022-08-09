import { IconProps } from "./Icon.props";

export const OptionsIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="5"
      height="23"
      viewBox="0 0 5 23"
      fill="#D9D9D9"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="2.5" cy="2.5" r="2.5" />
      <circle cx="2.5" cy="11.5" r="2.5" />
      <circle cx="2.5" cy="20.5" r="2.5" />
    </svg>
  );
};
