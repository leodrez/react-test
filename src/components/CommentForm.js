import React, { Component } from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <lable>Join the discussion</lable>
        <div className="comment-form-fields">
          <input placeholder="Name:"/>
          <textarea placeholder="Comment:"></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
    );
  }
  
  _handleSubmit(event) {
    event.preventDefault();
  }
}

export default CommentForm;
