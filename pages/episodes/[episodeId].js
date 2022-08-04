import axios from "axios";

function Episode({ episode }) {
  console.log(episode);
  return (
    <div>
      <h1> Episode page</h1>
      <p>{episode.name}</p>
    </div>
  );
}

export default Episode;

//
export async function getStaticPaths() {
  const { data } =await axios.get("https://rickandmortyapi.com/api/episode");
  const paths = data.results.map((episode) => {
    return {
      // should be params key : [...] : string
      //params is object
      params: { episodeId: `${episode.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${params.episodeId}`
  );
  return {
    props: {
      episode: data,
    },
  };
}
