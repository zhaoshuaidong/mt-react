import React, { Component } from 'react'
import navRightStyle from './index.less';
import { Avatar, Button, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import img from '../../../assets/img/8.png'
export default class index extends Component {
    state = {
        size: 'large',
        img
    }
    render() {
        return (
            <div className={navRightStyle["nav-right"]}>
                <div className={navRightStyle["main-login"]}>
                    <div className={navRightStyle["main-login-top"]}>
                        <div>
                            <Avatar icon={<UserOutlined />}/>
                        </div>
                        <Button className={navRightStyle['el-button']} type="primary" size={this.state.size} shape="round">注册</Button>
                        <Button className={navRightStyle['el-button']} type="primary" size={this.state.size} shape="round">登录</Button>
                    </div>
                    <div className={navRightStyle["main-login-bot"]}>
                        <div>
                            <img src={this.state.img} alt="" />
                        </div>
                        <span>选择我们</span>
                        <div>
                            <p>更实惠</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
