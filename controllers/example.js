export default class Example {
  constructor() {}

  welcome(ctx) {
    ctx.log.info('welcome logging example');
    ctx.render({json: {welcome: 'I ♥ Mojolicious'}});
  }

  async useRequestBody(ctx) {
    ctx.log.info('API Request');

    const reqBody = await ctx.req.json();

    if (Object.keys(reqBody).length) {
      const appName = ctx.appName();

      ctx.render({
        json: {
          success: 1,
          message: `Welcome to ${appName}`
       }
     })
    } else {
      ctx.render({
        json: {
          success: 0,
          message: "Your request is NOT successful"
        }
      })
    }
  }

  async useFeatures(ctx) {
    ctx.log.info('API Request using features');
    const sillyString = ctx.sillyString();
    const randomNumber = ctx.randomNumber();

    const controller = ctx.stash.controller;
    const action = ctx.stash.action;
    ctx.render({
      json: {
        success: 1,
        message: `Controller: ${controller}, action: ${action}`,
        sillyString: sillyString,
        randomNumber: randomNumber,
      }
    })
  }
}