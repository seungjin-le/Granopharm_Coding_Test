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
  export interface ProfileMenuBtnProps {
    openProfileMenu: (event?: React.MouseEvent<HTMLElement>) => void
    closeProfileMenu: () => void
    users?: {} | null | undefined
  }

  export interface ImageProps {
    src: string
    alt: string
  }
  // 프로필 화살표 버튼 styled-components Props Type
  export interface ProfileArrowBtn {
    // 대문자가 포함되면 리액트에서 이벤트로 인식하여 에러 발생
    clickmenubtn: string
  }
}
