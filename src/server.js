const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '54.179.77.221',
    routes: {
        cors: {
          origin: ['*'],
        },
      },
  });
 
  server.route(routes);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();