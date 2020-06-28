import React, { Component } from 'react'
import styles from './index.less';
import axios from '../../../axios'
import {CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons'
export default class index extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        axios.getCommon().then(res => {
            this.setState({
                list: res.data
            })
        });
    }
    
    getList = () => {
        return this.state.list.map((item, i) => {
            return <div key={i} className={styles["item-list"]}>
                <div className={styles["item-list-img"]}>
                    <img src={item.src} alt='' />
                </div>
                <div style={{width:'100%'}}>
                    {item.topList.map((ele, i) => {
                        return <div key={i} className={styles['item-list-desc-top']}>
                            <span>{ele.title}</span>
                            <div className={styles["item-eval-info"]}>
                                <span style={{color: "#666"}}>好</span>
                                <span style={{color: "#666"}}>{ele.score}分</span>
                                <span className={styles["comment"]}>{ele.comment}人评论</span>
                            </div>
                            <div className={styles["item-site-info"]}>
                                <span>{ele.place}</span>
                                <span className={styles["map"]}>查看地图</span>
                            </div>
                            <div>人均￥{ele.price}</div>
                        </div>
                    })}
                    <div className={styles["item-list-desc-bottom"]}>
                        <ul>
                            {item.botList.map((el, i) => {
                                return <li key={i}>
                                    <div className={styles["deal-title"]}>{el.title}</div>
                                    <div className={styles["deal-info"]}>
                                        <span className={styles["deal-price"]}>¥{el.price}</span>
                                        <span className={styles["deal-value"]}>门市价¥{el.storePrice}</span>
                                        <span className={styles["deal-sales"]}>已售{el.sell}</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <p className={styles["toogle-btn"]}>
                            更多2优惠
                            <CaretDownOutlined />
                        </p>
                    </div>
                </div>
            </div>
        })
    }
    render() {
        return (
            <div className={styles["common-list"]}>
                <div style={{width:"950px"}}>
                    <div className={styles["commdity-item"]}>
                        <div>
                            <div className={styles["item-option"]}>
                                <dl className={styles["item-group"]}>
                                    <dt>智能排序</dt>
                                    <dd style={{position: "relative"}}>
                                        价格排序
                                        <CaretDownOutlined className={styles['direction'] + ' ' +styles['el-icon-caret-bottom']}/>
                                        <CaretUpOutlined className={styles['direction']}/>
                                    </dd>
                                    <dd>人气最高</dd>
                                    <dd>评价最高</dd>
                                </dl>
                            </div>
                            {this.getList()}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
