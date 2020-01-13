import React from 'react';
import './ContentStep15.scss'
import './Footer.scss'

class ContentStep01 extends React.Component {
    render() {
      return (
        <div className="footer-text">
            <div className="footer-content">
            <span><a href="">リクルートID規則</a></span>
            <span className="border-line"><a href="">プライバシーポリシー*1</a></span>
            <span><a href="">Ponta会員規則</a></span>
            <span className="border-line"><a href="">個人情報保護方針等*2</a></span>
            <span><a href="">Ponta会員規則</a></span>
            <p>※1「プライバシーポリシー」は株式会社リクルートが掲示するものです。 / ※2「個人情報保護方針等」は株式会社 ロイヤリティ マーケティングが掲示するものです。</p>
            </div>
        </div>
        
      );
    }
  }

  export default ContentStep01;