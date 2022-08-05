import React from "react";
import axios from "axios";
function Category({blogs , category}) {
    console.log(blogs)
  return (
    <div>
      <h1>Category : {category}</h1>
      {blogs.map(blog=>{
        return <div key={blog.id}>
                <p>{blog.title} - {blog.category}</p>
        </div>
      })}
    </div>
  );
}

export default Category;

export async function getServerSideProps(context){
    const {params}=context;
    const {category}=params;
    const {data} = await axios.get(`http://localhost:4000/blogs?category=${category}`)
    return{
        props:{
            blogs:data,
            category
        },
    }

}
