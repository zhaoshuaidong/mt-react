import React, { PureComponent } from 'react'
import mainStyle from './index.less';
import MyNav from '../Nav';
import Guesslike from './Guesslike';
import CatMovie from './CatMovie';
import Article from './Article';
import axios from '../../axios'
export default class Main extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            haveStyleColor: 'linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%)',
            haveStyleArr: null,
        }
        this.haveStyleOld = 0
    }
    componentDidMount() {
        axios.getHaveStyle().then(res => {
            this.setState({
                ...this.state,
                haveStyleArr: res.data
            })
        });
    }
    changeClass = index => {
        const data = this.state.haveStyleArr.navArr;
        const content = this.state.haveStyleArr.content;
        //改变导航样式
        this.setState({
            ...this.state,
            haveStyleArr: {
                ...this.state.haveStyleArr, 
                navArr: [
                    ...this.state.haveStyleArr.navArr,
                    data[this.haveStyleOld].bool= false,
                    data[index].bool = true
                ]
                
            }
        })
        //改变渲染内容
        content[this.haveStyleOld].bool = false;
        content[index].bool = true;
        this.haveStyleOld = index
    }
    render() {
        return (
            <div className={mainStyle['main']}>
                <MyNav />
                <CatMovie />
                <Article 
                    data={this.state.haveStyleArr} 
                    bgcolor={this.state.haveStyleColor}
                    classNav={this.changeClass}
                />
                <Guesslike />
            </div>
        )
    }
}
