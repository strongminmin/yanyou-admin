import request from '@/utils/request'

export function getUserList(data) {
  return request({
    url: '/api/user/user-list',
    method: 'get',
    params: data
  })
}

export function disableUser(data) {
  return request({
    url: '/api/user/disable-user',
    method: 'get',
    params: data
  })
}
