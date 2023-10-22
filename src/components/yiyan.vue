<template>
    <div>
        <!-- {{ indexData.yiyan }}
    {{ indexData.source }} -->
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