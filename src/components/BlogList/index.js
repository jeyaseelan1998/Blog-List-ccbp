import React from 'react'
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = ({blogsList}) => {
  return (
    <ul className='blogs-list-container'>
      {
        blogsList.map(eachBlog => <BlogItem key={eachBlog.id} blogDetails={eachBlog}/>)
      }
    </ul>
  )
}

export default BlogList