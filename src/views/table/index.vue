<template>
  <div class="app-container">

<!--    <el-button type="primary"  @click="downFile"  round>周报下载</el-button>-->

<!--    <el-button type="primary"  @click="downFile2('永安隧洞')"  round>永安隧洞周报下载</el-button>-->
<!--    <el-button type="primary"  @click="downFile2('千盐隧洞')"  round>千盐隧洞周报下载</el-button>-->
<!--    <el-button type="primary"  @click="downFile2('圣中水库')"  round>圣中水库周报下载</el-button>-->
<!--    <el-button type="primary"  @click="downFile2('双桥隧洞')"  round>双桥隧洞周报下载</el-button>-->
<!--    <el-button type="primary"  @click="downFile2('石竹隧洞')"  round>石竹隧洞周报下载</el-button>-->
<!--    <el-button type="primary"  @click="downFile2('陈食隧洞')"  round>陈食隧洞周报下载</el-button>-->
<!--    <el-button type="primary"  @click="downFile2('王家湾隧洞')"  round>王家湾隧洞周报下载</el-button>-->

<!--    <el-link target="_blank" :href="x" style="margin-left:15px">-->
<!--      <el-button size="mini" type="warning">软件下载</el-button>-->
<!--    </el-link>-->
          <table>
               <tr v-for="item in PreserveList">
                   <td>
                      <el-button type="primary"> <a :href="'http://localhost:9907/Upload/downWord?templatesName='+item.tunnelName" target="_blank">{{item.tunnelName}}</a></el-button>
                   </td>
              </tr>
           </table>

<!--    <el-button type="primary"  @click="downWord('永安隧洞word模板')"  round>永安隧洞word模板下载</el-button>-->

    <h1>自定义的模板下载</h1>

    <h2></h2>

    <el-table
      :data="PreserveList"
      style="width: 100%">
      <el-table-column
        label="隧洞名"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.tunnelName}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">下载隧洞数据</el-button>
        </template>
      </el-table-column>
    </el-table>


  </div>
</template>

<script>
import { getList } from '@/api/table'
import redcaveApi from '@/api/redcaveconvergence/crud'
import preserveNameApi from '@/api/preservename/crud'

export default {
  data() {
    return {


      href:'http://localhost:9907/Upload/downWord?templatesName='+this.list,
      list: null,
      listLoading: true,
      tunnel: "永安隧洞",


      PreserveList: [{
        id:"",
        tunnelName: ''
      }]

    }
  },
  mounted() {
    this.findTunnelName()
  },
  methods: {


    downFile(){

      redcaveApi.dowmWeekfile().then(response =>{

         alert("下载成功")

      }).catch(erro=>{
        alert("请查看桌面")
      })

    },
    downFile2(location){

      redcaveApi.dowmWeekfile2(location).then(response =>{
        alert("下载成功2")
      }).catch(erro=>{
        alert("请查看桌面")
      })
    },

    downWord(templatesName){
      redcaveApi.dowmWordModel(templatesName).then(response =>{

         // console.log(response.data)
r
      }).catch(error=>{
        alert("请查看桌面")
      })
    },

    handleEdit(row) {
      this.downFile2(row.tunnelName)
    },

    findTunnelName(){
      preserveNameApi.getTunnelName().then(response=>{
        console.log(response.data)
        this.PreserveList = response.data.tunnelNameList
      }).catch(erro=>{
           console.log(erro)
      })
    }


  }
}
</script>


<style>


</style>
