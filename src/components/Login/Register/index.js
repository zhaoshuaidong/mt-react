import React, { Component } from 'react'
import styles from './index.less'
export default class index extends Component {
    render() {
        return (
            <div className={styles["register"]}>
                <header className={styles["header-mini"]}>
                    <div className={styles["wrapper"] + ' ' + styles['cf']}>
                        <a className={styles["site-logo"]} href="http://www.meituan.com">美团</a>
                        <div className={styles["login-block"]}>
                            <span className={styles["tip"]}>已有美团账号？</span>
                            <a className={styles["btn"] + ' ' + styles['btn-small'] + ' ' + styles['login']}>登录</a>
                        </div>
                    </div>
                </header>
                <div className={styles['main']}>
                    <form style={{width:'100%'}}>
                        <div className={styles["from-filed"] + ' ' + styles['from-mobile']}>
                            <label>手机号</label>
                            <input name="mobile" type="text" className={styles["f-text"]} />
                        </div>
                        <div className={styles["from-vbtn"]}>
                            <button>免费获取短信动态码</button>
                        </div>
                        <div className={styles["from-filed"] + ' ' + styles['sms']}>
                            <label>短信动态码</label>
                            <input name="verifycode" type="text" className={styles["f-text"]}/>
                        </div>
                        <div className={styles["from-filed"] + ' ' +styles['from-pwd']}>
                            <label>创建密码</label>
                            <input name="password1" type="password" className={styles["f-text"]}/>
                        </div>
                        <div className={styles["from-filed"] + ' ' +styles['from-pwd2']}>
                            <label>确认密码</label>
                            <input name="password2" type="password" className={styles["f-text"]} />
                        </div>
                        <div className={styles["from-filed"]}>
                            <button className={styles["btn"]} >同意以下协议并注册</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
