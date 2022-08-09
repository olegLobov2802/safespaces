import { IconProps } from "./Icon.props";

export const ChatIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H17C19.4853 0.5 21.5 2.51472 21.5 5V11C21.5 13.4853 19.4853 15.5 17 15.5H11H6.0824C5.60694 15.5 5.14134 15.6356 4.74021 15.8908L1.26844 18.1002C0.935576 18.312 0.5 18.0729 0.5 17.6783V5Z"
        stroke="white"
      />
      <path d="M5 5H16" stroke="white" strokeLinecap="round" />
      <path d="M5 8H16" stroke="white" strokeLinecap="round" />
      <path d="M5 11H11" stroke="white" strokeLinecap="round" />
    </svg>
  );
};
