import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CommentBox from './components/CommentBox';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <CommentBox />,
  document.getElementById('cmnt-box')
);
