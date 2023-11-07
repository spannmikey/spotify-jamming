import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Playlist from "./components/Playlist"
import Tracklist from "./components/Tracklist"
import Track from "./components/Track"
import SaveButton from "./components/SaveButton"

const App = () => {
	return (
		<main className="bg-slate-900 min-h-screen text-white">
			<SearchBar />
			<SearchResults />
			<Playlist />
			<Tracklist />
			<Track />
			<SaveButton />
		</main>
	)
}

export default App
