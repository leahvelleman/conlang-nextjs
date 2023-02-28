import { createContext } from "react";

type maybeMorpheme = Morpheme | null;

type UserInteractionContextType = [maybeMorpheme, (m: maybeMorpheme) => void];

export const UserInteractionContext = createContext<UserInteractionContextType>(
  [null, (m: maybeMorpheme) => {}]
);
