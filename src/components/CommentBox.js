import React, { Component } from 'react';
import Comment from './Comment';

class CommentBox extends Component {
  
  constructor() {
    super();
    
    this.state = {
      showComments: false
    };
  }

  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show comments';
  
    if (this.state.showComments) {
      buttonText = 'Hide comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return(
      <div className="comment-box">
        <h4 className="h4">{this._getCommentsTitle(comments.length)}</h4>
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {commentNodes}
      </div>
    );
  }
  
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
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
