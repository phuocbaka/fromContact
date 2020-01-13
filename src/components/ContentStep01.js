import React from 'react';
import './ContentStep01.scss'
import './Titlebar.scss'
import './media.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第1条（規約の適用)'
const input0 = '1. リクルートID規約（以下「本規約」といいます）は、株式会社リクルート（以下「当社」といいます）または当社が提携する企業が提供する各種サービスのうち当社が指定するサービス（以下「本サービス」といいます。なお、現在の本サービスの対象は[当社指定のページ](https://cmn.point.recruit.co.jp/terms/terms.html)をご確認ください。）を利用する利用者（以下「利用者」といいます）およびID保有者（次条で定義するものとします）に対して適用されます。'
const input1 = '2. 本規約の内容は、ID保有者への事前の通知なしに必要に応じて変更することがありますので、本サービスをご利用の際には本サービス上に掲載されている最新の本規約をご確認下さい。'
const input2 = '3. 当社が前項に基づき本規約の内容変更を行った後、ID保有者が本サービスを利用した場合、当該ID保有者が本規約の変更を承諾したものとみなすものとします。'
const input3 = '4. 当社が本サービス上に掲載する諸注意等（以下｢諸注意等｣といいます）が存在する場合、諸注意等は本規約の一部を構成するものとします。'


class ContentStep01 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div>
            <div className="content-step01">
              <ReactMarkdown source={input0} />  
              <ReactMarkdown source={input1} />  
              <ReactMarkdown source={input2} />  
              <ReactMarkdown source={input3} />  
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep01;