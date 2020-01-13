import React from 'react';
import './ContentStep10.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第10条（属性情報・行動履歴の取得及び利用）'
const input0 = '1. 当社は、ID保有者により対象サービスの利用を通じて提供された年齢や性別、職業、居住地域等の属性情報および対象サービスにおけるID保有者の行動履歴を取得し、対象サービスの提供に必要な範囲で利用すること、および本契約の有効期間にかかわらず当該属性情報・当該行動履歴に基づき作成された統計データについて、何らの制限なく利用することができることに、ID保有者は予め承諾します。なお、当社は、法律上の根拠に基づき要求された場合およびID保有者の同意を得た場合を除き、ID保有者個人を特定できる情報を第三者に開示しないものとします。'
const input1 = '2. 当社は、ID保有者がリクルートIDを用いて対象サービスにログインしこれを利用した場合、個人を特定したうえで、これまでに取得した属性情報および行動履歴（本規約への同意の前に取得された情報であると後に取得された情報であるとを問いません）を用いて、広告等の配信・表示および本サービスの提供を行うことができるものとし、ID保有者はこれを予め承諾します。'

class ContentStep10 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div>
            <div className="content-step10">
              <ReactMarkdown source={input0} />  
              <ReactMarkdown source={input1} />   
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep10;