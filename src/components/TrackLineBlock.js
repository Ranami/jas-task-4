import React from "react";

export function TrackLineBlock({ track }) {
  return (
    <tr>
      <td>
        <div>
          <img
            src={track.image[2]["#text"]}
            alt="coverart"
            width="34px"
            height="34px"
          />
        </div>
      </td>
      <td className="title">{track.artist.name}</td>
      <td>{track.name}</td>
      <td>{track.playcount}</td>
      <td>
        <div className="button_link">
          <a href={track.url}>Shazam</a>
        </div>
      </td>
    </tr>
  );
}
