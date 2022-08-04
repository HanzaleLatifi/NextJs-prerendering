import axios from "axios";

function UserList({users}) {
    console.log(users)
  return (
    <div>
        <h1>UserList</h1>
        {users.results.map(user=>{
            return <div key={user.id}>{user.id}-{user.name}</div>
        })}
       
    </div>
  )
}

export default UserList;

export async function getStaticProps(){
    const {data}=await axios.get("https://rickandmortyapi.com/api/character");
    return{
        props:{
            users:data,
        },
    }
}
