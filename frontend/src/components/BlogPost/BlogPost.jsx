/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './BlogPost.css'

const BlogPost = ({ image, category, date, title, description, content, author_image, author_name }) => {
    return (
        <div className='blog-post-item'>
            <div className="blog-post-img-container">
                <img className='blog-post-image' src={image} alt="" />
            </div>

            <div className="blog-post-details">
                <div className="blog-post-item-info">
                    <div className="blog-post-category">
                        <div className="dot"></div>
                        <p>{category}</p>
                    </div>
                    <p><i className="fa-regular fa-calendar-days"></i> {date}</p>
                </div>

                <h3 className="blog-post-item-title">{title}</h3>

                <p className="blog-post-item-desc">{description}</p>

            </div>

            <div className="blog-post-bottom">
                <div className="author-container">
                    <div className="author-image">
                        <img src={author_image} alt={title} />
                    </div>
                    <div className="author-name">
                        <p>{author_name}</p>
                    </div>
                </div>

                <div className="blog-post-comments">
                    <p>0 Comment</p>
                </div>
            </div>

        </div>
    )
}

export default BlogPost
