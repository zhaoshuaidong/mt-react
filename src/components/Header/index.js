import React, { Component } from 'react';
import headerStyle from './index.less'
import Top from './Top/Top';
import Search from './Search/Search'
export default class Header extends Component {
    render() {
        return (
            <div className={headerStyle['my-header']}>
                <Top />
                <Search />
            </div>
        )
    }
}
