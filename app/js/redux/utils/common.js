export const getParamsQuery = (params = {}) => (
  params === {} ? ''
    : Object.keys(params).reduce((query, param) => (
      `${query}${param}=${encodeURIComponent(params[param])}&`
    ), '?').slice(0, -1)
)
