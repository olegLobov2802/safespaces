import { IconProps } from "./Icon.props";

export const SearchIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      stroke="white"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="6.42851" cy="5.70854" r="5.20854" />
      <path d="M10.2342 9.51416L14.0399 13.3199" strokeLinecap="round" />
    </svg>
  );
};
