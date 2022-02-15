<template>
  <div class="dashboard-container">
    <div class="dashboard-text">

      <el-container>
        <el-header></el-header>
        <el-container>
          <el-aside width="200px"></el-aside>
          <el-main>
            <el-form :model="Redcaveconvergence" :rules="rules" ref="RedcaveconvergenceRedcaveconvergence" label-width="100px" class="Redcaveconvergence">
              <el-form-item label="监测区域" prop="region">
                <el-select v-model="Redcaveconvergence.monitorPlace" placeholder="请选择监测区域">
                  <el-option label="红岩隧洞" value="redcavel"></el-option>
                  <el-option label="千岩隧洞" value="qiancavel"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="设计编号" prop="region">
<!--                <el-input v-model="Redcaveconvergence.instrumentNumber"></el-input>-->
                <el-select v-model="Redcaveconvergence.instrumentNumber" placeholder="请选择设计编号">
                  <el-option label="L12" value="L12"></el-option>
                  <el-option label="L13" value="L13"></el-option>
                  <el-option label="L23" value="L23"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="桩号" prop="name">
                <el-input v-model="Redcaveconvergence.station"></el-input>
              </el-form-item>
              <el-form-item label="收敛起始值" prop="name">
                <el-input v-model="Redcaveconvergence.sumPositionOne"></el-input>
              </el-form-item>
              <el-form-item label="收敛结束值" prop="name">
                <el-input v-model="Redcaveconvergence.sumPositionTwo"></el-input>
              </el-form-item>
              <el-form-item label="周变化量" prop="name" oninput="this.value = this.value.replace(/[^\d.]/g,'');">
                <el-input v-model="Redcaveconvergence.weeklyVary"></el-input>
              </el-form-item>
              <el-form-item label="变化速率" prop="name" oninput="this.value = this.value.replace(/[^\d.]/g,'');">
                <el-input v-model="Redcaveconvergence.rate"></el-input>
              </el-form-item>
              <el-form-item label="顶拱累计沉降" prop="name" oninput="this.value = this.value.replace(/[^\d.]/g,'');">
                <el-input v-model="Redcaveconvergence.crownAccumulation"></el-input>
              </el-form-item>
              <el-form-item label="累计收敛起始时间-累计收敛结束时间" required>
                <el-col :span="11">
                  <el-form-item prop="date1">
<!--                    <el-date-picker type="date" placeholder="选择开始日期" v-model="Redcaveconvergence.beginTime" style="width: 100%;"></el-date-picker>-->
                    <el-date-picker
                      v-model="Redcaveconvergence.beginTime"
                      :picker-options="Redcaveconvergence.beginTime"
                      format="yyyy-MM-dd HH:mm:ss"
                      type="datetime"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      placeholder="选择日期时间"
                    />
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date1">
<!--                    <el-date-picker type="date" placeholder="选择开始日期" v-model="Redcaveconvergence.endTime" style="width: 100%;"></el-date-picker>-->
                    <el-date-picker
                      v-model="Redcaveconvergence.endTime"
                      :picker-options="Redcaveconvergence.endTime"
                      format="yyyy-MM-dd HH:mm:ss"
                      type="datetime"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      placeholder="选择日期时间"
                    />
                  </el-form-item>
                </el-col>
              </el-form-item>

              <el-form-item label="备注" prop="desc">
                <el-input type="textarea" v-model="Redcaveconvergence.remarks"></el-input>
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
import addConvergence from '@/api/redcaveconvergence/crud'
export default {
  data() {
    return {
      Redcaveconvergence: {
        monitorPlace: '红岩隧洞',
        instrumentNumber: 'L12',
        station: 'K2+470',
        sumPositionOne: '12.00',
        sumPositionTwo: '12.91',
        weeklyVary: '12.09',
        rate: '2.90',
        crownAccumulation: '2.01',
        remarks: '无',
        beginTime: '2022-1-1 00:20:10',
        endTime: '2022-1-1 02:20:10'
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
        sumPositionOne: [
          {type: 'date', required: true, message: '请填写收敛起始值', trigger: 'change'}
        ],
        sumPositionTwo: [
          {type: 'date', required: true, message: '请填写收敛结束值', trigger: 'change'}
        ],
        weeklyVary: [
          {type: 'array', required: true, message: '请填写周变化量', trigger: 'change'}
        ],
        rate: [
          {required: true, message: '请填写变化速率', trigger: 'change'}
        ],
        crownAccumulation: [
          {required: true, message: '请填写顶拱累计沉降', trigger: 'blur'}
        ],
        remarks: [
          {required: true, message: '请填写备注', trigger: 'blur'}
        ],
        beginTime: [
          {required: true, message: '请填写起始的时间', trigger: 'blur'}
        ],
        endTime: [
          {required: true, message: '请填写结束的时间', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    //   submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         alert('submit!')
    //       } else {
    //         console.log('error submit!!')
    //         return false
    //       }
    //     })
    //   },
    //   resetForm(formName) {
    //     this.$refs[formName].resetFields()
    //   }
    // }
    submit() {
      addConvergence.addConvergence(this.Redcaveconvergence).then(response=>{
        alert("成功")
        this.$router.push({path:'/example'})
        //页面的跳转的
      }).catch(err=>{
           alert("请重新下载")
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
  background-image: image("");
}
</style>
