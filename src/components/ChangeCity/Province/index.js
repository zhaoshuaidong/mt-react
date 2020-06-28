import React, { PureComponent } from 'react'
import styles from './index.less';
import {CaretDownOutlined} from '@ant-design/icons';
import axios from '../../../axios';
import HotCity from '../HotCity';
import AllCity from '../AllCity'
export default class index extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            province: "省份",
            city: '城市',
            oldClass: null,//记录之前的class
            oldCityClass: null,
            provinceArr: [],//省份数组
            cityArr: [],//城市数组
            oldHan: null,//记录之前的方法
            hotCityArr: null,
            visitedArr: null,
            input: ''
        }
        this.flag = false,//控制省份显示
        this.flagCity = false,//控制城市 
        this.provinceRef = React.createRef();
        this.cityRef = React.createRef();
        this.regionRef = React.createRef()
        this.oldClass= null;
        this.oldCityClass = null
    }
    componentDidMount() {
        //获取省份
        axios.getProvince().then(res => {
            const data = res.data;
            data.forEach(ele => ele.bool = false)
            this.setState({
                ...this.state,
                provinceArr: data
            })
        });
        //获取城市
        axios.getCity().then(res => {
            const data = res.data;
            this.setState({
                ...this.state,
                cityArr: data
            })
        })
        //获取热门城市
        axios.getHotCity().then(res => {
            this.setState({
                ...this.state,
                hotCityArr: res.data
            })
        })
        //获取最近访问
        axios.getRecentlyVisited().then(res => {
            this.setState({
                ...this.state,
                visitedArr: res.data
            })
        })
    }
    //省份列表
    getProvinceList = () => {
        return this.state.provinceArr.map((item, i) => {
            return <li 
                    onClick={e => {
                        this.addClass(e, i)
                    }}
                    key={item.provinceCode} 
                    className={item.bool ? styles['active'] : ''}>
                        {item.provinceName}
                    </li>
        })
    }
    //城市列表
    getCityList = () => {
        return this.state.cityArr.map((item, i) => {
            return <li 
                    key={i} 
                    onClick={e => {
                        this.addCityClass(e, i)
                    }}
                    className={item.bool ? styles['active'] : ''}>
                        {item.name}
                    </li>
        })
    }
    showHandle = () => {
        const dom = this.provinceRef.current;
        if(this.flagCity)return;
        if(this.flag){
            dom.style.display = 'none'
            this.flag = !this.flag
            
        }else{
            dom.style.display = 'block'
            this.flag = !this.flag
            
        }
    }
    showCityHandle = () => {
        if(this.state.province === '省份'){
            return
        }

        const dom = this.cityRef.current;
        
        if(this.flag)return;
        if(this.flagCity){
            dom.style.display = 'none'
            this.flagCity = !this.flagCity
            
        }else{
            dom.style.display = 'block'
            this.flagCity = !this.flagCity
        }
    }
    addClass = (e, index) => {
        const value = e.target.innerText;
        const arr = this.state.provinceArr;
        this.oldClass != null &&  (arr[this.oldClass].bool = false);
        arr[index].bool = true;
        this.oldClass = index;
        this.regionRef.current.className = styles['region']
        this.setState({
            ...this.state,
            province: value,
            provinceArr:arr
        }) 
    }
    addCityClass = (e, index) => {
        
        const value = e.target.innerText;
        const arr = this.state.cityArr;
        this.oldCityClass != null &&  (arr[this.oldCityClass].bool = false);
        arr[index].bool = true;
        this.oldCityClass = index;
        this.setState({
            ...this.state,
            city: value,
            cityArr:arr
        }) 
    }
    render() {
        return (
            <div>
                <div className={styles["province"]}>
                    <div className={styles["province-close"]}>
                        <div className={styles["close"]}>按省份选择</div>
                        <div className={styles["region"]} onClick={this.showHandle} >
                            <div>{this.state.province}</div>
                            <CaretDownOutlined />
                            <div style={{display: 'none', position: 'absolute', top: '49px',left:' 0px',}} ref={this.provinceRef}>
                                <ul className={styles["province-list"]}>
                                    {this.getProvinceList()}
                                </ul>
                            </div>
                        </div>
                        <div ref={this.regionRef} className={styles["region"] + ' ' + styles['disabled']} onClick={this.showCityHandle}>
                            <div>{this.state.city}</div>
                            <CaretDownOutlined />
                            <div style={{display: 'none', position: 'absolute', top: '49px',left:' 0px',}} ref={this.cityRef}>
                                <ul className={styles["province-list"]}>
                                    {this.getCityList()}
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles["province-search"]}>
                        <div className={styles["search"]}>直接搜索:</div>
                        <input type="text" className={styles['inp']} placeholder="请输入内容"/>
                    </div>
                    
                </div>
                <div>
                    <HotCity title="热门城市" list={this.state.hotCityArr}/>
                    <HotCity title="最近访问" list={this.state.visitedArr}/>
                </div>
                <div>
                    <AllCity />
                </div>
            </div>
        )
    }
}
