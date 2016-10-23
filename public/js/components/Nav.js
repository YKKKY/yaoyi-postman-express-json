import React from 'react';

export default class Nav extends React.Component {

    mouseMove(text) {
        if(text === 'display' && this.props.viewFlag != '') {
            text = this.props.viewFlag;
        }
        this.props.changeView(text);
    }
    render() {
        return <div>
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="col-lg-offset-1">
                    <p className="navbar-text">只有你想不到的，没有我们做不到的</p>
                </div>
                <div className="col-lg-offset-9 aPaddingTop">
                    <a href="#" className="aFontColor">登陆</a>
                    <a href="#" className="aFontColor">|注册</a>
                    <a href="#" className="aFontColor navpr">个人中心</a>
                    <a href="#" className="aFontColor navpr">退出</a>
                </div>
            </nav>
            <div className="container paddingBottom">
                <div className="col-lg-8">
                    <div className="col-lg-offset-6">
                        <img src="../../images/私终_03.png" alt=""/>
                    </div>
                </div>
                <div className="inputPaddingTop col-lg-4">
                <input type="text" placeholder="请输入搜索商品" className="col-lg-9"/>
                <span className="glyphicon glyphicon-search colorSearch"></span>
                <span className="glyphicon glyphicon-shopping-cart"></span>
                </div>
            </div>
            <div className="heightA" height="10px" onMouseOver={this.mouseMove.bind(this,'')}>
            </div>
            <div className="container">
                <ul className="nav nav-justified" role="tablist">
                    <li><a href="#"><span className="colorA action" onMouseOver={() => this.mouseMove('')}>首页</span></a></li>
                    <li><a href="#"><span className="colorA" onMouseOver={() => this.mouseMove('')}>全部</span></a></li>
                    <li><a href="#"><span className="colorA" onMouseOver={() => this.mouseMove('run')} onMouseOut={this.mouseMove.bind(this,'display')}>跑腿</span></a></li>
                    <li><a href="#"><span className="colorA" onMouseOver={() => this.mouseMove('study')} onMouseOut={this.mouseMove.bind(this,'display')}>学习</span></a></li>
                    <li><a href="#"><span className="colorA" onMouseOver={() => this.mouseMove('')}>其他</span></a></li>
                    <li><a href="#"><span className="colorA" onMouseOver={() => this.mouseMove('')}>在线下单</span></a></li>
                    <li><a href="#"><span className="colorA" onMouseOver={() => this.mouseMove('')}>常见问题</span></a></li>
                </ul>
            </div>
            <div style={{display: this.props.viewFlag === 'run'? "block": "none"}} className="container-fluid">
                <ul className="nav nav-justified" style={{}}>
                    <li><a>run</a></li>
                    <li><a>run</a></li>
                    <li><a>run</a></li>
                </ul>
            </div>
            <div style={{display: this.props.viewFlag === 'study'? "block": "none"}} className="container-fluid">
                <ul className="nav nav-justified" style={{width: '1351px', left: '-675.5px'}}>
                    <li><a href=""><img src="../../images/paintbrush2.png" width="50px" alt=""/></a></li>
                    <li><a href="">study</a></li>
                    <li><a href="">study</a></li>
                </ul>
            </div>
            <div className="heightA" height="10px" onMouseOver={this.mouseMove.bind(this,'')}>
            </div>
        </div>;
    }
}