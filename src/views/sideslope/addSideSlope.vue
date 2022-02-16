<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px"></el-aside>
      <el-main>
        <el-form :model="Addslopedata" :rules="rules" ref="Addslopedata" label-width="100px" class="Addslopedata">
          <el-form-item label="监测区域" prop="region">
            <el-select v-model="Addslopedata.monitorPlace" placeholder="请选择监测区域">
              <el-option label="德感加压泵站边坡" value="德感加压泵站边坡"></el-option>
              <el-option label="千岩隧洞" value="千岩隧洞"></el-option>
              <el-option label="永安1#支洞" value="永安1#支洞"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设计编号" prop="region">
            <!--                <el-input v-model="Redcaveconvergence.instrumentNumber"></el-input>-->
            <el-select v-model="Addslopedata.instrumentNumber" placeholder="请选择设计编号">
              <el-option label="TP1" value="TP1"></el-option>
              <el-option label="TP1-1" value="TP1-1"></el-option>
              <el-option label="TP1-2" value="TP1-2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="高度" prop="name">
            <el-input v-model="Addslopedata.height"></el-input>
          </el-form-item>


          <el-form-item label="观测值" prop="name">
            <el-input v-model="Addslopedata.showValue"></el-input>
          </el-form-item>



          <el-form-item label="方向" prop="region">
            <!--                <el-input v-model="Redcaveconvergence.instrumentNumber"></el-input>-->
            <el-select v-model="Addslopedata.direction" placeholder="请选择方向">
              <el-option label="X" value="X"></el-option>
              <el-option label="Y" value="Y"></el-option>
              <el-option label="Z" value="Z"></el-option>
            </el-select>
          </el-form-item>



          <el-form-item label="观测时间" prop="name">
            <el-date-picker
              v-model="Addslopedata.showTime"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submit">立即录入</el-button>
            <!--                <el-button @click="resetForm('Redcaveconvergence')">重置</el-button>-->
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import addslopedataApi from "@/api/addslopedata/crud";

export default {
name: "addSideSlope",

  data() {
    return {

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      Addslopedata: {
        monitorPlace: '德感加压泵站边坡',
        instrumentNumber: 'TP1',
        height: 'EL.261.00',
        direction: 'x',
        showTime: '',
        showValue:'',
      },
      rules: {
        monitorPlace: [
          {required: true, message: '请输入观测位置', trigger: 'blur'},
          {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur'}
        ],
        instrumentNumber: [
          {required: true, message: '请填写设计编号', trigger: 'change'}
        ],
        height: [
          {required: true, message: '请填写高度', trigger: 'change'}
        ],
        direction: [
          {type: 'date', required: true, message: '请填写方向', trigger: 'change'}
        ],
        showTime: [
          {type: 'date', required: true, message: '请填写观测时间', trigger: 'change'}
        ],
      }
    }
  },
  methods: {
    submit() {
      addslopedataApi.Addslopedata(this.Addslopedata).then(response=>{

        this.$router.push({path:'/sideSlope/addDeGanSideSlope'})
        alert("成功")
        //页面的跳转的
      }).catch(err=>{
        alert("失败")
      })
    }
  }
}
</script>

<style scoped>

</style>
