import request from '@/utils/request'

export function releaseMeet(data) {
  return request({
    url: '/api/meet/release-meet',
    method: 'post',
    data
  })
}

export function updateMeet(data) {
  return request({
    url: '/api/meet/update-meet',
    method: 'post',
    data
  })
}

export function getMeetList(data) {
  return request({
    url: '/api/meet/meet-list',
    method: 'get',
    params: data
  })
}

export function deleteMeet(data) {
  return request({
    url: '/api/meet/delete-meet',
    method: 'get',
    params: data
  })
}
