import React from 'react';
import './Nav.scss'
import './media.scss'

class Nav extends React.Component {
    render() {
      return (
        <div className="navbar">
            <div className="nav-left">
                <h1>リクルートID規約</h1>
            </div>
            <div className="nav-right">
                <a href="https://cmn.point.recruit.co.jp/terms/terms.html">PontaWeb規約はこちら</a>
            </div>
        </div>
      );
    }
  }

  export default Nav;