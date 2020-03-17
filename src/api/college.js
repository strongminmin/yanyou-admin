import request from '@/utils/request'
import config from './config'
export function getCollegeList(data) {
  return request({
    url: `${config.BASE_URL}/college/college-list`,
    method: 'get',
    params: data
  })
}

export function releaseCollege(data) {
  return request({
    url: `${config.BASE_URL}/college/release-college`,
    method: 'post',
    data
  })
}
export function updateCollege(data) {
  return request({
    url: `${config.BASE_URL}/college/update-college`,
    method: 'post',
    data
  })
}

export function deleteCollege(data) {
  return request({
    url: `${config.BASE_URL}/college/delete-college`,
    method: 'get',
    params: data
  })
}
export function getCollegeDetails(data) {
  return request({
    url: `${config.BASE_URL}/college/college-details`,
    method: 'get',
    params: data
  })
}
