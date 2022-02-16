import request from '@/utils/request'

export default {

  Addslopedata(Addslopedata) {
    console.log(Addslopedata)
    return request({
      url: `/addslopedata/addDeGanSlopeData`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},  //跨域
      withCredentials: false,
      data: Addslopedata
    })
  }
}
