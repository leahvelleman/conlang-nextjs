import { stringify } from "querystring";
import React, { useContext } from "react";
import { ReactElement } from "react";
import { isInfix } from "../helpers/type_helpers";

import { UserInteractionContext } from "./UserInteractionContext";

export function DisplayChunk({
  morpheme,
  field,
  marks = true,
  children = [],
}: {
  morpheme: Morpheme;
  field: "spelling" | "gloss" | "ipa";
  marks?: bool;
  children?: (ReactElement | string)[];
}) {
  const [activeMorpheme, setActiveMorpheme] = useContext(
    UserInteractionContext
  );
  const [leftMark, rightMark] =
    field !== "spelling" ? getMarks(morpheme) : ["", ""];
  const active = morpheme === activeMorpheme;
  const getsPopup = field === "spelling" && active && morpheme.note;
  return (
    <div
      tabIndex={0}
      key={JSON.stringify([morpheme])}
      className={`chunk ${active ? "hover" : "plain"} ${field}`}
      onMouseEnter={() => setActiveMorpheme(morpheme)}
      onMouseLeave={() => setActiveMorpheme(null)}
    >
      {getsPopup && <Popup morpheme={morpheme} />}
      {marks && leftMark}
      {children}
      {marks && rightMark}
    </div>
  );
}

function Popup({ morpheme }: { morpheme: Morpheme }) {
  return (
    <div className="outer-popup">
      <div
        className="inner-popup"
        dangerouslySetInnerHTML={{
          __html:
            `<strong>${citationForm(morpheme)}</strong> ` +
            makeLinks(morpheme.note),
        }}
      />
    </div>
  );
}

function makeLinks(note: string) {
  return note.replace(/\[\[([^\]]*)\]\]/g, replacer);
}

function replacer(match: string, p1: string, offset: number, string: string) {
  return `<a href='/grammar#${slugify(p1)}'>${p1}</a>`;
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getMarks(morpheme: Morpheme) {
  let mark = "";
  switch (morpheme.kind) {
    case "infix":
      return ["⟨", "⟩"];
    case "affix":
      mark = "–";
      break;
    case "clitic":
      mark = "=";
      break;
    case "redup":
      mark = "~";
      break;
    case "root":
    default:
      return ["", ""];
  }
  return morpheme.side === "left" ? ["", mark] : [mark, ""];
}

function citationForm(morpheme: Morpheme) {
  const [left, right] = getMarks(morpheme);
  const segments = morpheme.segments
    .map((s) => (isInfix(s) ? "" : s.spelling))
    .join("");
  return left + segments + right;
}
