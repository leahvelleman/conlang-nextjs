import * as React from "react";
import { ColumnarText } from "./ColumnarText";

export function ReactPhonExample({
  fts = [""],
  note = "",
  content,
}: {
  fts: string[];
  note: string;
  content: object;
}) {
  return (
    <div className="example">
      <table className="columnar-text">
	<tbody>
        {<ColumnarText text={content as Word[]} fts={fts} />}
	</tbody>
      </table>
    </div>
  );
}
