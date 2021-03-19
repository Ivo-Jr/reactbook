import React from 'react';
import p1 from '../../assets/p1.png'
import './styles.css'
import Comment from '../Comment';


export default function Post() {
  return(
      <div className="post">

          <div className="comment">
              <img className="avatar" src={p1} alt="p1"/>
              <div className="postData">
                  <span className="author">Elon Musk</span>
                  <span className="date">17 March 2021</span>
              </div>
          </div>

            <div className="postContent">
                <p>Olá meu povo!</p>
            </div>

            <hr/>
            
            <Comment />
      </div>
    )
}
