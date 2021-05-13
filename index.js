import mojo from '@mojojs/mojo';
import sillyStringPlugin from './plugins/silly-string.js';

const app = mojo();

app.addHelper('appName', ctx => {
  return ctx.config.appName ?? 'MojoJS Demo';
});
app.addHelper('randomNumber', ctx => {
  return Math.floor(Math.random() * 1000);
});

app.plugin(sillyStringPlugin);

app.get('/').to("example#welcome");

const under = app.under('/api');

under.post('/test').to("example#useRequestBody");
under.post('/stash').to("example#useFeatures");
under.post('/plugin').to("example#usePlugin");

app.start();
