# 프로젝트 폴더 구조

public: 정적 파일들을 담고 있는 폴더입니다.
- favicon.ico: 웹사이트의 파비콘 파일입니다.
- images: 이미지 파일들을 담고 있는 폴더입니다.
  - bitMapImages: 비트맵 이미지 파일들을 담고 있는 폴더입니다.
    - png: PNG 형식의 이미지 파일들을 담고 있는 폴더입니다.
    - svg: SVG 형식의 이미지 파일들을 담고 있는 폴더입니다.
    - webp: WebP 형식의 이미지 파일들을 담고 있는 폴더입니다.
  - profileIcon: 프로필 아이콘 이미지 파일들을 담고 있는 폴더입니다.
- index.html: 웹사이트의 기본 HTML 파일입니다.
- logo192.png: 웹사이트의 192px 로고 이미지 파일입니다.
- logo512.png: 웹사이트의 512px 로고 이미지 파일입니다.
- manifest.json: 웹사이트의 웹 앱 매니페스트 파일입니다.
- robots.txt: 크롤러에게 웹사이트의 로봇 접근 규칙을 알리는 파일입니다.

src: 소스 코드 파일들을 담고 있는 폴더입니다.
- App.css: App 컴포넌트에 대한 스타일을 정의한 CSS 파일입니다.
- App.test.tsx: App 컴포넌트의 테스트 파일입니다.
- App.tsx: 프로젝트의 메인 컴포넌트인 App 컴포넌트 파일입니다.
- components: 컴포넌트들을 담고 있는 폴더입니다.
  - buttons: 버튼 컴포넌트들을 담고 있는 폴더입니다.
    - ├── ConnectButtonForm.tsx
      └── HeaderImageBtn.tsx
  - cards: 카드 컴포넌트들을 담고 있는 폴더입니다.
      ├── CardForm.tsx
      ├── ContentCardListItem.tsx
      ├── PriceSection.tsx
      └── SmailCard.tsx
  - images: 이미지 컴포넌트들을 담고 있는 폴더입니다.
  - list: 목록 컴포넌트들을 담고 있는 폴더입니다.
  - texts: 텍스트 컴포넌트들을 담고 있는 폴더입니다.
- container: 컨테이너 컴포넌트들을 담고 있는 폴더입니다.
  - contents: 콘텐츠 관련 컨테이너 컴포넌트들을 담고 있는 폴더입니다.
  - layout: 레이아웃 관련 컨테이너 컴포넌트들을 담고 있는 폴더입니다.
- dataManager: 데이터 관리를 위한 파일들을 담고 있는 폴더입니다.
  - apiConfig.tsx: API 관련 설정을 담당하는 파일입니다.
  - apiMapper.tsx: API 엔드포인트와 메
  - index.css: 전역 CSS 스타일을 정의한 파일입니다.
  - index.tsx: 프로젝트의 진입점인 파일입니다.
  - logo.svg: 로고 이미지 파일입니다.
  - pages: 페이지 컴포넌트들을 담고 있는 폴더입니다.
    - home: 홈 페이지 관련 컴포넌트들을 담고 있는 폴더입니다.
  - react-app-env.d.ts: Create React App의 환경 설정 파일입니다.
  - reportWebVitals.ts: 웹사이트의 성능 측정을 위한 파일입니다.
  - setupTests.ts: 테스트 설정을 위한 파일입니다.
  - styles: 스타일 관련 파일들을 담고 있는 폴더입니다.
    - reset.css: CSS 초기화 파일입니다.
  - types: 타입 정의 파일들을 담고 있는 폴더입니다.
    - lodash: Lodash 관련 타입 정의 파일들을 담고 있는 폴더입니다.
  - utils: 유틸리티 함수들을 담고 있는 폴더입니다.
