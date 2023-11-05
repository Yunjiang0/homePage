<template>
    <div class="yiyanBox">
        <!-- {{ indexData.yiyan }}
    {{ indexData.source }} -->
        <span class="xicon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                <path
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    fill="currentColor"></path>
            </svg>
        </span>
        <span class="text">
            {{ indexData.yiyan }}
            <!-- {{ indexData.source }} -->

        </span>
        <span class="xicon downxicon">
            <svg data-v-f16f0e80="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512">
                <path
                    d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                    fill="currentColor"></path>
            </svg>
        </span>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import api from '../api/api.js'
let indexData = reactive({
    yiyan: '',
    source: '',
})
api.yiyan().then(res => {
    console.log(res);
    indexData.yiyan = res.data.data.vhan
    indexData.source = res.data.data.source
}).catch(err => {
    console.log(err);
    ElMessage.error('一言获取失败')
})
</script>
<style scoped>
.yiyanBox {
    border-radius: 6px;
    height: 100%;
    width: 100%;
    background-color: #00000040;
    backdrop-filter: blur(6px);
    padding: 20px;
}

.xicon svg:not([fill]) {
    fill: currentColor;
}

.xicon {
    font-size: 16px;
    color: #fff;
    display: inline-flex;
}

.downxicon {
    position: absolute;
    right: 20px;
    bottom: 20px;
}

.xicon svg {
    width: 1em;
    height: 1em;
}

.text {
    color: #fff;
    text-align: left;
    user-select: none;
    text-decoration: none;
    box-sizing: border-box;
    font-size: 1.2rem;
    margin-top: 30px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    word-break: break-all;
}
</style>