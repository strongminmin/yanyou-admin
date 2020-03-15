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
    url: '/api/yanyou/advisory/update-advisory',
    method: 'post',
    data
  })
}

export function getAdvisoryList(data) {
  return request({
    url: '/api/yanyou/advisory/advisory-list',
    method: 'get',
    params: data
  })
}

export function deleteAdvisory(data) {
  return request({
    url: '/api/yanyou/advisory/delete-advisory',
    method: 'get',
    params: data
  })
}

export function getAdvisoryDetails(data) {
  return request({
    url: '/api/yanyou/advisory/advisory-details',
    method: 'get',
    params: data
  })
}
