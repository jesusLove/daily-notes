import SvgIcon from '@/components/SvgIcon'
import * as ELIcons from '@element-plus/icons-vue'

// 批量加载 svg 图标
const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))
export default (app) => {
  app.component('svg-icon', SvgIcon)

  for (const name in ELIcons) {
    app.component(name, ELIcons[name])
  }
}
