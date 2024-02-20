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
      <div className="interlinear example">
        <div className="interlinear text">
          {<InterlinearText text={content as Word[]} />}
        </div>
        <div className="interlinear ft" style={{ float: "left" }}>
          {ft}
        </div>
        {note && (
          <div className="interlinear note" style={{ float: "right" }}>
            {note}
          </div>
        )}
        <div style={{ clear: "both" }} />
      </div>
    </>
  );
}
