import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/yanyou/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}
