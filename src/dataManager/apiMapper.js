export const EndPoint = {
  // ------ 오케이포스 홈페이지
  GET_V1_TEST_AUTO_LOGIN: `${''}/test/v1/jwt/check/:isManual`,
}

const ApiMapper = {
  get: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},
  },
  post: {},
  patch: {},
  put: {},
  delete: {},
}

export default ApiMapper
