import React from 'react';
import user from '../../assets/user.png';
import PropTypes from 'prop-types';

import './styles.css'

export default function Comment({ author, content, url }) {

  return (
    <div className="comment">

      <img className="avatar" src={author.avatar} alt="p2"/>
      <div className="commentContent">
        <span className="nameAuthor">{author.name}</span>
        <span style={{fontFamily: 'Helvetica'}}> {content}</span>
         <a href={url} target="_blank" style={{fontFamily: 'Helvetica'}}>{url}</a> 
      </div>

    </div>
  )
}

Comment.defaultProps = {
  author: {
      avatar: user,
      name: 'user',
  },
  content: 'My comment'
}

Comment.propTypes = {
  author: PropTypes.object,
  content: PropTypes.string
}