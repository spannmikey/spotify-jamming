import { useEffect } from "react";

const ACCESS_TOKEN =
	"BQApgPZhdhio2aq-gHJASQ4jgDm1Ie9fIufsG7Psr01sperpwooIvjCVm4iO7wBbNnBxdFo3dJHPP47IHMCkhrKhSXmOYLYeeju-qVoNKmPGkhUTp2c";

const App = () => {
	const getSongs = async () => {
		const url = `https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track`;
		// const body = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${ACCESS_TOKEN}`,
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			// Handle the response data here
			console.log(data);
		} catch (error) {
			// Handle any errors that occur during the fetch request
			console.error(error);
		}
	}

	useEffect(() => {
		getSongs();
	}, []);

	return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default App;
