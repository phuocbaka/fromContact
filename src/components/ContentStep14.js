import React from 'react';
import './ContentStep14.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第14条（準拠法および管轄）'

class ContentStep14 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div >
            <div className="sub-tilt">
            本規約は日本法に基づいて解釈され、
            本規約に関する紛争の第一審の専属的合意管轄裁判所は、東京地方裁判所または東京簡易裁判所とします。
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep14;