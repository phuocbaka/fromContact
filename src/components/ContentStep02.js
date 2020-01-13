import React from 'react';
import './ContentStep02.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '### 第2条（ID保有者）'
const input0 = '1. ID保有者（以下「ID保有者」といいます）とは、本サービス上で当社の定める必要な情報を登録し、当社により当社独自のID（以下「リクルートID」といいます）の利用につき承認を受けた者をいいます（当該情報登録より当該承認までの手続きを、以下「ID登録」といいます）。ID登録後、ID保有者は本サービスにおけるID保有者向けサービス（以下「対象サービス」といいます）を利用できるものとします。'
const input1 = '2. 利用者は、ID登録した時点で、本規約の内容に同意したものとみなされます。不承諾の意思表示は、ID登録をしないことをもってのみ認められるものとします。'
const input2 = '3. 利用者は、ID登録に際して、以下の条件をお守り下さい。'
const input2a = '* 本サービス上のID保有者登録専用ページの入力欄に、利用者ご自身に関する真実かつ正確なデータを入力し、ID登録を行って下さい。代理による登録は一切認めていません。'
const input2b = '* ID登録時にメールアドレスを登録する際は、ID保有者ご自身の保有するメールアドレスをご登録下さい。他人のメールアドレスでのご登録はお断りします。会社や学校、ご家族等、複数の人によってメールアドレスを共用されている場合においては、当該共有者の総意で当該ID保有者に当該メールアドレスでのID登録を認める場合に限り、当該メールアドレスでのID登録を認めるものとします。ただし、この場合も、対象サービスの利用については登録者ご自身に限定するものとします。'
const input2c = '* (1)の入力事項に変更があった場合、ID保有者は速やかに登録内容の変更を行って下さい。'
const input2d = '* 1人の利用者による複数のリクルートIDの登録および/または保有は認めていません。'

const input3 = '4. ID保有者は対象サービスを利用するにあたり、ID登録時に登録したメールアドレスおよびパスワード等を入力するものとし、当社は、メールアドレスおよびパスワード等を利用して行われた行為を、当該入力のあったメールアドレスおよびパスワード等と当社に登録されたメールアドレスおよびパスワード等が一致するID保有者による利用とみなすものとします。万一、盗用・不正利用その他の事情によりID保有者のリクルートIDをID保有者以外の第三者が利用している場合であっても、当該行為による責任は、当社に故意または重大な過失がない限り、当該メールアドレスおよびパスワード等についてID登録情報上一致するID保有者が負うものとします'
const input4 = '5. 当社は、下記の場合、ID保有者への事前通知を行うことなく当該ID保有者への対象サービスの全部または一部の利用停止・終了、登録IDの抹消、登録メールアドレスの削除、ポイント（次条で定義するものとします）の全部または一部の抹消ならびにID保有者資格の剥奪、損害賠償請求等の必要な対応（法的措置を含みますが、これに限りません）を行うことがあります。なお、当該対応の結果、ID保有者に損害や不利益が生じた場合でも、当社は一切の責任を負わないものとします。'
const input4a = '* ID保有者が、有効なポイントを保有していない場合であって、かつ直近の３年間、当該ID保有者のリクルートIDでの利用（ログイン）実績がない場合であって、かつ当社からの電子メールによる各種連絡がエラーで送付できない状態にある場合または受信メール設定が全て「受け取らない」を選択している場合'
const input4b = '* ID保有者が本規約または本サービスの利用時に提示されるサービスごとの利用規約や諸注意等（総称して、以下「サービス利用規約」といいます）に違反すると当社が判断する場合またはそのおそれがあると当社が判断する場合'
const input4c = '* ID保有者が、当社が対象サービスの運営上不適当と判断する行為を行った場合'
const input5 = '6. ID保有者は、自己が本サービスを利用する場合、サービス利用規約を確認し、同意した上で、当該サービスを利用するものとします。'


class ContentStep02 extends React.Component {
    render() {
      return (
        <div>
            <div className="til-bar">
              <ReactMarkdown source={Titlebar} />   
            </div>
            <div className="content-step02">
              <ReactMarkdown source={input0} />  
              <ReactMarkdown source={input1} />  
              <ReactMarkdown source={input2} />  
              <ReactMarkdown source={input2a} />  
              <ReactMarkdown source={input2b} />  
              <ReactMarkdown source={input2c} />  
              <ReactMarkdown source={input2d} />  
              <ReactMarkdown source={input3} />  
              <ReactMarkdown source={input4} />  
              <ReactMarkdown source={input4a} />  
              <ReactMarkdown source={input4b} />  
              <ReactMarkdown source={input4c} />  
              <ReactMarkdown source={input5} />  
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep02;