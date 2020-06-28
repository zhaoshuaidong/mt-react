import React, { Component } from 'react'
import styles from './index.less';
import axios from '../../../axios'
export default class index extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        axios.getSomeCity().then(res => {
            this.setState({
                list: res.data
            })
        })
    }
    getList = () => {
        return this.state.list.map((item, i) => {
            return <dl 
                key={i}
                id={"city-" + item.firstChar}
                className={styles["some-city"]}>
                    <dt className={styles["some-title"]}>{item.firstChar}</dt>
                    {this.getCityName(item.cityName)}
            </dl>
        })
    }
    getCityName = name => {
        return name.map((item, i) => {
            return <dd className={styles["some-item"]} key={i}>{item}</dd>
        })
    }
    render() {
        return (
            <div className={styles["all-city"]}>
                {this.getList()}
            </div>
        )
    }
}
