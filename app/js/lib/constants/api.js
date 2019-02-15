import GlobalConfig from '../utils/GlobalConfig'

export const bindParams = (url, params = {}) => {
  return Object.keys(params).reduce((completeUrl, key) => {
    const value = params[key]
    return completeUrl.replace(`:${key}`, value)
  }, url)
}
const host = 'https://us-central1-travela-dev-54075.cloudfunctions.net'
// static API
export const staticAPI = {
  trips: ['GET', `${host}/trips`],
  addMyTrip: ['POST', `${host}/myTrips`],
}
