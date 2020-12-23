import React from 'react';
import faker from 'faker'

const CommentDetail = props => {
    return(
        <div className="comments">
          <a href="/" className="avatar">
            <img src={faker.image.avatar()} />
          </a>
          <div className="content">
            <a href="/"calssName="author">
              {props.author}
            </a>
            <div className="metadata">
              <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.content}</div>
          </div>
        </div>
    
    );
};

export default CommentDetail;