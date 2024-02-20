import * as React from "react";
import { useState } from "react";
import { ColumnarWord } from "./ColumnarWord";
import { UserInteractionContext } from "./UserInteractionContext";

export function ColumnarText({
  text,
  fts,
  notes = [],
}: {
  text: Word[];
  fts: string[];
  notes: string[];
}) {
  const [activeMorpheme, setActiveMorpheme] = useState<Morpheme | null>(null);
  return (
    <UserInteractionContext.Provider
      value={[activeMorpheme, setActiveMorpheme]}
    >
      {text.map((word, i) => (
        <ColumnarWord
          word={word}
          ft={fts[i]}
          note={notes[i]}
          key={JSON.stringify(word)}
        />
      ))}
    </UserInteractionContext.Provider>
  );
}
