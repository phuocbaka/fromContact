import React from 'react';
import './ContentStep09.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第9条（個人情報の取扱）'
const input0 = '1. 当社は、ID保有者のプライバシーを尊重し、ID保有者の皆様の個人情報の管理に細心の注意を払います。対象サービスの管理・運営に当たって、当社がID保有者から取得した個人情報は、別途定める「プライバシーポリシー」に従って取り扱うものとします。'
const input1 = '2. 当社は、ID保有者が対象サービスの利用を停止しまたは対象サービス独自の会員制度から退会等（理由は問いません）したとしても、ID保有者が別途当社が定める手続きに従いリクルートIDを抹消しない限り、ID保有者の個人情報を保有し利用し続けることができるものとし、ID保有者は、これを予め同意するものとします。'

class ContentStep09 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div>
            <div className="content-step09">
              <ReactMarkdown source={input0} />  
              <ReactMarkdown source={input1} />   
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep09;