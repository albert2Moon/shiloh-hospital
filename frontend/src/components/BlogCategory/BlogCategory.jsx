/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './BlogCategory.css';
import { blog_post_list } from '../../assets/assets';

const BlogCategory = ({ category, setCategory }) => {
    // Create a new array of unique categories and add "All" at the beginning
    const uniqueCategories = ["All", ...new Set(blog_post_list.map(item => item.category))];

    return (
        <div className="categories-container">

            <div className="container-title">
                <div className="title-dot"></div>
                <h3>Trending Articles</h3>
            </div>

            <div className="category-card">
                {uniqueCategories.map((uniqueCategory, index) => (
                    <div
                        onClick={() => setCategory(uniqueCategory)}
                        key={index}
                        className={`category-btn ${category === uniqueCategory ? "active" : ""}`}
                    >
                        <p>{uniqueCategory}</p>


                    </div>
                ))}
            </div>

        </div>
    );
}

export default BlogCategory;
