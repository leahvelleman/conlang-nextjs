import * as React from "react";

import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { DetailLevelContext } from "../components/DetailLevelContext";
import { InterlinearText } from "./InterlinearText";

export function ReactExample({
  ft,
  note = "",
  content,
}: {
  ft: string;
  note: string;
  content: object;
}) {
  return (
    <>
      <div className="example">
        <div className="interlinear-text">
          {<InterlinearText text={content as Word[]} />}
        </div>
        <div className="free-translation" style={{ float: "left" }}>
          <i>{ft}</i>
        </div>
        {note && (
          <div className="note" style={{ float: "right" }}>
            {note}
          </div>
        )}
        <div style={{ clear: "both" }} />
      </div>
    </>
  );
}
