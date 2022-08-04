import axios from "axios";
import Link from "next/link";

function EpisodeList({episodes}) {
    console.log(episodes)
  return (
    <div>
        <h1>EpisodeList</h1>
        {episodes.results.map(episode=>{
            return <div key={episode.id}>
                <Link href={`/episode/${episode.id}`}>
                    <a>{episode.episode}</a>
                </Link>
                <hr/>
            </div>
        })}
       
    </div>
  )
}

export default EpisodeList;

export async function getStaticProps(){
    const {data} = await axios.get("https://rickandmortyapi.com/api/episode")
    return{
        props:{
            episodes:data,
        },
    }
}
