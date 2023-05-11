declare module 'lodash' {
  declare global {
    interface Window {
      ethereum?: any
    }
  }
}
