import axios from "axios";
import Link from "next/link";

function BlogList({blogs}) {
  return (
    <div>
        <h1>BlogList</h1>
        {blogs.map(blogs=>{
            return <div key={blogs.id}>
                <Link href={`/blogs/${blogs.id}`}>
                    <a>{blogs.title} - {blogs.category}</a>
                </Link>
                <hr/>
            </div>
        })}
       
    </div>
  )
}

export default BlogList;

export async function getServerSideProps(){
    const {data} = await axios.get("http://localhost:4000/blogs")
    return{
        props:{
            blogs:data
        },
    }
}
