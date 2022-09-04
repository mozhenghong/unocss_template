import { MenuProps } from '@/config/menuConfig';

//通过key获取label
let label = ''
export const getLabel = (key: string, array: MenuProps[]) => {
  array.map((item: MenuProps) => {
    if (item.key === key) {
      label = item.label
      return
    } else if (item.children) {
      getLabel(key, item.children)
    }
  })
  return label
}