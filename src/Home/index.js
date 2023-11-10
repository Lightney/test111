import React, { useState } from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [posts, setPosts] = useState([])

    const onChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSave = (event) => {
        setPosts([...posts, {id: Math.random(), text: inputValue}])
    }

    const onDelete = (id) => {
        const newPosts = posts.filter((post) => post.id !== id)  
        setPosts(newPosts)      
    }

    console.log(posts)

    return <div>
        <div className="input-wrapper">
            <input onChange={onChange} type='text' />
            <button onClick={onSave}>Сохранить пост</button>
        </div>

        { 
        posts.map((post) => {
            return <h2 key={post?.id}>{post?.text} <span onClick={() => onDelete(post?.id)}>x</span></h2>
        })
        }
    </div>
}

export default Home