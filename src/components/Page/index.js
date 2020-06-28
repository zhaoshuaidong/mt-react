import React, { Component } from 'react'
import styles from './index.less';
import {RightOutlined} from '@ant-design/icons';
import ContentLeft from '../../components/Content/ContentLeft'
import ContentRight from '../../components/Content/ContentRight'
export default class index extends Component {
    render() {
        return (
            <div className={styles['page']}>
                <div className={styles["page-title"]}>
                    <span className={styles["crumb-item"]}>青岛美团</span>
                    <RightOutlined />
                    <span className={styles["crumb-item"]}>青岛花店</span>
                </div> 
                <div className={styles["page-content"]}>
                    <ContentLeft />
                    <ContentRight />
                </div>
            </div>
        )
    }
}
