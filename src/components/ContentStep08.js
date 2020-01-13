import React from 'react';
import './ContentStep08.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第8条（当社・ID保有者の責任）'
const input0 = '1. 当社は、ID保有者の対象サービスの利用（本項各号を含みますが、これに限りません）または利用不能により生じる一切の損害（ID保有者もしくは第三者に生じた精神的苦痛、またはその他の金銭的損失を含む不利益を含みますが、これに限りません）に関して当社に故意・重過失がない限り一切の責任を負わないものとします。また、当社が責任を負う場合であっても、当社の責任は直接かつ通常の損害に限られるものとします。'
const input1a = '* 対象サービスを介して行う、第三者が提供するコンテンツのダウンロード、および、第三者が管理・運営するリンクサイトへのアクセス等の行為により、ID保有者の皆様に生じた損害'
const input1b = '* 当社が相当の安全策を講じたにもかかわらず、対象サービスの無断改変、対象サービスに関するデータへの不正アクセス、コンピュータウィルスの混入等の不正行為が行われ、これに起因してID保有者の皆様に生じた損害'
const input1c = '* 通信回線や、コンピュータ等の障害によるシステムまたはサービスの中断、遅滞、中止、データ消失、不正アクセスにより生じた損害'
const input3 = '4. 当社は、ID保有者が対象サービスを利用した場合にID保有者と本ポイント付与対象取引サービス提供企業や本ポイント利用先企業、その他の第三者との間に生じたトラブルについて、当社に故意・重過失がない限り一切責任を負わないものとし、ID保有者は自己の費用と責任で当該トラブルを解決するものとします。'
const input4 = '5. ID保有者の本規約またはサービス利用規約に違反する行為によって、当社または第三者が損害を被った場合、当該ID保有者は、自己の責任と費用をもって、当該損害の一切を賠償しなければなりません。'


class ContentStep08 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div>
            <div className="content-step08">
              <ReactMarkdown source={input0} />  
              <ReactMarkdown source={input1a} />  
              <ReactMarkdown source={input1b} />  
              <ReactMarkdown source={input1c} />   
              <ReactMarkdown source={input3} />  
              <ReactMarkdown source={input4} />  
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep08;