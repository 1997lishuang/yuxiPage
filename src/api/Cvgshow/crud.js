import request from '@/utils/request'

export default {

  /*
      前端传递数据
   */
  submitData(showBeginTime,showEndTime){
    return request({
      url: `/cvgShow/test?showBeginTime=${showBeginTime}&showEndTime=${showEndTime}`,
      method: 'get',
      headers: {'Content-Type': 'application/json'},  //跨域
      withCredentials: false
    })
  },



}
