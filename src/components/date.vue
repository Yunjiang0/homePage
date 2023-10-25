<template>
    <div class="box">
        <div class="time">
            <div class="date">
                <span style="margin-left: 1rem;">
                    {{ indexData.date }}
                </span>
                <span style="margin-left: 1rem;">
                    {{ indexData.week }}
                </span>
            </div>
            <div class="timeText">
                {{ time.nHours }}
                <span>:</span>
                {{ time.nMinutes }}
                <span>:</span>
                {{ time.nSeconds }}
            </div>
            <div class="weather">
                <span>{{ indexData.city }}</span>
                <span style="margin-left: 5px;margin-right: 5px;"></span>
                <span>{{ indexData.type }}</span>
                <span style="margin-left: 5px;margin-right: 5px;"></span>
                <span>{{ indexData.high }}</span>
                <span style="margin-left: 5px;margin-right: 5px;"></span>
                <span>{{ indexData.fengxiang }}</span>
                <span style="margin-left: 5px;margin-right: 5px;"></span>
                <span>{{ indexData.fengli }}</span>
            </div>
        </div>

    </div>
</template>
<script setup>
import api from '../api/api.js'
import { reactive } from 'vue'
function fnGetDate() {
    // 获取当前小时
    time.nHours = new Date().getHours();
    if (time.nHours < 10) {
        time.nHours = '0' + time.nHours
    }
    // 获取分钟
    time.nMinutes = new Date().getMinutes();
    if (time.nMinutes < 10) {
        time.nMinutes = '0' + time.nMinutes
    }
    // 获取秒数
    time.nSeconds = new Date().getSeconds();
    if (time.nSeconds < 10) {
        time.nSeconds = '0' + time.nSeconds
    }
}
setInterval(function () {
    //每秒更新时间
    fnGetDate();
}, 1000);
let indexData = reactive({
    city: '',
    date: '',
    week: '',
    high: '',
    fengxiang: '',
    fengli: '',
    type: '',
})
let time = reactive({
    nHours: 0,
    nMinutes: 0,
    nSeconds: 0,
})
api.weather().then(res => {
    console.log(res);
    indexData.city = res.data.city
    indexData.date = res.data.info.date
    indexData.week = res.data.info.week
    indexData.high = res.data.info.high
    indexData.fengxiang = res.data.info.fengxiang
    indexData.fengli = res.data.info.fengli
    indexData.type = res.data.info.type
}).catch(err => {
    console.log(err);
    ElMessage.error('天气获取失败')
})
</script>
<style scoped>
.box {
    border-radius: 6px;
    height: 100%;
    width: 100%;
    background-color: #00000040;
    backdrop-filter: blur(6px);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.time {
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-align: left;
    user-select: none;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    word-break: break-all;
}


.date,
.weather {
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
}

.timeText {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 3.25rem;
    letter-spacing: 2px;
    font-family: UnidreamLED;
    width: 100%;
    text-align: center;
}
</style>