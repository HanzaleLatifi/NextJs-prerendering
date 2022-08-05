import axios from "axios"
import useSWR from 'swr'

async function fetcher(url){
    const {data}=await axios.get(url)
    return data
}

function profile() {
    const { data, error } = useSWR('getUser',()=> fetcher('http://localhost:4000/profile'))
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  return (
    <div>
        <h1>Profile Page</h1>
        <h2>name:{data.name}</h2>

    </div>  
  )
}

export default profile