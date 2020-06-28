import instance from './http';
const axios = {
    //获取热门搜索
    getHotSearch() {
        return instance.get('/server/searchHotWords.json')
    },
    //获取搜索框的数据
    getSearch() {
        return instance.get('/server/search.json')
    },
    //获取导航栏
    getNav() {
        return instance.get('/server/nav.json')
    },
    //获取导航右边展示区
    getNavContent() {
        return instance.get('/server/navContent.json')
    },
    //获取有格调区域
    getHaveStyle() {
        return instance.get('/server/haveStyle.json')
    },
    //获取推荐民宿
    getHome() {
        return instance.get('/server/home.json')
    },
    //获取猜你喜欢
    getGuessLike() {
        return instance.get('/server/GuessLike.json')
    },
    //获取电影
    getMovie() {
        return instance.get('/server/movie.json')
    },
    //获取省份
    getProvince() {
        return instance.get('/server/province.json')
    },
    //获取城市
    getCity() {
        return instance.get("/server/City.json")
    },
    //获取热门城市
    getHotCity() {
        return instance.get("/api/meituan/city/hot.json", {
            baseURL: "https://open.duyiedu.com",
            params: {
                appkey: 'zhaoshuaidong_1571816179798'
            }
        })
    },
    //获取最近访问城市
    getRecentlyVisited() {
        return instance.get("/api/meituan/city/recents.json", {
            baseURL: "https://open.duyiedu.com",
            params: {
                appkey: 'zhaoshuaidong_1571816179798'
            }
        })
    },
    //获取大量的城市
    getSomeCity() {
        return instance.get('/server/someCity.json')
    },
    //获取商品展示页的title
    getCommodityTitle() {
        return instance.get('/server/commodity/title.json')
    },
    //获取商品展示页的content
    getCommodityContent() {
        return instance.get('/server/commodity/content.json')
    },
    //获取商品展示页
    getCommon() {
        return instance.get('/server/commodity/common.json')
    },
    getContentRight() {
        return instance.get('/server/commodity/contentRight.json')
    }
}
export default axios
