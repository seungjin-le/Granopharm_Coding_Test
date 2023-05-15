// process.env.REACT_APP_OPENSEA_API 값을 API 상수에 할당
const API = process.env.REACT_APP_OPENSEA_API

// EndPoint 객체에 GET_OPENSEA_IMAGES 속성을 추가하고 API 경로를 할당
export const EndPoint = {
  GET_OPENSEA_IMAGES: `${API}/bundles?limit=20&offset=0`,
}

// API 요청을 위한 ApiMapper 객체를 정의.
const ApiMapper = {
  // GET 메소드에 GET_OPENSEA_IMAGES 경로를 매핑.
  get: {
    [EndPoint.GET_OPENSEA_IMAGES]: {},
  },
  // 나머지 HTTP 메소드들은 사용을 안 하니 빈 객체로 남겨둡니다.
  post: {},
  patch: {},
  put: {},
  delete: {},
}

// ApiMapper를 기본 내보내기로 설정.
export default ApiMapper
