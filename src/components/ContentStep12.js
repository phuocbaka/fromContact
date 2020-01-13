import React from 'react';
import './ContentStep12.scss'
import './Titlebar.scss'

import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第12条（反社会的勢力の排除）'


class ContentStep12 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div >
            <div className="sub-tilt">
            ID保有者は、反社会的勢力（暴力団、暴力団員、暴力団員でなくなった時から5年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、
            社会運動等標ぼうゴロまたは特殊知能暴力集団等、その他これらに準ずる者をいいます。）に該当しないこと、また暴力的行為、
            詐術・脅迫行為、業務妨害行為等違法行為を行わないことを、将来にわたっても表明するものとします。
            かかる表明に違反した場合には、異議なくリクルートIDおよび対象サービスの停止、または契約解除を受け入れるものとします。
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep12;