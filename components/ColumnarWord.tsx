import React from "react";
import { InterlinearMorphemeForm } from "./InterlinearMorphemeForm";
import { InterlinearMorphemeGloss } from "./InterlinearMorphemeGloss";

export function ColumnarWord({ word, ft }: { word: Word, ft: string }) {
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
        [{word.map((morpheme) => (
          <InterlinearMorphemeForm
            morpheme={morpheme}
            key={JSON.stringify(morpheme)}
            field="ipa"
	    marks={false}
          />
        ))}]
      </td>
      <td className="columnar ft">
        {ft}
      </td>
    </tr>
  );
}
