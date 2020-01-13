import React from 'react';
import './ContentStep03.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第3条（ポイントサービス）'
const input0 = '1. 当社は、対象サービスの一環として、本サービスのうち当社が指定するサービスにおいて、当社所定の方法に従った利用行為（以下「ポイント付与対象取引」といいます）を行ったID保有者に対し当社所定の条件（以下「ポイント付与条件」といいます）に従いポイントを発行し、ID保有者がポイントを本サービスのうち当社が指定するサービスにおける当社所定の利用行為（以下「ポイント利用対象取引」といいます）を行うにあたり、当社所定の方法（以下「ポイント利用条件」といいます）に従い利用できるポイントサービスおよびこれらに付随するメール配信その他の各種情報提供サービス（以下「本ポイントサービス」といいます）を運営するものとします。'
const input1 = '2. ポイントの種類、ポイント付与対象取引、ポイント付与条件、ポイント利用対象取引、ポイント利用条件等の本ポイントサービスの内容（総称して、以下「ポイント条件」といいます）は、当社が自己の判断で[当社指定のページ](https://cmn.point.recruit.co.jp/terms/terms.html)で定めるものとします。'
const input2 = '3. 前項にかかわらず、当社はポイントを[当社指定のページ](https://cmn.point.recruit.co.jp/terms/terms.html)に記載される内容と異なるポイント条件で発行する場合があるものとし、この場合、ポイントの発行時にポイント条件を明示するものとします。なお、当社指定のページに記載される内容とID保有者に対し発行時に明示するポイント条件が異なる場合には、ID保有者に対し発行時に明示するポイント条件が優先するものとします。'


class ContentStep03 extends React.Component {
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
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep03;