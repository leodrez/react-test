import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  
  constructor() {
    super();
    
    this.state = {
      showComments: false,
      comments: [
        { id: 1, name: 'Leonardo', body: 'Bad writer' },
        { id: 2, name: 'Ariana', body: 'Good writer' },
        { id: 3, name: 'Liszt', body: 'Master' }
      ]
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
        <CommentForm addComment={this._addComment.bind(this)} />
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
    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment.id} />
      );
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

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body 
    }; 
    this.setState({ comments: this.state.comments.concat([comment]) });
  }
}

export default CommentBox;
