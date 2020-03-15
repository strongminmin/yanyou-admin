import request from '@/utils/request'

export function releaseMeet(data) {
  return request({
    url: '/api/yanyou/meet/release-meet',
    method: 'post',
    data
  })
}

export function updateMeet(data) {
  return request({
    url: '/api/yanyou/meet/update-meet',
    method: 'post',
    data
  })
}

export function getMeetList(data) {
  return request({
    url: '/api/yanyou/meet/meet-list',
    method: 'get',
    params: data
  })
}

export function deleteMeet(data) {
  return request({
    url: '/api/yanyou/meet/delete-meet',
    method: 'get',
    params: data
  })
}
