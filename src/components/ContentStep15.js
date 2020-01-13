import React from 'react';
import './ContentStep15.scss'
import './Titlebar.scss'
import ReactMarkdown from 'react-markdown';

const Titlebar = '***'

class ContentStep01 extends React.Component {
    render() {
      return (
        <div>
            <div className="line">
              <ReactMarkdown source={Titlebar} />   
            </div >
            <div className="sub-tilt">
            <p>附則</p>
            <p>2011年4月1日　制定・施行</p>
            <p>2013年5月27日　改定・適用</p>
            <p>2013年9月24日　改定・適用</p>
            <p>2015年11月24日　改定・適用</p>
            </div>
        </div>
      );
    }
  }

  export default ContentStep01;