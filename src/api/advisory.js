import request from '@/utils/request'
import config from './config'
export function releaseAdvisory(data) {
  return request({
    url: `${config.BASE_URL}/advisory/release-advisory`,
    method: 'post',
    data
  })
}

export function updateAdvisory(data) {
  return request({
    url: `${config.BASE_URL}/advisory/update-advisory`,
    method: 'post',
    data
  })
}

export function getAdvisoryList(data) {
  return request({
    url: `${config.BASE_URL}/advisory/advisory-list`,
    method: 'get',
    params: data
  })
}

export function deleteAdvisory(data) {
  return request({
    url: `${config.BASE_URL}/advisory/delete-advisory`,
    method: 'get',
    params: data
  })
}

export function getAdvisoryDetails(data) {
  return request({
    url: `${config.BASE_URL}/advisory/advisory-details`,
    method: 'get',
    params: data
  })
}
