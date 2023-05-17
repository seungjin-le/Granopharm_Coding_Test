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

  // ImageProps 타입 정의
  export interface ImageProps {
    src: string
    alt: string
    size: number
    className?: string
    background?: string
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

  // Asset API 데이터 타입 정의
  export interface AssetAPI {
    asset_contract: {
      name: string
      image_url: string
    }
    assetMainImage: string
    assetImages?: string[]
    permalink?: string
    assetName?: string
    assets: {
      image_thumbnail_url: string
    }[]
  }
  // Asset 타입 정의
  export interface Asset {
    assetImages: string[]
    assetLink: string
    assetMainImage: string
    assetName: string
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

  export interface PageTab {
    key: string
    count: number
  }

  // PageTabProps 타입 정의
  export interface PageTabProps {
    handleOnChangeTap: (tabKey: string) => void
    pageTabs?: PageTab[]
  }

  // InfiniteScroll 타입 정의
  export interface InfiniteScroll {
    infiniteScroll: () => void
  }
}
