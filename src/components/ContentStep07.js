import React from 'react';
import './ContentStep07.scss'
import './Titlebar.scss'

import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第7条（不保証）'
const input0 = '1. 対象サービス上で提供される全ての情報（対象サービスとして、および対象サービス上に表示される、第三者が管理・運営するリンクサイト内に含まれる一切の情報等を含み、以下同様とします）に関する、有用性、適合性、完全性、正確性、安全性、合法性、最新性等'
const input1 = '2. ID保有者が対象サービス上において提供される情報を利用して第三者と交渉または予約、もしくは契約の申込または締結等を行う場合（ポイント付与対象取引、ポイント利用対象取引を行う場合を含みます）において、当該行為に関する一切'
const input2 = '3. 対象サービスおよび対象サービスを通じて入手できる商品、役務、情報等がID保有者の希望または期待を満たす適切なものであること'
const input3 = '4. 対象サービスの提供に不具合、エラーまたは障害が生じないこと'
const input4 = '5. 対象サービスに関連して送信される電子メール、ウェブコンテンツ等に、コンピュータウィルス等の有害なものが含まれていないこと'
const input5 = '6. 対象サービスの存続または同一性が維持されること'


class ContentStep07 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div >
            <div className="sub-tilt">当社は、対象サービスにおいて信頼できるサービスや情報をID保有者へ届けるべく努力をしていますが、次の各号について、一切保証しません。対象サービスの利用に際しては、ID保有者自身が、対象サービスおよび対象サービスにおいて提供される情報やサービスの有用性等を判断し、自身の責任でご利用下さい。</div>
            <div className="content-step07">  
              <ReactMarkdown source={input0} />  
              <ReactMarkdown source={input1} />  
              <ReactMarkdown source={input2} />  
              <ReactMarkdown source={input3} />  
              <ReactMarkdown source={input4} />  
              <ReactMarkdown source={input5} />  
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep07;