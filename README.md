API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=0e9363d08153bcdb6bd9f170e1770159"
API_IMG = "https://api.themoviedb.org/3/movie/{movie_id}/images"
API_SEARCH = "https://api.themoviedb.org/3/search/multi"

// const [trending, setTrending] = useState([]);

// useEffect(() => {
// getTrending();
// }, []);

// const getTrending = async () => {
// try {
// const api = await fetch(
// `https://api.themoviedb.org/3/movie/popular?api_key=0e9363d08153bcdb6bd9f170e1770159`
// );
// const data = await api.json();
// if (data.results && Array.isArray(data.results)) {
// setTrending(data.results);
// console.log(data.results);
// } else {
// console.log('Invalid data structure:', data);
// }
// } catch (error) {
// console.log('Error fetching trending movies:', error);
// }
// };

// return (
// <>
// <div>
// <h2>Trending</h2>
// <div>
// {trending.map((result) => (
// <Carousel key={result.id}
// option={{
  //             axis:'horizontal'
  //           }}>
// <img src={result.poster_path} alt={result.title} />
// {/_ <p key={result.id}>{result.title}</p> _/}
// </Carousel>

// ))}
// </div>
// </div>
// </>
// );

const [hero, setHero] = useState([]);
const ApiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=0e9363d08153bcdb6bd9f170e1770159";

useEffect(() => {
fetch(ApiUrl)
.then(response => response.json())
.then(data => {
console.log(data)
setHero(data.results);
})
}, []);
