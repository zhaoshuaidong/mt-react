import React, { Component } from 'react'
import likeStyle from './index.less';
import { Rate } from 'antd';
import axios from '../../../axios'
export default class index extends Component {
    state = {
        list: [],
        flag: false
    }
    componentDidMount() {
        axios.getGuessLike().then(res => {
            this.setState({
                ...this.state,
                list: res.data,
                flag: true
            })
        })
    }
    getList = () => {
        return this.state.list.map((item, i) => {
            return <li key={i}>
                <div className={likeStyle["quality-img"]}>
                    <img src={item.imgSrc} alt="" />
                </div>
                <div className={likeStyle["article-item-info"]}>
                    <div className={likeStyle["info-title"]}>
                        {item.title}
                    </div>
                    <div className={likeStyle["info-sub-title"]}>
                        <span>{item.evaluation}个评价</span>
                    </div>

                    <div className={likeStyle["info-price"]}>
                        <div>
                            <span className={likeStyle["current-price-wrapper"]}>
                                <span className={likeStyle["price-symbol"]}>{item.symbol}</span>
                                <span className={["current-price"]}>{item.price}</span>
                            </span>
                            <span className={["old-price"]}>起</span>
                        </div>
                    </div>
                </div>
            </li>
        })
    }
    render() {
        return (
            <div className={likeStyle["main-article"]}>
                <div className={likeStyle["main-article-title"]}>
                    <dl>
                        <dt>猜你喜欢</dt>
                        <dd className={likeStyle["active"]}>为你甄选最适合的</dd>
                    </dl>
                </div>
                <div className={likeStyle["main-article-item"] + ' ' +likeStyle['itemactive']}>
                    <ul>
                        {this.getList()}
                    </ul>

                </div>
            </div>
        )
    }
}
