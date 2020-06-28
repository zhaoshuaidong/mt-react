import React, { Component } from 'react'
import styles from './index.less';
import MyFilter from '../Filter';
import CommonList from '../CommonList'
export default class index extends Component {
    render() {
        return (
            <div className={styles["content-left"]}>
               <MyFilter />
                <CommonList />
            </div>
        )
    }
}
