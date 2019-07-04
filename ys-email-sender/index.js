const server = require('./gitHook');
const { port } = require('./config');

if(server.server) {
	server.listen();
	console.log('webhook server listen (%d)\n', port);
} else {
	console.log('启动服务失败');
}

