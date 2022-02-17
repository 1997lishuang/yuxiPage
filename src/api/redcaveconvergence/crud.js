import request from '@/utils/request'

export default {
  /*
  增加一个断面
   */
  addConvergence(Redcaveconvergence) {
    console.log(Redcaveconvergence)
    return request({
      url: `/redcaveconvergence/addConvergence`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},  //跨域
      withCredentials: false,
      data: Redcaveconvergence
    })
  },


  /*
      下载周报
   */
  dowmWeekfile(){
    console.log("下载周报中")
    return request({
      url: `/redcaveconvergence/findAllRedcav`,
      method: 'get',
      // headers: {'Content-Type': 'application/json'},  //跨域
      withCredentials: false
    })
  },

  /*
      原始数据上传
   */
  addCvgShow(Cvgshow) {
    console.log(Cvgshow)
    return request({
      url: `/cvgShow/addCvgShow`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},  //跨域
      withCredentials: false,
      data: Cvgshow
    })
  },


  /*
      新下载周报
   */
  dowmWeekfile2(e){
    console.log("下载周报中")
    return request({
      url: `/Upload/getWord?location=${e}`,
      method: 'get',
      headers: {'Content-Type': 'application/json'},  //跨域
      withCredentials: false
    })
  },

  dowmWordModel(e){
    return request({
      url: `/Upload/downWord?templatesName=${e}`,
      method: 'get',
      // responseType: 'blob' ,// 表明返回服务器返回的数据类型
      headers: {'Content-Type': 'application/json'},  //跨域
      withCredentials: false
    })
  },

}
