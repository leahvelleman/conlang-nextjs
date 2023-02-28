import React, { ReactElement } from "react";

export function Spelling({ children }: { children: ReactElement }) {
  return (
    <span className="spelling">
      {children}
    </span>
  );
}
