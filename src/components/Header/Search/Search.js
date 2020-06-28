import React, { Component } from 'react'
import searchStyle from './Search.less';
import { SearchOutlined } from '@ant-design/icons';
import axios from '../../../axios/index';
import {history } from 'umi'
import cnchar from 'cnchar'
export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            hotSearch: [], //获取热门搜索数据
            related: [], //获取关联词数据
            relatedList: [],
        };
        this.suggestRef = React.createRef();
        this.viewRef = React.createRef()
    }
    changeInput = e => {
        const value = e.target.value;
        this.setState({
            ...this.state,
            value
        }, () => {
            this.getRelated(value)
        });
        
    }
    //文本框聚焦
    inputFocus = e => {
        const suggust = this.suggestRef.current;
        const view = this.viewRef.current;
        if(this.state.value !== ''){
            view.style.display = 'block';
            suggust.style.display = 'none';
            return;
        }
        suggust.style.display = 'block';
    }
    //文本框失焦
    inputBlur = e => {
        const suggust = this.suggestRef.current;
        const view = this.viewRef.current;
        setTimeout(() => {
            view.style.display = 'none';
            suggust.style.display = 'none';
        }, 500);
    }
    //渲染热门搜索列表
    hotSearchHan = () => this.state.hotSearch.map((item, i) => (<dd key={i}>{item}</dd>))
    //输入词获取相关联的词
    getRelated = value => {
        const suggust = this.suggestRef.current;
        const view = this.viewRef.current;
        if(value !== ''){
            suggust.style.display = 'none';
            view.style.display = 'block'
        }else if(value === ''){
            suggust.style.display = 'block';
            view.style.display = 'none'
        }
        let initials = cnchar.spell(value)[0];
        //转化为小写字符
        let lower = initials && initials.toUpperCase();
        this.state.related.forEach(ele => {
            
            let str = ele.Initials;
            if (str.includes(initials) || str.includes(lower)) {
                this.setState({
                    ...this.state,
                    relatedList: ele.contentArr
                })
                
            }
        })
    }
    handleClick = (e, item) => {
        
        history.push({
            pathname: `/meishi/${item}`,
        })
    }
    //渲染词联想列表
    getRelatedList = () => this.state.relatedList.map((item, i) => (<li onClick={e => {
        this.handleClick(e, item)
    }} key={i}>{item}</li>))
    componentDidMount() {
        axios.getHotSearch().then(res => {
            const data = res.data.searchHotList;
            this.setState({
                ...this.state,
                hotSearch: data
            })
        });
        axios.getSearch().then(res => {
            const data = res.data;
            this.setState({
                ...this.state,
                related: data
            })
        })
    }
    
    render() {
        return (
            <div className={searchStyle["header-search"]}>
                <div className={searchStyle["header-search-top"]}>
                    <div className={searchStyle["search-title"]}>
                        <h1>
                        <a href="//lingshan.meituan.com">
                            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
                        </a>
                        </h1>
                    </div>

                    <div className={searchStyle["search-container"]}>
                        <div className={searchStyle["header-search-modle"]}>
                            <input 
                                placeholder='搜索商家或地点' 
                                className={searchStyle['el-input__inner']} 
                                type="text" value={this.state.value} 
                                onChange={this.changeInput}
                                onFocus={this.inputFocus}
                                onBlur={this.inputBlur}
                            />
                            <button className={searchStyle['el-button']}>
                                <SearchOutlined />
                            </button>
                        </div>

                        <div className={searchStyle["header-search-view"]} ref={this.viewRef}>
                            <ul>
                                {this.getRelatedList()}
                            </ul>
                        </div>
                        
                        <div className={searchStyle["header-search-suggest"]} ref={this.suggestRef}>
                            <div className={searchStyle["header-search-noinput"]}>
                                <h4>最近搜索</h4>
                                
                            </div>
                            <div className={searchStyle["header-search-hasinput"]}>
                                <h4>热门搜索</h4>
                                <dl>
                                    {this.hotSearchHan()}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
