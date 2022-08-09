import React from "react";
import { IconProps } from "../icons/Icon.props";

export const Star = ({ className }: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      stroke="#FFD362"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.3523 1.08156C10.502 0.620904 11.1537 0.620905 11.3034 1.08156L12.9768 6.23186C13.1776 6.8499 13.7535 7.26834 14.4034 7.26834H19.8187C20.3031 7.26834 20.5045 7.88814 20.1126 8.17284L15.7315 11.3559C15.2058 11.7379 14.9858 12.4149 15.1866 13.033L16.86 18.1833C17.0097 18.6439 16.4825 19.027 16.0906 18.7423L11.7095 15.5592C11.1838 15.1772 10.4719 15.1772 9.94616 15.5592L5.56505 18.7423C5.1732 19.027 4.64596 18.6439 4.79563 18.1833L6.46907 13.033C6.66988 12.4149 6.44989 11.7379 5.92416 11.3559L1.54305 8.17284C1.15119 7.88814 1.35258 7.26834 1.83694 7.26834H7.25229C7.90213 7.26834 8.47807 6.8499 8.67888 6.23186L10.3523 1.08156Z" />
    </svg>
  );
};