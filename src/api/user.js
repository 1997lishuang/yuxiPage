import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/redcaveconvergence/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/redcaveconvergence/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/redcaveconvergence/logout',
    method: 'post'
  })
}
