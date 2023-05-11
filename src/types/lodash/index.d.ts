declare module 'lodash' {
  declare global {
    interface Window {
      ethereum?: any
    }
  }
  export type TitleText = {
    title?: string
  }
}
