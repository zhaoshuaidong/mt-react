import React, { Component } from 'react'
import topStyle from './Top.less';
import {AimOutlined} from '@ant-design/icons';
import {Link, history} from 'umi'
export default class Top extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: '',
            left: ''
        };
        this.topRef = React.createRef()
    }
    componentDidMount() {
        //计算网站导航宽度
        const top = this.topRef.current;
        const width = top.offsetWidth;
        const left = - (width - 72);
        this.setState({
            ...this.state,
            width,
            left
        })
    }
    handleLogin = () => {
        history.push('/blank/login')
    } 
    handleRegister = () => {
        history.push('/blank/register')
    }
    render() {
        return (
            <div className={topStyle["header-top"]} ref={this.topRef}>
                <div className={topStyle["top-left"]}>
                    <AimOutlined />
                    <span>邯郸</span>
                    <span className={topStyle["change-city"]}>
                        <Link to="/changeCity">切换城市</Link>
                    </span>
                    <span className={topStyle["near-city"]}>[ <a href="#">鞍山</a> <a href="#">辽阳</a> <a href="#">灯塔</a> ]</span>
                    <span onClick={this.handleLogin} className={topStyle["login"]}>登录</span>
                    <span onClick={this.handleRegister} className={topStyle["registered"]}>注册</span>
                </div>
                <div className={topStyle["top-right"]}>
                    <dl>
                        <dt>
                            我的美团
                            <div className={topStyle["list"]}>
                                <p>我的订单</p>
                                <p>我的收藏</p>
                                <p>抵用券</p>
                                <p>账户设置</p>
                            </div>
                        </dt>
                        <dt>手机APP</dt>

                        <dt>
                            商家中心
                            <div className={topStyle['list'] + ' ' + topStyle["business"]}>
                                <p>美团餐饮商户中心</p>
                                <p>登录商家中心</p>
                                <p>美团智能收银</p>
                                <p>我想合作</p>
                                <p>手机免费开店</p>
                                <p>餐饮代理商招募</p>
                                <p>商家申请开票</p>
                                <p>免费合作美团排队</p>
                            </div>
                        </dt>

                        <dt>
                            美团规则
                            <div className={topStyle["list"]}>
                                <p>规则中心</p>
                                <p>规则目录</p>
                                <p>规则评议院</p>
                            </div>
                        </dt>

                        <dt>
                            网站导航
                            <div className={topStyle['list']+ ' ' +  topStyle["nav"]} style={{
                                width: this.state.width + 'px',
                                left: this.state.left + 'px'
                            }}>
                                <div className={topStyle["header-list"]}>
                                    <div className={topStyle["header-jiulv"] + ' ' + topStyle['header-nav-third']}>
                                        <h4>酒店旅游</h4>
                                        <ul>
                                            <li>国际机票</li>
                                            <li>火车票</li>
                                            <li>民宿</li>
                                            <li>主题酒店</li>
                                            <li>经济型酒店</li>
                                            <li>商务酒店</li>
                                            <li>豪华酒店</li>
                                            <li>公寓</li>
                                            <li>青年旅社</li>
                                            <li>度假酒店</li>
                                            <li>别墅</li>
                                            <li>农家院</li>
                                        </ul>
                                    </div>

                                    <div className={topStyle["header-meishi"] + ' ' + topStyle['header-nav-third']}>
                                        <h4>吃美食</h4>
                                        <ul>
                                            <li>烤鱼</li>
                                            <li>特色小吃</li>
                                            <li>烧烤</li>
                                            <li>自助餐</li>
                                            <li>火锅</li>
                                            <li>代金券</li>
                                        </ul>
                                    </div>

                                    <div className={topStyle["header-movie"] + ' ' + topStyle['header-nav-third']}>
                                        <h4>看电影</h4>
                                        <ul>
                                            <li>热映电影</li>
                                            <li>热门影院</li>
                                            <li>热映电影口碑榜</li>
                                            <li>最受期待电影</li>
                                            <li>国内票房榜</li>
                                            <li>北美票房榜</li>
                                            <li>电影排行榜</li>
                                        </ul>
                                    </div>
                               
                                    <div className={topStyle["header-app"] + ' ' + topStyle['header-nav-third']}>
                                        <h4>手机应用</h4>
                                        <ul>
                                            <li><img className={["appicon"]} src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app"/></li>
                                            <li><img className={["appicon"]} src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app"/></li>
                                            <li><img className={["appicon"]} src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" title="民宿app" alt="民宿app"/></li>
                                            <li><img className={["appicon"]} src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app"/></li>
                                            <li><img className={["appicon"]} src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app"/></li>
                                        </ul>
                                    </div>
                                    
                                </div>

                            </div>
                        </dt>
                    </dl>
                
                </div>
            </div>
        )
    }
}
