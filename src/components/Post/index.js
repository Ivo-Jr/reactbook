import React from 'react';
import Comment from '../Comment';
import PropTypes from 'prop-types';
import user from '../../assets/user.png';

import './styles.css'

export default function Post({author, date, content, coments }) {
  return(
      <div className="post">

          <div className="comment">
              <img className="avatar" src={author.avatar} alt="p1"/>
              <div className="postData">
                  <span className="author">{author.name}</span>
                  <span className="date">{date}</span>
              </div>
          </div>

            <div className="postContent">
                <p>{content}</p>
            </div>

            <hr/>
            
            <ul>
                {coments.map(comment => 
                    <Comment 
                        key={comment.id}
                        author={comment.author}
                        content={comment.content}
                        url={comment.url}
                    />
                )}

            </ul>

      </div>
    )
}


Post.defaultProps = {
    author: {
        avatar: user,
        name: 'user',
    },
    date: '17 Mar 2021',
    content: 'My post'
}

Post.propTypes = {
    author: PropTypes.object,
    date: PropTypes.string,
    content: PropTypes.string,
    coments: PropTypes.array
}