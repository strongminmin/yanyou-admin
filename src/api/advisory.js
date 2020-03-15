import request from '@/utils/request'

export function releaseAdvisory(data) {
  return request({
    url: '/api/yanyou/advisory/release-advisory',
    method: 'post',
    data
  })
}

export function updateAdvisory(data) {
  return request({
    url: '/api/advisory/update-advisory',
    method: 'post',
    data
  })
}

export function getAdvisoryList(data) {
  return request({
    url: '/api/advisory/advisory-list',
    method: 'get',
    params: data
  })
}

export function deleteAdvisory(data) {
  return request({
    url: '/api/advisory/delete-advisory',
    method: 'get',
    params: data
  })
}
