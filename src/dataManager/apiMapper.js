const API = process.env.REACT_APP_OPENSEA_API
export const EndPoint = {
  GET_OPENSEA_IMAGES: `${API}/bundles?limit=20&offset=0`,
}

const ApiMapper = {
  get: {
    [EndPoint.GET_OPENSEA_IMAGES]: {},
  },
  post: {},
  patch: {},
  put: {},
  delete: {},
}

export default ApiMapper
