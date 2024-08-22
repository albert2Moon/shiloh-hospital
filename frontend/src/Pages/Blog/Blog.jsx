/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Blog.css'
import BlogHeader from '../../components/BlogHeader/BlogHeader'
import BlogCategory from '../../components/BlogCategory/BlogCategory'
import BlogPostDisplay from '../../components/BlogPostDisplay/BlogPostDisplay'
import BlogTrending from '../../components/BlogTrending/BlogTrending'

const Blog = () => {

  const [category, setCategory] = useState("All");

  return (
    <>
      <div>
        <BlogHeader />
      </div>

      <div className="blog-container">

        <div className="blog-category">
          <BlogCategory category={category} setCategory={setCategory} />
        </div>
        <div className="blog-posts">
          <div className="container-title">
            <div className="title-dot"></div>
            <h3>Latest Articles</h3>
          </div>
          <BlogPostDisplay category={category} />
        </div>
        <div className="blog-trending">
          <BlogTrending category={category} setCategory={setCategory}/>
        </div>

      </div>

    </>
  )
}

export default Blog
