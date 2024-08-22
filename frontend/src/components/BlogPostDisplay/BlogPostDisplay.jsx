/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './BlogPostDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import BlogPost from '../BlogPost/BlogPost'

const BlogPostDisplay = ({ category }) => {

    const { blog_post_list } = useContext(StoreContext);

    return (
        <>
            <div className='post-display' id='post-display'>
                <div className="post-display-list">
                    {blog_post_list.map((item, index) => {

                        if (category === "All" || category === item.category) {
                            return <BlogPost key={index} image={item.image} category={item.category} date={item.date} title={item.title} description={item.description} content={item.content} author_image={item.author_image} author_name={item.author_name} />
                        }
                    })}
                </div>
                <div className="post-display-btn">
                    <button>Load More</button>
                </div>
            </div>
        </>
    )
}

export default BlogPostDisplay
