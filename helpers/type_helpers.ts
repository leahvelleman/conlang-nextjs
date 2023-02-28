export function isInfix(segment: Segment): segment is Infix {
  return (segment as Infix).kind === "infix";
}

export function isNothing(morpheme: Morpheme): morpheme is Nothing {
  return (morpheme as Nothing).kind === "nothing";
}
