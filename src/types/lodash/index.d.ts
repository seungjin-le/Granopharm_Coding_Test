import React from 'react'

declare module 'lodash' {
  // lodash 모듈의 타입 선언 확장

  // window 객체에 ethereum 속성 추가
  interface Window {
    ethereum?: any
  }
  // TitleText 타입 정의
  export interface TitleText {
    title?: string
  }

  // UserMenuBtn 타입 정의
  export interface UserMenuBtnPorps {
    openUserMenu: (event?: React.MouseEvent<HTMLElement>) => void
    closeUserMenu: () => void
    users?: {} | null | undefined
  }
}
