import * as React from "react";
import { useState } from "react";
import { InterlinearWord } from "./InterlinearWord";
import { UserInteractionContext } from "./UserInteractionContext";

export function InterlinearText({ text }: { text: Word[] }) {
  const [activeMorpheme, setActiveMorpheme] = useState<Morpheme | null>(null);
  return (
    <UserInteractionContext.Provider
      value={[activeMorpheme, setActiveMorpheme]}
    >
      {text.map((word) => (
        <InterlinearWord word={word} key={JSON.stringify(word)} />
      ))}
    </UserInteractionContext.Provider>
  );
}
