import { useState, useEffect } from "react";
import "./App.css";
import { fetchTopTracks } from "./fetchers/fetchTopTracks";
import { TrackTable } from "./components/TrackTable";

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchTopTracks().then((data) => setTracks(data.toptracks.track));
  }, []);

  return (
    <div className="App">
      <TrackTable tracks={tracks} />
    </div>
  );
}

export default App;
