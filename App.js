import React, {useState} from 'react';
import './App.css';
import BlogList from './BlogList';
import NewBlogs from './NewBlogs';

const App =()=>{
    const [BlogContent, setBlogContent]= useState([]);

    const AddNewBlogHandler=(NewBlogs)=>{
        setBlogContent((prevBlogContent)=>{
            return prevBlogContent.concat(NewBlogs);
        });
    }

return <div>
    <BlogList blogs={BlogContent}/>
    <NewBlogs OnAddBlog={AddNewBlogHandler} />
    </div>
};

export default App;