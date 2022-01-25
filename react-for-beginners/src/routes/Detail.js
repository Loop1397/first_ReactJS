import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(current => !current);
    };
    // console.log(movie);
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={movie.medium_cover_image}></img>
                    <h1>title : {movie.title}</h1>
                    <p>genre : {movie.genres}</p>
                    <p>description : {movie.description_full}</p>
                </div>
            )}
        </div>
    );
}

export default Detail;
