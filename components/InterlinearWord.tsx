import React from "react";
import { useContext } from "react";
import { DetailLevelContext } from "../components/DetailLevelContext";
import { InterlinearMorphemeForm } from "./InterlinearMorphemeForm";
import { InterlinearMorphemeGloss } from "./InterlinearMorphemeGloss";

export function InterlinearWord({ word }: { word: Word }) {
  const [detail, setDetail] = useContext(DetailLevelContext);
  return (
    <span className="interlinear word">
      <div className="interlinear form">
        {word.map((morpheme) => (
          <InterlinearMorphemeForm
            morpheme={morpheme}
            key={JSON.stringify(morpheme)}
            field="spelling"
          />
        ))}
      </div>
      {detail === true && (
        <div className="interlinear sound">
          {word.map((morpheme) => (
            <InterlinearMorphemeForm
              morpheme={morpheme}
              key={JSON.stringify(morpheme)}
              field="ipa"
            />
          ))}
        </div>
      )}
      {detail === true && (
        <div className="interlinear gloss">
          {word.map((morpheme) => (
            <InterlinearMorphemeGloss
              morpheme={morpheme}
              key={JSON.stringify(morpheme)}
            />
          ))}
        </div>
      )}
    </span>
  );
}
