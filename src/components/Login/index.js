import React, { Component } from 'react'
import styles from './index.less'
export default class index extends Component {
    render() {
        return (
            <div className={styles["login"]}>
                <header className={styles["header"] + ' ' + styles['cf']}>
                    <a className={styles["site-logo"]} href="http://www.meituan.com">美团网</a>
                </header>
                <div className={styles["login-main"]}>
                    <div className={styles["promotion-banner"]}>
                        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt=""/>
                    </div>
                    <div className={styles["login-section"]}>
                        <div className={styles['user-name']}>
                            <input placeholder="请输入账号" />
                            
                        </div>
                        <div className={styles["user-paw"]}>
                            <input placeholder="请输入密码"/>
                        </div>
                        <div className={styles["login-btn"]}>
                            <button>登录</button>
                        </div>
                    </div>
                    
                </div>

                <footer className={styles["login-footer"]}>
                    <div className={styles["site-info-nav"]}>
                        <ul>
                            <li className={styles["first"]}>关于美团</li>
                            <li>加入我们</li>
                            <li>商家入驻</li>
                            <li>帮助中心</li>
                            <li className={styles["last"]}>美团手机版</li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}
