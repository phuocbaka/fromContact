import React from 'react';
import './ContentStep04.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第4条（ポイントの付与）'
const input0 = '1. 当社は、ポイント付与対象取引を行ったID保有者に対し、ポイント付与条件に従いポイントを付与するものとします。'
const input1 = '2. ID保有者は、前項に基づき付与されたポイント数に疑義のある場合、自己が本サービス上でポイント付与対象取引の対象となるサービス・商品等の提供を受けた企業や店舗等（以下「本ポイント付与対象取引サービス提供企業」といいます）に直接問い合わせるものとします。ID保有者は、当該疑義についてID保有者と本ポイント付与対象取引サービス提供企業との間で解決するものとします。当社は、自己の故意や重過失によりID保有者に付与するポイント数を誤った場合を除き、一切の責任を負わないものとします。'
const input2 = '3. 本条第１項および前条第３項に従い当社がID保有者に対しポイントを付与した後でも、ID保有者の本規約違反やその他当社がポイントを付与することが不適切であると判断する事情が判明した場合、またはポイント付与対象取引が変更された場合等には、当社は当該ID保有者に対して付与済みのポイントの全部または一部を取消すことができるものとします。'
const input3 = '4. 当社が前項に基づき、ポイントの取消を行おうとする際に、ID保有者がすでに取消の対象となるポイントを利用している等の理由により取消可能なポイントが存在しない場合または不足する場合、当社はID保有者に対し、前項に基づき取消対象となるポイントのうち取消を行うことができなかったポイント相当額（１ポイント＝１円で換算するものとします）の金銭を請求することができるものとします。'


class ContentStep04 extends React.Component {
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

  export default ContentStep04;