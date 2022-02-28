const Koa = require("koa");

// ! 创建 app 对象
const app = new Koa();
// ! app.use 注册中间件；
app.use((ctx, next) => {
  ctx.response.body = "Hello world";
});
// ! 监听 8080 端口
app.listen(8080, () => {
  console.log("服务启动了~");
});
