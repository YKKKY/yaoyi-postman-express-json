import React from 'react';

export default class Footer extends React.Component {
    render() {
        return <div className="container-fluid">
            <div className="row g-ft">
                <div className="col-md-offset-1 col-md-3 servicephone line">
                    <h4 className="hd">客服电话</h4>
                    <p className="phone">019-4589612</p>
                    <p className="datetime">9:00-22:00</p>
                    <a className="w-button btn">客户反馈</a>
                </div>
                <div className="col-md-4 whatIsYX line">
                    <h4 className="hd">何为私人定制</h4>
                    <p className="desc">私人定制原创生活类电商品牌，秉承四人订制的严谨态度，深入你生活的方方面面，致力于为您提供
                    高效、便捷、高品质的服务，以客户的满意为我们的最高宗旨。</p>
                    <div className="followUs">
                        <p className="title">关注我们：&nbsp;</p>
                    </div>
                </div>
                <div className="col-md-3 appDownload">
                    <h4 className="hd">扫码下载</h4>
                </div>
            </div>
            <div className="g-ft2">
                <div className="row ">
                    <div className="col-md-offset-1 col-md-3 good">
                        <p className="text1">30天免费退款</p>
                    </div>
                    <div className="col-md-4 good">
                        <p className="text1">满30元免费一次</p>
                    </div>
                    <div className="col-md-4 good">
                        <p className="text1">私人定制服务保证</p>
                    </div>
                </div>
                <hr/>
                <div className="m-siteInfo">
                    <div className="nav">
                        <a className="text" href="">关注我们</a>
                        <b className="split">|</b>
                        <a className="text">帮助中心</a>
                        <b className="split">|</b>
                        <a className="text" href="">售后服务</a>
                        <b className="split">|</b>
                        <a className="text">商务合作</a>
                        <b className="split">|</b>
                        <a className="text" href="">企业采购</a>
                        <b className="split">|</b>
                        <a className="text">1元夺宝</a>
                        <b className="split">|</b>
                    </div>
                    <p className="m-siteInfo">
                        网易公司版权所有 © 1997-2016 ICP证：浙B2-20160106 &nbsp;浙ICP备15041168号 &nbsp; 食品经营许可证：JY13301080111719
                    </p>
                </div>
            </div>
        </div>
    }
}