
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { useState } from 'react';
import Spinner from './component/Spinner';
import Songs from './component/Songs';
import Song from './component/Song';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(false)
  const [songs, setSongs] = useState([])
  const [particularSong, setParticularSong] = useState({})
  const fetchSongDetail = async (songSearch) => {
    setLoading(true)
    const data = await fetch(`https://api.happi.dev/v1/music?q=${songSearch}&limit=10&lyrics=true`, {
      headers: {
        "x-happi-key": "43e2b1aMLGOkeEdyTtrIFBPluAkTKsxbslqh1vpD16aKmdZi8ZTHJvCo"
      }
    })
    const parsedData = await data.json()
    setSongs(parsedData.result)
    setLoading(false)

  }


  const fetchSong = async (url) => {
    setLoading(true)
    const data = await fetch(`${url}`, {
      headers: {
        "x-happi-key": "43e2b1aMLGOkeEdyTtrIFBPluAkTKsxbslqh1vpD16aKmdZi8ZTHJvCo"
      }
    })
    const parsedData = await data.json()
    setParticularSong(parsedData.result)
    setLoading(false)
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home fetchSongDetail={fetchSongDetail} />
        </Route>
        <Route exact path='/songs'>
          {loading ? <Spinner /> : ""}
          {!songs ? "" :
            <Songs songs={songs} fetchSong={fetchSong} />
          }
        </Route>
        <Route exact path='/song'>
        {loading ? <Spinner /> : ""}
        {!particularSong ? "" :
          <Song particularSong={particularSong} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
