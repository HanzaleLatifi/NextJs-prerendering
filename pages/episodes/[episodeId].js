import axios from "axios";
import { useRouter } from "next/router";

function Episode({ episode }) {
  const router=useRouter();
  if(router.isFallback){
    return <div>loading...</div>
  }
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
  // const { data } =await axios.get("https://rickandmortyapi.com/api/episode");
  // const paths = data.results.map((episode) => {
  //   return {
  //     params: { episodeId: `${episode.id}` },
  //   };
  // });
  return {
    paths:[
      {params:{episodeId:"1"}},
      {params:{episodeId:"2"}},
      {params:{episodeId:"3"}},
    ],
    fallback: true,
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
