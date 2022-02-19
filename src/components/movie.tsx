interface Props {
  movie: any;
}

export default function Movie({ movie }: Props) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
        alt="hello there"
      />
    </div>
  );
}
