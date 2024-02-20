import React, { ReactElement } from "react";
import { isInfix } from "../helpers/type_helpers";

export function PlainText({ text }: { text: Word[] }) {
  return (
    <span className="plain form">
      {text.map((word: Word, key) => (
        <PlainWord word={word} key={key} />
      ))}
    </span>
  );
}

const PlainWord = ({ word }: { word: Word }) => {
  return (
    <span className="plain word form">
      {word.map((morpheme, key) => (
        <PlainMorphemeForm morpheme={morpheme} key={key} />
      ))}{" "}
    </span>
  );
};

const PlainMorphemeForm = ({ morpheme }: { morpheme: Morpheme }) => {
  let segments = [] as ReactElement[];
  morpheme.segments.forEach((segment) => {
    if (isInfix(segment)) {
      segments = segments.concat(<PlainMorphemeForm morpheme={segment} />);
    } else {
      segments = segments.concat(<>{segment}</>);
    }
  });
  return <>{segments}</>;
};
