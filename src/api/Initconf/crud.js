import request from '@/utils/request'

export default {

  /*

   */
  addInitconf(Initconf) {
    console.log(Initconf)
    return request({
      url: `/initconf/addInitconf`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},  //跨域
      withCredentials: false,
      data: Initconf
    })
  },

}
