import React from 'react';
import './ContentStep11.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第11条（対象サービスの変更・中断・終了）'
const input0 = '1. 当社は、ID保有者に事前に通知することなく、対象サービスの全部または一部を変更、中断、終了することができるものとします。ただし、当社が対象サービスの全部を終了する場合には、ID保有者に対し、終了日の１ヶ月前までに当社の定める方法で通知するものとします。'
const input1 = '2. 対象サービスの全部または一部の変更・中断・終了に伴い、ID保有者に不利益や損害が発生した場合であっても、当社は一切の責任を負わないものとします。'
const input2 = '2. 当社が、対象サービスのうち、本ポイントサービスの全部を終了する場合、当該終了日よりポイントの発行を終了するものとします。ただし、当該終了日以降も、ID保有者は別途当社指定のページ上定めがある場合、当該条件に従いポイントを利用することができるものとします。'

class ContentStep11 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div>
            <div className="content-step11">
              <ReactMarkdown source={input0} />  
              <ReactMarkdown source={input1} />   
              <ReactMarkdown source={input2} />   
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep11;