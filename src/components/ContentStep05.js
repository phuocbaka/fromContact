import React from 'react';
import './ContentStep05.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第5条（ポイントの利用）'
const input0 = '1. ID保有者は、自己が保有するポイントを、ポイント利用条件に従いポイント利用対象取引の全部または一部の支払いに利用できるものとします。（ID保有者が保有するポイントを利用した企業や店舗等を以下「本ポイント利用先企業」といいます'
const input1 = '2. ID保有者が、前項に基づきポイントの利用申請を当社に対して行った後に、当該利用が取り消された場合、もしくはポイント利用時に支払いに利用するポイント数が減少した場合等には、当社の判断により当社または本ポイント利用先企業より、ポイントまたは金品で、ポイントの返還ができなかったポイント相当額を返還するものとします。'
const input2 = '3. ID保有者が自己の保有するポイントをポイント利用対象取引の全部または一部の支払いに利用することを申請した後に、当該ID保有者が利用申請したポイントが取消の対象であることが判明した場合、当社は当該支払の対象となる取引を取消または保留することがあります。その場合、ID保有者はその後の対応について当社の指示に従うものとします。'
const input3 = '4. ID保有者は[当社指定のページ](https://cmn.point.recruit.co.jp/terms/terms.html)で明示的に定める場合を除き、ポイントを第三者に譲渡・相続できず、また金品に交換することもできません。'
const input4 = '5. ID保有者が万一複数のID登録をしている場合でも、当該ID保有者はそれぞれのID登録において保有するポイントを合算することはできません'


class ContentStep05 extends React.Component {
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
              <ReactMarkdown source={input4} />  
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep05;