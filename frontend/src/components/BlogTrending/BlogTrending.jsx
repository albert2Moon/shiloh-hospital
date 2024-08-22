/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import './BlogTrending.css'
import { blog_post_list } from '../../assets/assets';

const BlogTrending = () => {
    return (
        <div>
            <div className="container-title">
                <div className="title-dot"></div>
                <h3>Trending Articles</h3>
            </div>

            <div className="top-post-container">
                {blog_post_list.slice(0, 6).map((post, index) => (
                    <Link to={`/blog/${index}`} key={index} className="top-post-card">
                        <div className="rank">
                            <h1>{index + 1}</h1>
                        </div>
                        <div className="top-card-details">
                            <h3>{post.title}</h3>
                            <div className="blog-post-category">
                        <div className="dot"></div>
                        <p>{post.category}</p>
                    </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BlogTrending
