import React from "react";
import { InterlinearMorphemeForm } from "./InterlinearMorphemeForm";
import { InterlinearMorphemeGloss } from "./InterlinearMorphemeGloss";

export function ColumnarWord({
  word,
  ft,
  note,
}: {
  word: Word;
  ft: string;
  note: string;
}) {
  return (
    <tr className="columnar word">
      <td className="columnar form">
        {word.map((morpheme) => (
          <InterlinearMorphemeForm
            morpheme={morpheme}
            key={JSON.stringify(morpheme)}
            field="spelling"
          />
        ))}
      </td>
      <td className="columnar sound">
        <span className="ipa">[</span>
        {word.map((morpheme) => (
          <InterlinearMorphemeForm
            morpheme={morpheme}
            key={JSON.stringify(morpheme)}
            field="ipa"
            marks={false}
          />
        ))}
        <span className="ipa">]</span>
      </td>
      <td className="columnar ft">{ft}</td>
      <td
        className="columnar note"
        dangerouslySetInnerHTML={{
          __html: note,
        }}
      />
    </tr>
  );
}
