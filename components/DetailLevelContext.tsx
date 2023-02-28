import { createContext } from "react";

type DetailLevelContextType = [boolean, (p: boolean) => void];

export const DetailLevelContext = createContext<DetailLevelContextType>([
  false,
  (p: boolean) => {},
]);
