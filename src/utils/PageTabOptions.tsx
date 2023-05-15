import {TabsProps} from 'antd'

// 탭 옵션들을 정의한 모듈
export const options: TabsProps['items'] = [
  {
    key: 'allTab',
    label: `All`,
  },
  {
    key: 'collectionsTab',
    label: `Collections`,
  },
  {
    key: 'singlesTab',
    label: `Singles`,
  },
]
