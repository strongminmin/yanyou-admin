import request from '@/utils/request'

export function getCollegeList(data) {
  return request({
    url: '/api/yanyou/college/college-list',
    method: 'get',
    params: data
  })
}

export function releaseCollege(data) {
  return request({
    url: '/api/yanyou/college/release-college',
    method: 'post',
    data
  })
}
export function updateCollege(data) {
  return request({
    url: '/api/yanyou/college/update-college',
    method: 'post',
    data
  })
}

export function deleteCollege(data) {
  return request({
    url: '/api/yanyou/college/delete-college',
    method: 'get',
    params: data
  })
}
export function getCollegeDetails(data) {
  return request({
    url: '/api/yanyou/college/college-details',
    method: 'get',
    params: data
  })
}
