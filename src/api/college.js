import request from '@/utils/request'

export function getCollegeList(data) {
  return request({
    url: '/api/college/college-list',
    method: 'get',
    params: data
  })
}

export function releaseCollege(data) {
  return request({
    url: '/api/college/release-college',
    method: 'post',
    data
  })
}
export function updateCollege(data) {
  return request({
    url: '/api/college/update-college',
    method: 'post',
    data
  })
}

export function deleteCollege(data) {
  return request({
    url: '/api/college/delete-college',
    method: 'post',
    params: data
  })
}
