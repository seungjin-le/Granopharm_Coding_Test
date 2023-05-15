/**
 * 문자열을 가리기 위해 앞부분, 중간 부분, 뒷부분을 대체하여 새로운 문자열을 반환
 * @param str 원본 문자열
 * @param front 앞부분에서 대체되지 않고 유지되는 글자의 수
 * @param middle 중간 부분에서 대체되는 글자의 수
 * @param back 뒷부분에서 대체되지 않고 유지되는 글자의 수
 * @returns 대체된 문자열
 */
export function maskString(str: string, front: number, middle: number, back: number): string {
  if (str.length <= 11) {
    return str
  }
  return `${str.substr(0, front)}${'.'.repeat(middle)}${str.substr(-back)}`
}

/**
 * 주어진 값이 비어있는지 확인.
 * @param value - 확인할 값
 * @returns {boolean} - 값이 비어있으면 true, 그렇지 않으면 false를 반환.
 */
export const isEmpty = function (value: any) {
  return (
    value === '' || // 빈 문자열인지 확인
    value === null || // null인지 확인
    value === undefined || // undefined인지 확인
    (typeof value === 'object' && !Object.keys(value).length) // 객체이면서 속성이 없는지 확인
  )
}
