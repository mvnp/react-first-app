import React from 'react';
import "./Posts.css";

import Post from '../Post/Post';

const Posts = () => {
    const blogPosts = [
        {
            title: 'JAVASCRIPT',
            body: `JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side development.`,
            imageUrl: 'https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png',
            author: 'Marcos Pereira'
        },
        {
            title: 'TYPESCRIPT',
            body: `Typescript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side development.`,
            imageUrl: 'https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png',
            author: 'Marcos Pereira'
        },
        {
            title: 'PHP',
            body: `PHP is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side development.`,
            imageUrl: 'https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png',
            author: 'Marcos Pereira'
        },
        {
            title: 'CSHARP',
            body: `Csharp is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side development.`,
            imageUrl: 'https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png',
            author: 'Marcos Pereira'
        }
    ];

    return (
        <div className='posts-container'>
            {blogPosts.map((post, index) => (
                <Post key={index} index={index} post={post} />
            ))}
        </div>
    );
};

export default Posts;