<template>
	<div class="wyy" @click="wright()">
		<div class="text">
			<div class="title">网易云热评</div>
			{{ indexData.content }}
		</div>
		<div class="name">
			<span>{{ indexData.auther }}</span>
			<span> -</span>
			<span>「 {{ indexData.name }} 」</span>
		</div>
	</div>
</template>
<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue';
import api from '../api/api.js';
let indexData = reactive({
	name: '',
	auther: '',
	content: '',
	mp3url: '',
	imgurl: '',
});
api
	.wyy()
	.then((res) => {
		console.log(res);
		indexData.name = res.data.data.name;
		indexData.auther = res.data.data.auther;
		indexData.content = res.data.data.content;
		indexData.mp3url = res.data.data.mp3url;
		indexData.imgurl = res.data.data.imgurl;
	})
	.catch((err) => {
		console.log(err);
		// eslint-disable-next-line no-undef
		ElMessage.error('网易云热评获取失败');
	});
function wright() {
	navigator.clipboard.writeText(indexData.mp3url);
	// eslint-disable-next-line no-undef
	ElMessage.info('音乐链接复制成功（部分可用）');
}
const screenWidth = ref(window.innerWidth);
const handleResize = () => {
	screenWidth.value = window.innerWidth;
};

onMounted(() => {
	window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
	window.removeEventListener('resize', handleResize);
});
</script>
<style scoped>
.wyy {
	border-radius: 6px;
	height: 100%;
	width: 100%;
	background-color: #00000040;
	backdrop-filter: blur(6px);
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}

.text {
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

.name {
	color: #fff;
	text-align: left;
	user-select: none;
	text-decoration: none;
	box-sizing: border-box;
	align-self: flex-end;
	font-size: 1.1rem;
	margin-top: 10px;
	font-weight: 700;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	word-break: break-all;
}

.title {
	text-align: center;
	font-size: 1.1rem;
	font-weight: 700;
	margin-bottom: 10px;
}
</style>
