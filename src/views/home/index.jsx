import React, { Fragment, PureComponent } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from './style';


export default class Home extends PureComponent {
  state = {

  }
  goDetail = ()=>{
    let {history} = this.props;
    history.push('/detail');
  };
  render() {
    return (
      <Fragment>
        <Header/>
        <div>
          <span onClick={this.goDetail}>进入详情页</span>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}
