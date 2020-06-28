import React, { Component } from 'react'
import styles from './index.less';
import axios from '../../../axios';
import {CaretDownOutlined } from '@ant-design/icons'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: [],
            contentArr: [],//用来展示popover区域
            popoverObj: {},
            setFixedWidth: 180,
            setFixedHeight: 30,
            top: 0,
            left: 0,
            timer: null
        }
        this.popover = React.createRef();
    }
    componentDidMount() {
        axios.getCommodityTitle().then(res => {
            this.setState({
                ...this.state,
                list: res.data
            })
        })
        axios.getCommodityContent().then(res => {
            this.setState({
                ...this.state,
                contentArr: res
            })
        });
    }
    //展示标题
    getHead = () => {
        return this.state.list.map((item, i) => {
            return <div key={i} className={styles['filter-component']}>
                <div className={styles["label"]}>
                    <label>{item.title}</label>
                    <span>{item.subTitle}</span>
                </div>
                <div className={styles['tags']}>
                    <ul className={item.className}>
                        {this.getTitle(item.list, item)}
                    </ul>
                </div>
            </div>
        })
    }
    getTitle = (list, obj) => {
        return list.map((item, i) => {
            return <li 
                key={i}
                onMouseEnter={e => {
                    this.handleEnter(e, i, obj.colIndex, item.mark)
                }}
                onMouseLeave={this.handleLeave}
                >
                    {item.title}
                {item.show ? <CaretDownOutlined /> : ''}
            </li>
        })
    }
    handleEnter = (e, index, colIndex, mark) => {
        if(!this.state.contentArr[mark].show){
            return
        }
        setTimeout(() => {
            this.changeClass()
        }, 100);
        const cur = index % 6;
        const col = Math.floor(index / 6);
        let left = this.state.setFixedWidth + (120 * cur);
        let top = this.state.setFixedHeight + (70 * colIndex) + (col * 22)
        left = left + 'px';
        top = top + 'px';
        const popoverObj = this.state.contentArr[mark];
        this.setState({
            ...this.state,
            popoverObj,
            left,
            top
        })
        
    }
    handleLeave = () => {
        const popover = this.popover.current;
        this.timer = setTimeout(() => {
            popover.className = styles['popover'];
        }, 100);
    }

    changeClass = () => {
        const popover = this.popover.current;
        popover.className = styles['popover'] + ' ' + styles['active'];
    }
    getContent = () => {
        if(this.state.popoverObj.contentArr){
            return this.state.popoverObj.contentArr.map((item, i) => {
                return <dd key={i}>{item}</dd>
            })
        }
    }
    enterContent = () => {
        clearTimeout(this.timer);
        const popover = this.popover.current;
        setTimeout(() => {
            popover.className = styles['popover'] + ' ' + styles['active'];
        }, 100);
    }
    leaveContent = () => {
        const popover = this.popover.current;
        popover.className = styles['popover'];
    }
    render() {
        return (
            <div className={styles["fliter-box"]}>
                {this.getHead()}
                <div 
                    className={styles["popover"]}
                    ref={this.popover}
                    style={{
                        top: this.state.top,
                        left: this.state.left
                    }}
                    onMouseEnter={this.enterContent}
                    onMouseLeave={this.leaveContent}
                >
                    <dl>
                        <dt>{this.state.popoverObj.title}</dt>
                        {this.getContent()}
                    </dl>
                </div>
            </div>
        )
    }
}
