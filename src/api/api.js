import api from './request.js'

// 每日一言
const yiyan = (data) => {
    return api.get({
        url: '/ian?type=json',
        data
    })
}

export default { yiyan, }