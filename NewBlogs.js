import React, {useState} from 'react';

const NewBlogs =(props)=>{
    const [enteredText, SetEnteredText]= useState('');

    const NewBlog={text:enteredText};

    const AddBlogHandler=event=>{
        event.preventDefault();
        SetEnteredText('');
        props.OnAddBlog(NewBlog);
    };

    const TextChangeHandler=event=>{
        SetEnteredText(event.target.value);
    }

    return <form className='new-blog' onSubmit={AddBlogHandler}>
        <input type="text" value={enteredText} onChange={TextChangeHandler} />
        <button type="submit">Add Blog</button>
    </form>

};

export default NewBlogs;