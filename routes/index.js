const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
	 data={
    title: 'koa2 json'
 };
  ctx.body = data;
})

router.post('/post',function(ctx,next){  
 let id =ctx.request.body.id || 0;  
 ctx.body = "you post data:"+JSON.stringify({id:id});  
}); 

module.exports = router
