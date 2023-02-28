import * as React from "react";
import { DisplayChunk } from "./DisplayChunk";
import { isInfix } from "../helpers/type_helpers";

export function InterlinearMorphemeGloss({ morpheme }: { morpheme: Morpheme }) {
  const infixes = morpheme.segments.map((s) => recursivelyGetInfixes(s)).flat();
  const leftInfixes = infixes.filter((i) => i.side === "left") as Morpheme[];
  const rightInfixes = infixes.filter((i) => i.side === "right") as Morpheme[];
  const everything = leftInfixes.concat(morpheme).concat(rightInfixes);
  return (
    <>
      {everything.map((m) => (
        <DisplayChunk morpheme={m} key={JSON.stringify(m)} field="gloss">
          {[m.gloss]}
        </DisplayChunk>
      ))}
    </>
  );
}

function recursivelyGetInfixes(segment: Segment): Infix[] {
  if (isInfix(segment)) {
    return [segment].concat(
      ...segment.segments.map((m) => recursivelyGetInfixes(m))
    );
  } else {
    return [];
  }
}
