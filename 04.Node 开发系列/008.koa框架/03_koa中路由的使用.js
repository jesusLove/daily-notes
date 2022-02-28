const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.response.body = "Hello world";
});

app.listen(8080, () => {
  console.log("服务启动了~");
});
