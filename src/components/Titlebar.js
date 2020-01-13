import React from 'react';
import './Titlebar.scss'
import './media.scss'
import ReactMarkdown from 'react-markdown';

const input = '### 第1条（規約の適用)'


class Title extends React.Component {
    render() {
      return (
        <div className="til-bar">
          <ReactMarkdown source={input} />   
        </div>
      );
    }
  }

  export default Title;