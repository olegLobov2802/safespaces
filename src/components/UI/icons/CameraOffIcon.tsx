import { IconProps } from "./Icon.props";

export const CameraOffIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="4.5" y="4.5" width="12.4583" height="12" rx="1.5" stroke="white" />
      <path
        d="M19.6679 7.9455L21.806 7.04526C22.1355 6.9065 22.5 7.14849 22.5 7.50608V13.4939C22.5 13.8515 22.1355 14.0935 21.806 13.9547L19.6679 13.0545C19.1117 12.8203 18.75 12.2756 18.75 11.672V9.32795C18.75 8.72444 19.1117 8.1797 19.6679 7.9455Z"
        stroke="white"
      />
      <path d="M19 3L3 19" stroke="#963030" strokeWidth="5" strokeLinecap="round" />
      <path d="M19 3L3 19" stroke="white" strokeLinecap="round" />
    </svg>
  );
};
