import React, { Component } from 'react'
import styles from './index.less'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.oldClass = 0
    }
    getTitle = () => {
        if(this.props.data){
            return this.props.data.navArr.map((item, i) => {
                return <dd 
                    key={i} 
                    className={item.bool ? styles['active'] : ''}
                    onMouseEnter={e => {
                        this.handleEnter(e, i)
                    }}
                    >
                    {item.title}
                </dd>
            })
        }else{
            return undefined
        }
        
    }
    getContent = () => {
        if(this.props.data){
            return this.props.data.content.map((item, i) => {
                return <div 
                    key={i}
                    
                    className={item.bool ? styles["main-article-item"] + ' ' + styles['itemactive'] : styles["main-article-item"]}
                >
                    <ul>
                        {this.getList(item.contentArr)}
                    </ul>
                </div>
            })
        }else{
            return undefined
        }
    }
    getList = ele => {
        return ele.map((item, i) => {
            return <li key={i}>
                <div className={styles["quality-img"]}>
                    <img src={item.imgSrc} className={styles["image"]}/>
                </div>

                <div className={styles["article-item-info"]}>
                    <div className={styles["info-title"]}>
                        {item.title}
                    </div>
                    <div className={styles["info-sub-title"]}>
                        {item.subTitle}
                    </div>

                    <div className={styles["info-price"]}>
                        <div>
                            <span className={styles["current-price-wrapper"]}>
                                <span className={styles["price-symbol"]}>{item.symbol}</span>
                                <span className={styles["current-price"]}>{item.price}</span>
                            </span>
                            <span className={styles["old-price"]}>{item.shopPrice}</span>
                        </div>
                        <div>
                            <span className={styles["bottom-right-info"]}></span>
                        </div>
                    </div>
                </div>
            </li>
        })
    }
    handleEnter = (e, index) => {
        this.props.classNav(index)
    }
    render() {

        return (
            <div className={styles["main-article"]}>
                <div className={styles["main-article-title"]}>
                    <dl style={{background: this.props.bgcolor}}>
                        <dt>{this.props.data && this.props.data.title}</dt>
                        {this.getTitle()}
                    </dl>
                </div>

                {this.getContent()}
            </div>
        )
    }
}
