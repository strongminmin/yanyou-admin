import request from '@/utils/request'
import config from './config'
export function releaseMeet(data) {
  return request({
    url: `${config.BASE_URL}/meet/release-meet`,
    method: 'post',
    data
  })
}

export function updateMeet(data) {
  return request({
    url: `${config.BASE_URL}/meet/update-meet`,
    method: 'post',
    data
  })
}

export function getMeetList(data) {
  return request({
    url: `${config.BASE_URL}/meet/meet-list`,
    method: 'get',
    params: data
  })
}

export function deleteMeet(data) {
  return request({
    url: `${config.BASE_URL}/meet/delete-meet`,
    method: 'get',
    params: data
  })
}

export function getMeetDetails(data) {
  return request({
    url: `${config.BASE_URL}/meet/meet-details`,
    method: 'get',
    params: data
  })
}
