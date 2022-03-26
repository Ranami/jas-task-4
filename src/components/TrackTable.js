import React from "react";
import { TrackLineBlock } from "./TrackLineBlock";

export function TrackTable({ tracks }) {
  return (
    <table>
      <tbody>
        <tr>
          <th className="coverart"></th>
          <th className="column_title">ПЕСНЯ</th>
          <th className="column_title">АРТИСТ</th>
          <th className="column_title">КОЛИЧЕСТВО ПРОСЛУШИВАНИЙ</th>
          <th className="column_title"></th>
        </tr>
        {tracks.map((track, index) => (
          <TrackLineBlock key={index} track={track} />
        ))}
      </tbody>
    </table>
  );
}
