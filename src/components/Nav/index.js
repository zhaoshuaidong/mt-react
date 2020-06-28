import React, { Component } from 'react'
import navStyle from './index.less';
import NavLeft from './NavLeft';
import NavMiddle from './NavMiddle';
import NavRight from './NavRight';
export default class index extends Component {
    render() {
        return (
            <div className={navStyle["main-nav"]}>
                <div className={navStyle["nav-title"]}>
                    <div className={navStyle["nav-title-left"]}>
                        <div className={navStyle["all-categories"]}>
                            全部分类
                        </div>
                        <div className={navStyle["nav-title-list"]}>
                            <ul className={navStyle["nav-view-list"]}>
                                <li>美团外卖</li>
                                <li>猫眼电影</li>
                                <li>美团酒店</li>
                                <li>民宿／公寓</li>
                                <li>商家入驻</li>
                                <li>美团公益</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={navStyle["nav-banner"]}>
                    <NavLeft />
                    <NavMiddle />
                    <NavRight />
                </div>
            </div>
        )
    }
}
