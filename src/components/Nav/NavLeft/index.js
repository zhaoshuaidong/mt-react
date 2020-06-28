import React, { Component } from 'react'
import navLeftStyle from './index.less';
import '../../../assets/icon/iconfont';
import {RightOutlined} from '@ant-design/icons';
import axios from '../../../axios'
export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            navList: [],
            navContent: []
        };
        this.dom = null;
        this.oldActive = '';
    }
    componentDidMount() {
        axios.getNav().then(res => {
            this.setState({
                ...this.state,
                navList: res.data
            })
        });
        axios.getNavContent().then(res => {
            this.setState({
                ...this.state,
                navContent: res.data
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        const dom = document.getElementsByClassName(navLeftStyle['content-view']);
        this.dom = dom;
    }
    
    //左侧导航条
    getNavList = () => {
       return this.state.navList.map((item, i) => {
            return (<li 
                key={i}
                onMouseEnter={e => {
                    this.handleEnter(e, i)
                }}
                onMouseLeave={e => {
                    this.handleLeave(e, i)
                }}
                >
                <div>
                    <svg className={navLeftStyle["icon"]} aria-hidden="true">
                        <use xlinkHref={item.class}></use>
                    </svg>
                    {item.title}
                </div>
                <RightOutlined />
            </li>)
        })
    }
    //导航条展示内容
    getNavContent = () => {
        return this.state.navContent.map((item, i) => {
            return (<div 
                key={i} 
                className={navLeftStyle["content-view"]} 
                onMouseEnter={this.addClass}
                onMouseLeave={e => {
                    this.cancelClass(e, i)
                }}
            >
                        {this.getContentTitle(item.content)}
            </div>)
        })
    }
    //内容标题
    getContentTitle = item => {
        return item.map((ele, i) => {
            return (<div key={i}>
                <div className={navLeftStyle["content-view-title"]}>
                    <span>{ele.title}</span>
                    <div>
                        <span>{ele.some}</span>
                        <RightOutlined />
                    </div>
                </div>
                {this.getContentInfo(ele.content)}
            </div>)
        })
    }
    //具体内容信息
    getContentInfo = item => {
        return (<div className={navLeftStyle["content-view-detail"]}>
            {item.commodity.map((ele, i) => {
                return <span key={i}>{ele}</span>
            })}
        </div>)
    }
    //鼠标进入添加class，展示右边区域
    handleEnter = (e, index) => {
        this.oldActive && (this.oldActive.className = navLeftStyle['content-view']);
        this.dom[index].className = navLeftStyle['content-view'] + ' ' + navLeftStyle['active'];
        this.oldActive = this.dom[index];
    }
    //鼠标离开去掉class
    handleLeave = (e, index) => {
        setTimeout(() => {
            this.dom[index].className = navLeftStyle['content-view']
        }, 50);
    }
    //移入展示区添加class
    addClass = () => {
        setTimeout(() => {
            this.oldActive.className = navLeftStyle['content-view'] + ' ' + navLeftStyle['active'];
        }, 50);
    }
    //隐藏展示区
    cancelClass(e, index) {
        this.dom[index].className = navLeftStyle['content-view']
    }
    render() {
        return (
            <div className={navLeftStyle["nav-left"]}>
                <ul>
                    {this.getNavList()}
                </ul>
                {this.getNavContent()}
            </div>
        )
    }
}
