let defaultCity = '深圳'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    city: defaultCity,
    lqq: '是我啊',
    newsList: [{
        id: '001',
        newsTitle: '001华侨城以45.8亿成功拿下宝安滨海文化公园核心'
    }, {
        id: '002',
        newsTitle: '002华侨城以45.8亿成功拿下宝安滨海文化公园核心'
    }, {
        id: '003',
        newsTitle: '003华侨城以45.8亿成功拿下宝安滨海文化公园核心'
    }]
}
