# 浏览器缓存

- 强缓存
- 协商缓存
- 缓存位置

浏览器缓存：发送 HTTP 请求，不发送 HTTP 请求。

## 强缓存

检测强缓存的条件，在 HTTP1.0 和 HTTP1.1 中不同。HTTP1.0 采用过期时间 Expires 字段标识；HTTP1.1 采用 Cache-Control 字段标识。

### Expires

Expires 存在响应头中，告诉浏览器在什么时间之前数据有效。指定过期时间点

缺点：浏览器和服务器时间不一致时存在问题。

### Cache-Control

Cache-Control: max-age=3600 指定过期时长，3600 就是一小时内有效。

Cache-Control 为了适应更多场景，可以组合多个指令，常见属性如下：

- public: 浏览器和代理服务器都可以缓存
- private: 只有浏览器可以缓存
- no-cache: 跳过当前的强缓存，发送 HTTP 请求进行协商缓存
- no-store: 不进行任何形式缓存
- s-maxage: 针对代理服务器的缓存时间

## 协商缓存

强制缓存失效后，浏览器在请求头中携带相应的缓存 tag 向服务器发送请求。由服务器根据 tag 决定是否使用缓存，这就是协商缓存。

协商缓存的 tag 有两种：Last-Modified 和 ETag

### Last-Modified

最后修改时间。浏览器第一次发送请求后，服务器在响应头添加该字段。

浏览器再次请求时，在请求头添加 if-Modified-Since 字段，该字段的值就是上面 Last-Modified 携带的值。

服务器拿到 if-Modified-Since 字段值后，和服务器资源的最后修改时间对比：

- 如果请求头中的值小于最后修改时间，说明更新了。返回新的资源。
- 否则返回 304， 告诉浏览器直接使用缓存。

### ETag

服务器当前文件内容的唯一标识。如果资源内容改动 ETag 会改变。服务器会在响应头中返回给浏览器。

浏览器接收到 ETag 值，会在下次请求时将值放在 If-None-Match 字段中，发送给服务器。

服务器拿到 ETag 值和资源的 ETag 值对比：

- 如果两者一样，说明更新了。返回新的资源。
- 否则返回 304，告诉浏览器直接使用缓存。

### Last-Modified vs ETag 对比

- 精度上：ETag 优于 Last-Modified。后者精确到秒，资源修改时间变化即使内容不变缓存也失效。
- 性能上：Last-Modified 优于 ETag。前者仅记录时间点；后者需要根据内容生成 Hash 值。

## 缓存位置

浏览器缓存位置有四种，优先级从高到低：Service Worker、Memory Cache、Disk Cache、Push Cache。
