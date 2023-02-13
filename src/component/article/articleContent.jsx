import React from 'react'
import { CgCross } from 'react-icons/cg'

const ArticleContent = ({img,content,title}) => {
  return (
    <div className='w-full h-full'>
        <div>
            <CgCross/>
        </div>
       <div>
        <img src={img} alt="" />
            <h2>
            {title}
            </h2>
       </div>
       <div>
        <p>{content}</p>
       </div>
    </div>
  )
}

export default ArticleContent
