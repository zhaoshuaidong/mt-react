import React from 'react'
import { Layout } from 'antd';
import {history} from 'umi'
import MyHeader from '../components/Header/index';
import MyFooter from '../components/Footer';
import Login from '../components/Login';
import Register from '../components/Login/Register'
import '../assets/less/layout/layout.less';
import '../assets/less/layout/layout.less';
const { Header, Footer, Content } = Layout;
export default function index(props) {
    const path = history.location.pathname
    if(path === '/blank/login'){
        return <div><Login /></div>
    }else if(path === '/blank/register'){
        return <div> <Register/></div>
    }
    return (
        <div> 
            <Layout>
                <Header>
                    <MyHeader />
                </Header>
                <Content>
                    {props.children}
                </Content>
                <Footer>
                    <MyFooter />
                </Footer>
            </Layout>
            
        </div>
    )
}

