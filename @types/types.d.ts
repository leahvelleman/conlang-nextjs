type Side = "left" | "right";

interface State {
  clicked: boolean;
  hover: boolean;
  index: string;
}
interface Root {
  kind: "root";
  segments: Segment[];
  gloss: string;
  state?: State;
  note?: string;
  // no side
}

interface Outfix {
  kind: "affix" | "clitic" | "redup";
  segments: Segment[];
  gloss: string;
  side: Side;
  state?: State;
  note?: string;
}

interface Infix {
  kind: "infix";
  segments: Segment[];
  gloss: string;
  side: Side;
  state?: State;
  note?: string;
}

interface Nothing {
  kind: "nothing";
  segments: Segment[];
  gloss: string;
  state?: State;
  note?: string;
}

interface Sounds {
  kind: "sounds";
  spelling: string;
  ipa: string;
}

type Morpheme = Root | Outfix | Infix | Nothing;
type Segment = Infix | Sounds;
type Word = Morpheme[];
