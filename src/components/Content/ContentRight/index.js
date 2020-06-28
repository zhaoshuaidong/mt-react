import React, { Component } from 'react'
import styles from './index.less';
import axios from '../../../axios'
export default class index extends Component {
    state = {
        list:[]
    }
    componentDidMount() {
        axios.getContentRight().then(res => {
            this.setState({
                list:res.data
            })
        })
    }
    getList = () => {
        return this.state.list.map((item, i) => {
            return <dd key={i}>
                <img src={item.src} alt=""/>
                <div style={{cursor: "pointer"}}>{item.title}</div>
                <div>
                    
                    <div className={styles["common-num"]}>{item.evaluation}个评价</div>
                </div>
                <div className={styles["price"]}>￥{item.price}起</div>
            </dd>
        })
    }
    render() {
        return (
            <div className={styles["content-right"]}>
                <dl>
                    <dt>猜你喜欢</dt>
                    {this.getList()}
                </dl>
            </div>
        )
    }
}
