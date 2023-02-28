import React from "react";
import { DisplayChunk } from "./DisplayChunk";
import { isInfix } from "../helpers/type_helpers";

export function InterlinearMorphemeForm({
  morpheme,
  field,
  marks,
}: {
  morpheme: Morpheme;
  field: "spelling" | "ipa";
  marks?: bool
}) {
  return (
    <DisplayChunk
      morpheme={morpheme}
      key={JSON.stringify(morpheme)}
      field={field}
      marks={marks}
    >
      {morpheme.segments.map((segment) =>
        isInfix(segment) ? (
          <InterlinearMorphemeForm
            morpheme={segment} // Note change!
            key={JSON.stringify(segment)}
            field={field}
	    marks={marks}
          />
        ) : (
          segment[field]
        )
      )}
    </DisplayChunk>
  );
}
