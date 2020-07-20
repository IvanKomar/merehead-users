import axios from 'axios'
const SERVER_URL = 'http://77.120.241.80:8911'

const CONTENT_TYPE = {
  APPLICATION_JSON: 'application/json',
  MULTIPART: 'multipart/form-data',
}

const request = async ({
  headers = {},
  params = {},
  body = {},
  method,
  url
}) => {
  try {
    const urlWithQuery = Object.keys(params).length
      ? `${SERVER_URL}/api/${url}?${Object.keys(params)
        .reduce((acc, key) => `${acc}&${key}=${params[key]}`, '')
        .slice(1)}`
      : `${SERVER_URL}/api/${url}`

    const configs = {
      headers: {
        'Content-Type': CONTENT_TYPE.APPLICATION_JSON,
        Accept: CONTENT_TYPE.APPLICATION_JSON,
        ...headers
      },
      method
    }

    if (method !== 'get' && method !== 'delete') {
      if (headers['Content-Type'] === CONTENT_TYPE.MULTIPART) {
        configs.data = body
        delete configs.headers
      } else {
        configs.data = body
      }
    }

    const response = await axios(urlWithQuery, configs)

    if (response.status >= 300) {
      throw response
    }

    return response.data || response
  } catch (ex) {
    throw ex && ex.response ? ex.response : ex
  }
}

export const get = (requestUrl, params = {}, headers = {}) => {
  return request({
    url: requestUrl,
    method: 'get',
    params,
    headers
  })
}

export const post = (requestUrl, payload = {}, headers = {}) => {
  return request({
    url: requestUrl,
    method: 'post',
    body: payload,
    headers
  })
}

export const update = (requestUrl, id = null, payload = {}, headers = {}) => {
  return request({
    url: `${requestUrl}${id ? `/${id}` : ''}`,
    method: 'put',
    body: payload,
    headers
  })
}

export const remove = (requestUrl, id, params = {}, headers = {}) => {
  return request({
    url: id ? `${requestUrl}/${id}` : requestUrl,
    method: 'delete',
    params,
    headers
  })
}
