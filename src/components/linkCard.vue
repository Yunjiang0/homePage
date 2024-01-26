<template>
	<div class="all">
		<el-row class="first" :gutter="20">
			<el-col class="item" :span="7" :offset="0" @click="toRescue('http://43.143.225.216:5734/')">
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
						<path
							d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22c18.2 6.8 31.3 24.4 31.3 45c0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7c54.4-11.4 98.3-55.4 109.7-109.7c17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9c129.4 7 233.4 112 240.9 241.5c.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9c76.8 6.3 138 68.2 144.9 145.2c.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3c-8.4-110.1-96.5-198.2-206.6-206.7z"
							fill="currentColor"
						></path>
					</svg>
				</span>
				<span v-show="screenWidth > 870 || (screenWidth < 720) & (screenWidth > 450)" class="iconText">博 客</span>
			</el-col>
			<el-col class="item" :span="7" :offset="1" @click="toRescue('http://43.143.225.216:5733')">
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
						<path
							d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7c-4.2-15.4-4.2-59.3 0-74.7c5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32c0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
							fill="currentColor"
						></path>
					</svg>
				</span>
				<span v-show="screenWidth > 870 || (screenWidth < 720) & (screenWidth > 450)" class="iconText"
					>demo <i v-show="screenWidth >= 1244">管理</i></span
				>
			</el-col>
			<el-col class="item" :span="7" :offset="1" @click="toRescue('http://43.143.225.216:5735/')">
				<span class="icon">
					<svg class="icon" viewBox="0 0 1070 1024" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M981.783273 0H85.224727C38.353455 0 0 35.374545 0 83.083636v844.893091c0 47.616 38.353455 86.574545 85.178182 86.574546h903.633454c46.917818 0 81.733818-38.958545 81.733819-86.574546V83.083636C1070.592 35.374545 1028.701091 0 981.783273 0zM335.825455 135.912727c74.193455 0 134.330182 60.974545 134.330181 136.285091 0 75.170909-60.136727 136.192-134.330181 136.192-74.286545 0-134.516364-61.021091-134.516364-136.192 0-75.264 60.229818-136.285091 134.516364-136.285091z m-161.512728 745.937455a41.890909 41.890909 0 0 1-27.648-10.379637 43.752727 43.752727 0 0 1-4.654545-61.067636l198.097454-255.162182a42.123636 42.123636 0 0 1 57.716364-6.702545l116.549818 128.139636 286.906182-352.814545c14.615273-18.711273 90.251636-106.775273 135.866182-6.935273 0.093091-0.093091 0.093091 112.965818 0.232727 247.761455 0.093091 140.8 0.093091 317.067636 0.093091 317.067636-1.024-0.093091-762.740364 0.093091-763.112727 0.093091z"
							fill="currentColor"
						></path>
					</svg>
				</span>
				<span v-show="screenWidth > 870 || (screenWidth < 720) & (screenWidth > 450)" class="iconText"
					>&thinsp;图<i v-if="screenWidth < 1123">&thinsp;</i>片<i v-show="screenWidth >= 1123">管理</i></span
				>
			</el-col>
		</el-row>
	</div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
function toRescue(url) {
	window.location.href = url;
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
.all {
	box-sizing: border-box;
	height: 100%;
	width: 100%;
}

.first {
	margin-top: 20px;
	box-sizing: border-box;
	user-select: none;
}

.item {
	height: 100px;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	border-radius: 6px;
	background-color: #00000040;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	/* transform: scale(1); */
	color: #fff;
	transition: all 0.5s;
	padding: 0 !important;
	box-sizing: border-box;
}

.icon {
	cursor: #fff;
	width: 30px;
	height: 30px;
}

.iconText {
	margin-left: 10px;
	font-size: 1.2rem;
	/* letter-spacing: 5px; */
}

.item:hover {
	background-color: #00000070;
}

@media screen and (max-width: 815px) {
}
</style>
