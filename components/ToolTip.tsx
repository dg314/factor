import { FC, ReactNode, useRef } from "react";

type ToolTipProps = {
  children: ReactNode;
  tooltip?: string;
}

export default function ToolTip(props: ToolTipProps) {
  const { children, tooltip } = props;

  return (
    <div className="group relative inline-block cursor-help">
      {children}
      {tooltip ? (
        <span
          className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full invisible group-hover:visible bg-neutral-800 dark:bg-neutral-300 text-white dark:text-black px-2 py-1 text-xs rounded-md whitespace-nowrap"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};