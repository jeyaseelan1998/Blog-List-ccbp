// Write your JS code here
import React from 'react'
import './index.css'

const BlogItem = ({ blogDetails }) => {
  const { title, description, publishedDate } = blogDetails
  return (
    <li className='blog-item-container'>
      <div>
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p className='blog-description'>{description}</p>
      <hr className='separator' />
    </li>
  )
}

export default BlogItem