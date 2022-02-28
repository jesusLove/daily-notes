const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

router.put("/", (ctx, next) => {
  ctx.response.body = "Put request";
});
