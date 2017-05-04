import React, { Component } from 'react';
import Comment from './Comment';

class CommentBox extends Component {
  render() {
    const comments = this._getComments();

    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }
  
  _getComments() {
    const commentList = [
      { id: 1, name: 'Leonardo', body: 'Bad writer' },
      { id: 2, name: 'Ariana', body: 'Good writer' },
      { id: 3, name: 'Liszt', body: 'Master' }
    ];
    
    return commentList.map((comment) => {
      return(
        <Comment
          name={comment.name} body={comment.body} key={comment.id} />
      ) 
    });
  }
  
  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }
}

export default CommentBox;
