import React, { Component } from 'react';
import navMiddleStyle from './index.less';
import { Carousel } from 'antd';
import img1 from '../../../assets/img/1.jpg';
import img2 from '../../../assets/img/2.jpg'
import img3 from '../../../assets/img/3.jpg'
import img4 from '../../../assets/img/6.jpg'
export default class index extends Component {
    state = {
        img: [img1, img2, img3, img4]
    }
    //渲染轮播图
    getImg = () => this.state.img.map((item, i) => <div key={i}><img src={item} alt=""/></div>)
    render() {
        return (
            <div className={navMiddleStyle["nav-middle"]}>
                <div className={navMiddleStyle["main-view-top"]}>
                    <div className={navMiddleStyle["main-view-left"]}>
                        <Carousel autoplay>
                            {this.getImg()}
                        </Carousel>
                    </div>
                    <div className={navMiddleStyle["main-view-right"]}></div>
                </div>
                <div className={navMiddleStyle["main-view-bottom"]}>
                    <div className={navMiddleStyle["main-view-bottom-left"]}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={navMiddleStyle["main-view-bottom-right"]}></div>
                </div>
            </div>
        )
    }
}
