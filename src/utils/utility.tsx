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

export const isEmpty = function (value: any) {
  return (
    value === '' || value === null || value === undefined || (typeof value === 'object' && !Object.keys(value).length)
  )
}
