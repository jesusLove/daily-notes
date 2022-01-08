# 本地存储

浏览器本地存储分为：Cookie、WebStorage、IndexedDB。其中 WebStorage 分为 localStorage 和 sessionStorage 。

## Cookie

作用：弥补 HTTP 状态管理上的不足。并不是用来存储的。

HTTP 是无状态协议，客户端向服务器发送请求，服务器返回响应后。下次请求服务器端就不知道客户端是谁了？

所以有了 Cookie。相同域名下的网络请求都携带 Cookie 信息，服务器拿到 Cookie 就知道客户端状态了。

Cookie 用来做状态存储，有很多致命缺陷：

- 容量缺陷：只能存储 4KB
- 性能缺陷：同域名下所有请求都携带 Cookie 信息，造成资源浪费。
- 安全缺陷：明文传输，容易被非法截获篡改。HttpOnly 为 false 时，可以直接通过 JS 读取 Cookie 信息。

## Local Stroage

localStorage 和 Cookie 一样是针对域名的存储。和 Cookie 有很多区别：

- 容量：容量上限 5MB，持久化数据存储。
- 只存在于客户端，不参与服务器通信
- 接口封装：setItem 和 getItem 进行操作

应用场景：存储稳定资源，如网站 logo， base64 格式资源等。

## Session Stroage

具有 localStorage 特点，区别在于存活时间仅在当前会话，不进行持久化存储。会话结束（页面关闭），sessionStorage 就不存在了。

应用场景

- 表单信息缓存，页面刷新表单数据也不丢失。
- 存储本次浏览记录。

## IndexedDB

运行在浏览器上的非关系型 DB，本质是数据库。

除了拥有数据库的特性外：键值对存储、异步操作、受同源策略影响。
