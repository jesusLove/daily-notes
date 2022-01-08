import { createContext } from "react";

const I18nContext = createContext({
  translate: () => "", // 获取键值
  getLocale: () => {}, // 获取语言
  setLocale: () => {}, // 设置语言
});

export default I18nContext;
