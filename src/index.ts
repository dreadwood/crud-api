import http from 'node:http';
import {defaultPort, serverListenMessage} from './const';
import {router} from './router';

const port = process.env.PORT ? Number(process.env.PORT) : defaultPort;

const server = http.createServer(router);

server.listen(port, () => {
	console.info(`${serverListenMessage}: ${port}`);
});

//
// server.on('error', ({message}) => {
// 	console.error(`Ошибка: ${message}`);
// });

//
// server.on('request', (req, res) => {
// 	console.log('test');
// 	console.log(req.host:);
// });

