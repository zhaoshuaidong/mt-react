import React, { Component } from 'react'
import styles from './index.less';
import axios from '../../../axios'
export default class index extends Component {
    state = {
        flag: false,
        list: [],
    }
    componentDidMount() {
        axios.getMovie().then(res => {
            this.setState({
                flag: true,
                list: res.data
            })
        })
    }
    getList = () => {
        return this.state.list.map((item, i) => {
            return <li key={i}>
                <div className={styles["quality-img"]}>
                    <img src={item.imgSrc} alt=""/>
                </div>

                <div className={styles["article-item-info"]}>
                    <div className={styles["info-title"]}>
                        <span className={styles["info-num"]}>{item.num}</span>
                        <span className={styles["info-name"]}>人想看</span>
                    </div>
                    <div className={styles["subTitle"]}>
                        {item.title}
                    </div>
                </div>
            </li>
        }) 
    }
    render() {
        return (
            <div className={styles["main-article"]}>
                <div className={styles["main-article-title"]}>
                    <dl>
                        <dt>猫眼电影</dt>
                        <dd className={styles["active"]}>即将上映</dd>
                    </dl>
                </div>
                <div className={styles["main-article-item"] + ' ' +styles['itemactive']}>
                    <ul>
                        {this.getList()}
                    </ul>
                </div>
            </div>
        )
    }
}
