<template>
  <div class="dashboard-container">
    <div class="dashboard-text">

      <el-container>
        <el-header></el-header>
        <el-container>
          <el-aside width="200px"></el-aside>
          <el-main>
            <el-form :model="Initconf" :rules="rules" ref="RedcaveconvergenceRedcaveconvergence" label-width="100px" class="Redcaveconvergence">
              <el-form-item label="监测区域" prop="region">
                <el-select v-model="Initconf.monitorPlace" placeholder="请选择监测区域">
                  <el-option label="红岩隧洞" value="红岩隧洞"></el-option>
                  <el-option label="千岩隧洞" value="千岩隧洞"></el-option>
                  <el-option label="永安1#支洞" value="永安1#支洞"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="设计编号" prop="region">
                <!--                <el-input v-model="Redcaveconvergence.instrumentNumber"></el-input>-->
                <el-select v-model="Initconf.instrumentName" placeholder="请选择设计编号">
                  <el-option label="L12" value="L12"></el-option>
                  <el-option label="L13" value="L13"></el-option>
                  <el-option label="L23" value="L23"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="桩号" prop="name">
                <el-input v-model="Initconf.station"></el-input>
              </el-form-item>
              <el-form-item label="钢尺长度" prop="name">
                <el-input v-model="Initconf.initSteel"></el-input>
              </el-form-item>
              <el-form-item label="观察显示读数" prop="name">
                <el-input v-model="Initconf.initShow"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submit">立即录入</el-button>
                <!--                <el-button @click="resetForm('Redcaveconvergence')">重置</el-button>-->
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
      </el-container>
    </div>

  </div>
</template>

<script>

import initconfApi from '@/api/Initconf/crud'

export default {
  data() {
    return {
      Initconf: {
        monitorPlace: '红岩1#支洞',
        instrumentName: 'L12',
        station: 'K4+520',
        initSteel: '1.695',
        initShow: '3.4',
      },
      rules: {
        monitorPlace: [
          {required: true, message: '请输入观测位置', trigger: 'blur'},
          {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur'}
        ],
        instrumentNumber: [
          {required: true, message: '请填写设计编号', trigger: 'change'}
        ],
        station: [
          {required: true, message: '请填写桩号', trigger: 'change'}
        ],
        steel_len: [
          {type: 'date', required: true, message: '请填写钢尺长度', trigger: 'change'}
        ],
        show_value: [
          {type: 'date', required: true, message: '请填写显示读数', trigger: 'change'}
        ],
      }
    }
  },
  methods: {
    submit() {
      initconfApi.addInitconf(this.Initconf).then(response=>{
        alert("成功")
        this.$router.push({path:'/'})
        //页面的跳转的
      }).catch(err=>{
        alert("失败")
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  //line-height: 100px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  //line-height: 160px;
}
.scrollbar-wrapper el-scrollbar__wrap{
}
</style>
