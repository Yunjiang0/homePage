<!-- <template>
  <div id="home">
    <div id="Filter">
      <div class="all">
        <div class="left" style="width: 50%;">
          <el-row :gutter="0">
            <el-col :span="23" :offset="1">
              <div class="more">
                <yiyan></yiyan>
              </div>
            </el-col>
          </el-row>

        </div>
        <div class="right" style="width: 50%;">
          <el-row :gutter="0">
            <el-col :span="12" :offset="0">
              <div class="wyy">
                <wyy></wyy>
              </div>
            </el-col>
            <el-col :span="12" :offset="0"></el-col>
          </el-row>

        </div>

      </div>

    </div>

  </div>
</template> -->
<template>
  <div id="home">
    <div id="Filter">
      <div class="all" v-if="screenWidth > 720">
        <el-row style="height: 15vh;"></el-row>

        <el-row :gutter="50">
          <el-col :span="12" class="left" :offset="0">
            <el-row :gutter="0">
              <el-col :xl="20" :lg="22" :md="24" :xm="24" :xs="24" :offset="3">
                <helloWorld></helloWorld>
              </el-col>
            </el-row>

            <el-row :gutter="0">
              <el-col :span="20" :offset="2">
                <yiyan></yiyan>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="right" :offset="0">
            <el-row :gutter="20">
              <el-col v-if="screenWidth >= 1000" :span="12" :offset="0">
                <wyy></wyy>
              </el-col>
              <el-col v-if="screenWidth >= 1000" :span="12" :offset="0">
                <date></date>
              </el-col>
              <el-col v-if="screenWidth < 1000" :span="24" :offset="0">
                <date></date>
              </el-col>

            </el-row>
            <el-row :gutter="0" style="margin-top: 40px;">
              <el-col :span="20" :offset="1">
                <linkText></linkText>
              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :span="23" :offset="1">
                <linkContent></linkContent>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="height: 15vh;"></el-row>
      </div>
      <div class="ydAll" v-if="screenWidth <= 720">
        <el-row style="height: 10vh;"></el-row>
      <transition name="fade" mode="out-in">
        <el-row v-show="listStatus == false" class="helloworld">
          <helloWorld></helloWorld>
        </el-row>
      </transition>
      <transition name="fade"mode="out-in">
        <el-row v-show="listStatus == false">
          <yiyan></yiyan>
        </el-row>
      </transition>
      <transition name="fade"mode="out-in">
        <el-row v-show="listStatus == true">
          <date></date>
        </el-row>
      </transition>
      <transition name="fade"mode="out-in">
        <el-row style="margin-top: 20px;" v-show="listStatus == true">
          <linkText></linkText>
        </el-row>
      </transition>
      <transition name="fade"mode="out-in">
        <el-row v-show="listStatus == true">
          <linkContent></linkContent>
        </el-row>
      </transition>
        <menuBtn class="menuBtn" @listChange='getListStatus'></menuBtn>

        <el-row style="height: 15vh;"></el-row>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import yiyan from './components/yiyan.vue';
import wyy from './components/wyy.vue';
import date from './components/date.vue';
import helloWorld from './components/helloWorld.vue'
import linkContent from './components/link.vue';
import linkText from './components/linkText.vue';
import menuBtn from './components/menu.vue';

// 移动端按钮状态
let listStatus = ref(false)
const getListStatus = () => {
  console.log(1111);
  console.log(listStatus.value);
  listStatus.value = !listStatus.value
  console.log(listStatus.value);
}
// document.documentElement 是全局变量时
const el = document.documentElement
// const el = document.getElementById('xxx')

// 获取 css 变量
getComputedStyle(el).getPropertyValue(`--el-message-bg-color`)

// 设置 css 变量
el.style.setProperty('--el-message-bg-color', '#00000040')

// 获取宽度
const screenWidth = ref(window.innerWidth)
const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
<style scoped>
.flex-wrap {
  flex-wrap: 1;
}

#home {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: url('https://api.vvhan.com/api/bing?rand=sj') center center no-repeat;
  background-size: 100vw 100vh;
  position: absolute;
  box-sizing: border-box;
}

#Filter {
  background: radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
  z-index: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4rem;
}

.all {
  width: 100%;
  height: 100%;
}
.menuBtn{
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, 0);
  z-index: 999;
}
@media screen and (max-width: 1244px) {
  .left {
    padding: 0px !important;
  }


}

@media screen and (max-width: 930px) {
  #Filter {
    padding: 4rem 2rem;
  }
}

@media screen and (max-width: 390px) {
  #Filter {
    padding: 4rem 1.5rem;
  }

  .helloworld {
    justify-content: center;
  }
}
.fade-enter-active, .fade-leave-active {
	transition: all 1s
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	opacity: 0
} 
</style>