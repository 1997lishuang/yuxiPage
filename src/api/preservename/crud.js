import request from '@/utils/request'

export default {

  getTunnelName() {
    return request({
      url: `/preservename/findTunnelName`,
      method: 'get',
      headers: {'Content-Type': 'application/json'},  //跨域
      withCredentials: false,
    })
  }
}
