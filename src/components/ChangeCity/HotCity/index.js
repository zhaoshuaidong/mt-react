import React, { Component } from 'react'
import styles from './index.less'
export default class index extends Component {
    constructor(props){
        super(props)
    }
    getList = () => {
        if(this.props.list){
            return this.props.list.map((item, i) => {
                return <li key={i}>{item.name}</li>
            })
        }
    }
    render() {
        return (
            <div className={styles["hot-city"]}>
                <div className={styles["hot"]}>
                    {this.props.title}：
                </div>
                <ul className={styles["hot-list"]}>
                    {this.getList()}
                </ul>
            </div>
        )
    }
}
