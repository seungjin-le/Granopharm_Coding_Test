import {TabsProps} from 'antd'
import AllTab from 'container/tabs/AllTab'

export const options: TabsProps['items'] = [
  {
    key: '1',
    label: `All`,
    children: <AllTab />,
  },
  {
    key: '2',
    label: `Collections`,
    children: 'Content of Tab Pane 3',
  },
  {
    key: '3',
    label: `Singles`,
    children: 'Content of Tab Pane 3',
  },
]
