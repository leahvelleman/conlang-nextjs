import * as React from "react";
import { ColumnarText } from "./ColumnarText";

export function ReactPhonExample({
  fts = [""],
  notes = [""],
  content,
}: {
  fts: string[];
  notes: string[];
  content: object;
}) {
  return (
    <div className="columnar example">
      <table className="columnar layout">
        <tbody>
          <ColumnarText text={content as Word[]} fts={fts} notes={notes} />
        </tbody>
      </table>
    </div>
  );
}
