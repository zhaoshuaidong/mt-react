import React, { Component } from 'react'
import styles from './index.less';
import Province from './Province'
export default class index extends Component {
    render() {
        return (
            <div className={styles["change-city"]}>
                <div className={styles['el-row']}>
                    <div className={styles['el-col-19']}>
                        <Province />
                    </div>
                </div>
            </div>
        )
    }
}
