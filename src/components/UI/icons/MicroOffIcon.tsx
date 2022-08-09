import { IconProps } from "./Icon.props";

export const MicroOffIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="6.92859" y="2.5" width="7.57143" height="12.5714" rx="3.78571" stroke="white" />
      <path d="M10.5 17V19.5" stroke="white" strokeLinecap="round" />
      <path d="M8 20L13 20" stroke="white" strokeLinecap="round" />
      <path
        d="M16.4286 11.2856V11.2856C16.4286 14.4416 13.8702 16.9999 10.7143 16.9999V16.9999C7.55837 16.9999 5 14.4416 5 11.2856V11.2856"
        stroke="white"
        strokeLinecap="round"
      />
      <path d="M19 3L3 19" stroke="#963030" strokeWidth="5" strokeLinecap="round" />
      <path d="M19 3L3 19" stroke="white" strokeLinecap="round" />
    </svg>
  );
};
