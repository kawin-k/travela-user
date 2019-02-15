import moduleName from './name'

export const getTripDetail = state => state[moduleName].data.tripDetail
export const getLoading = state => state[moduleName].isLoading
