import React, {ReactNode} from 'react'
import {MetaMaskInpageProvider} from '@metamask/providers'

declare global {
  // window 객체에 ethereum 속성 추가
  interface Window {
    ethereum: MetaMaskInpageProvider
  }
}

declare module 'lodash' {
  // lodash 모듈의 타입 선언 확장

  // 페이지 레이아웃 타입 정의
  export interface PageLayoutProps {
    children: ReactNode
  }
  // ApiConfig 타입 정의
  export interface ApiConfigProps {
    data: any
    query: {[key: string]: string}
    path: object
    method: string
    url: string
  }
  // TitleText 타입 정의
  export interface TitleText {
    title: string
  }

  // SubText 타입 정의
  export interface SubText {
    text: string
  }

  // UserMenuBtn 타입 정의
  export interface ProfileMenuBtnProps {
    openProfileMenu: (event?: React.MouseEvent<HTMLElement>) => void
    closeProfileMenu: () => void
    users?: {} | null | undefined
  }

  // ImageProps 타입 정의
  export interface ImageProps {
    src: string
    alt: string
    size: number
    className: string
  }

  // 프로필 화살표 버튼 styled-components Props Type
  export interface ProfileArrowBtn {
    // 대문자가 포함되면 리액트에서 이벤트로 인식하여 에러 발생
    clickMenuBtn: string
  }

  // ProfileMenuBtn 타입 정의
  export interface ProfileMenuBtn {
    account: string
    isLoggedIn: boolean
  }

  // WalletState 타입 정의
  export type WalletState = {
    id: string
    account: any
    weiBalance: string
    ethBalance: string
    invoker: string
  }

  // AuthState 타입 정의
  export type AuthState = {
    isLoggedIn: boolean
    connection: () => Promise<void>
    disconnect: () => Promise<void>
    wallet: WalletState
    active: boolean
    isConnecting: boolean
  }

  // Asset 타입 정의
  export interface Asset {
    asset_contract: {
      name: string
      image_url: string
    }
    assetMainImage: string
    assetImages: string[]
    permalink: string
    assetName: string
    assets: {
      image_thumbnail_url: string
    }[]
  }
  // Asset 배열 타입 정의
  export interface Assets {
    assets: Asset[]
  }

  // ImageCardProps 타입 정의
  export interface ImageCardProps {
    imgSrc: string
    altText: string
    lastImage?: boolean
  }

  // ChangeTab 타입 정의
  export interface ChangeTab {
    handleOnChangeTap: (tabKey: string) => void
  }

  // InfiniteScroll 타입 정의
  export interface InfiniteScroll {
    infiniteScroll: () => void
  }
}
