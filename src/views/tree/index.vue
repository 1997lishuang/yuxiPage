<template>
  <div class="app-container">
    <div class="block">
      <span>请选择本周观察范围：</span>
      <el-date-picker
        v-model="showBeginTime"
        type="datetime"
        value-format="yyyy-MM-dd HH:mm:ss"
        placeholder="选择日期时间">
      </el-date-picker>
      <span>-</span>
      <el-date-picker
        v-model="showEndTime"
        type="datetime"
        value-format="yyyy-MM-dd HH:mm:ss"
        placeholder="选择日期时间">
      </el-date-picker>
      <el-button type="primary" style="margin:20px" @click="submitData()" round>下载周报</el-button>
    </div>

  </div>
</template>

<script>
import cvgApi from '@/api/Cvgshow/crud'
export default{
  mounted() {
    // let element = document.createElement("script");
    // element.src = "https://webapi.amap.com/maps?v=1.4.11&key=7ab53b28352e55dc5754699add0ad862&plugin=AMap.PlaceSearch";
    // document.body.appendChild(element);
    // let elementTwo = document.createElement("script");
    // element.src = "https://webapi.amap.com/ui/1.0/main.js?v=1.0.11";
    // document.body.appendChild(elementTwo);
  },
  data() {
    return {
      showBeginTime: '2021-12-31 03:03:09',
      showEndTime: ''
    }
  },
  methods:{
    submitData(){
        cvgApi.submitData(this.showBeginTime,this.showEndTime).then(response=>{
          alert("周报生成完成！请选择周报下载")
          this.$router.push({path:'/example/table'})
        }).catch(err=>{
          alert("你选择的时间不正确！请重新选择")
        })
    }
  }
}
</script>


