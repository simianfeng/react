import React from 'react';

const BlogList=props=>{
    return <div>
        <h1 className="Name">Simon Feng's Blog</h1>
        <u1 className="blog-list">
            {props.blogs.map(blogs=>{
                return <li>{blogs}</li>;
            })}
        </u1>
    </div>
}

export default BlogList;