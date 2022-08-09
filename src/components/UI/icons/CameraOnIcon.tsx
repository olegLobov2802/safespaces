import { IconProps } from "./Icon.props";

export const CameraOnIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="19"
      height="13"
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0.5" y="0.5" width="12.4583" height="12" rx="1.5" stroke="white" />
      <path
        d="M14.75 5.32795C14.75 4.72444 15.1117 4.1797 15.6679 3.9455L17.806 3.04526C18.1355 2.9065 18.5 3.14849 18.5 3.50608V9.49392C18.5 9.85151 18.1355 10.0935 17.806 9.95474L15.6679 9.0545C15.1117 8.8203 14.75 8.27556 14.75 7.67205V5.32795Z"
        stroke="white"
      />
    </svg>
  );
};
