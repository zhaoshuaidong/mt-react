import React, { Component } from 'react'
import styles from './index.less';
import SomeCity from '../SomeCity'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            str: 'ABCDEFGHJKLMNPQRSTWXYZ'
        }
    }
    getCharList = () => {
        const arr = [];
        for (let i = 0; i < this.state.str.length; i++) {
            arr.push(this.state.str[i]);
        }
        return arr.map((item, i) => {
            return <li key={i}>
                <a href={'#city-' + item}>{item}</a>
            </li>
        })
    }
    render() {
        return (
            <div className={styles["all-city"]}>
                <div className={styles["letter-choose"]}>
                    <div className={styles["choose"]}>按拼音首字母选择：</div>
                    <ul className={styles["all-city-list"]}>
                        {this.getCharList()}
                    </ul>
                </div>
                <div>
                    <SomeCity />
                </div>
            </div>
        )
    }
}
