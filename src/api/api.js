import api from './request.js'

// 每日一言
const yiyan = (data) => {
    return api.get({
        url: '/ian?type=json',
        data
    })
}
const wyy = (data) => {
    return api.get({
        url: '/reping',
        data
    })
}
const weather = (data) => {
    return api.get({
        url: '/weather',
        data
    })
}
export default { yiyan, wyy, weather }