import SvgIcon from '@/components/SvgIcon'

// 批量加载 svg 图标
const svgRequire = require.context('./svg', false, /\.svg$/)

svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
