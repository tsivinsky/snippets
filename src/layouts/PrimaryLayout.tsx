import React from "react";

import clsx from "clsx";

export type PrimaryLayoutProps = {
  className?: string;
  children?: React.ReactNode;
};

export const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
  className,
  children,
}) => {
  return (
    <div>
      <main className={clsx("m-4", className)}>{children}</main>
    </div>
  );
};
