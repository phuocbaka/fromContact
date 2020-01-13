import React from 'react';
import './ContentStep06.scss'
import './Titlebar.scss'

import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第6条（ID保有者の禁止事項）'
const input1 = '1. 他の利用者または第三者の著作権、肖像権、その他知的所有権を侵害する行為'
const input2 = '2. 他の利用者または第三者の財産、プライバシー等を侵害する行為'
const input3 = '3. 他の利用者または第三者に対する誹謗中傷、迷惑となる行為、不快感を抱かせる行為'
const input4 = '4. 当社のサーバー等のコンピュータに不正にアクセスしたり、有害なコンピュータプログラム、有害なメール等を送信または書き込む行為'
const input5 = '5. 対象サービスを商用目的で利用する行為'
const input6 = '6. 犯罪的行為に結びつく行為'
const input7 = '7. 対象サービスを通じて入手した情報を、複製、販売出版その他私的利用の範囲を超えて使用する行為'
const input8 = '8. 対象サービスの運営を妨げ、あるいは当社または提携先の信頼を毀損するような行為'
const input9 = '9. 営業活動、営利を目的とした情報提供活動を行う行為'
const input10 = '10. 対象サービスを使用して、当社または提携先を故意に虚偽情報の提供や脅迫によって困惑させる行為'
const input11 = '11. 本ポイント付与対象取引サービス提供企業または当社へのキャンセル料・利用料の不払い、暴力行為等掲載施設、当社または第三者に対する迷惑行為'
const input12 = '12. その他、法律、法令、公序良俗または本規約に違反する行為または違反のおそれのある行為'


class ContentStep06 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div >
            <div className="sub-tilt">ID保有者は、対象サービスを利用するにあたり以下の行為または以下に該当するおそれがあると当社が判断する行為を行わないものとします</div>
            <div className="content-step06">  
              <ReactMarkdown source={input1} />  
              <ReactMarkdown source={input2} />  
              <ReactMarkdown source={input3} />  
              <ReactMarkdown source={input4} />  
              <ReactMarkdown source={input5} />  
              <ReactMarkdown source={input6} />  
              <ReactMarkdown source={input7} />  
              <ReactMarkdown source={input8} />  
              <ReactMarkdown source={input9} />  
              <ReactMarkdown source={input10} />  
              <ReactMarkdown source={input11} />  
              <ReactMarkdown source={input12} />  
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep06;