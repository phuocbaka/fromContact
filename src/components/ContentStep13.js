import React from 'react';
import './ContentStep13.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第13条（権利義務の譲渡禁止）'


class ContentStep13 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div >
            <div className="sub-tilt">
            ID保有者は、対象サービスに関するID保有者としての地位および当該地位に基づく権利義務を、
            当社が予め承諾した場合を除き、第三者に譲渡しまたは担保に供してはならないものとします。
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep13;