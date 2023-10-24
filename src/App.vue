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
      <div class="all">
        <el-row style="height: 15vh;"></el-row>

        <el-row :gutter="70">
          <el-col :span="12" class="left" :offset="0">
            <el-row :gutter="0">
              <el-col :span="20" :offset="2">
                <yiyan></yiyan>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="right" :offset="0">
            <el-row :gutter="20">
              <el-col :span="12" :offset="0">
                <wyy></wyy>
              </el-col>
              <el-col :span="12" :offset="0">
                <date></date>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="height: 15vh;"></el-row>
      </div>
    </div>
  </div>
</template>
<script setup>
import yiyan from './components/yiyan.vue';
import wyy from './components/wyy.vue';
import date from './components/date.vue';
// document.documentElement 是全局变量时
const el = document.documentElement
// const el = document.getElementById('xxx')

// 获取 css 变量
getComputedStyle(el).getPropertyValue(`--el-message-bg-color`)

// 设置 css 变量
el.style.setProperty('--el-message-bg-color', '#00000040')
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
  background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
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
</style>