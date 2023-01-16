import {type IncomingMessage, type ServerResponse} from 'node:http';
import {ErrorMessages, HttpMethods, StatusCode} from '../const';
import {store} from '../store';
import {type InputUser} from '../types/input-user';
import {validationData} from '../utils';

const getReqData = async (req: IncomingMessage) => new Promise((resolve, reject) => {
	try {
		let data = '';

		req.on('data', (chunk: Buffer) => {
			data += chunk.toString();
		});

		req.on('end', () => {
			resolve(data);
		});
	} catch (error) {
		reject(error);
	}
});

export const user = async (req: IncomingMessage, res: ServerResponse) => {
	switch (req.method) {
		case HttpMethods.GET: {
			const users = store.getUsers();

			res.writeHead(StatusCode.OK, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(users));
			break;
		}

		case HttpMethods.POST: {
			const reqData = await getReqData(req) as string;
			const userData = JSON.parse(reqData) as Record<string, unknown>;

			if (!validationData(userData)) {
				res.writeHead(StatusCode.BAD_REQUEST);
				res.end(JSON.stringify({
					error: ErrorMessages.BAD_REQUEST,
				}));
			}

			const result = store.createUser(userData as InputUser);

			if (result) {
				res.writeHead(StatusCode.CREATED, {'Content-Type': 'application/json'});
				res.end(JSON.stringify(userData));
			}

			res.writeHead(StatusCode.INTERNAL_SERVER_ERROR, {'Content-Type': 'application/json'});
			res.end(JSON.stringify({
				error: ErrorMessages.INTERNAL_SERVER_ERROR,
			}));
			break;
		}

		default:
			res.writeHead(StatusCode.NOT_FOUND, {'Content-Type': 'application/json'});
			res.end(JSON.stringify({
				error: ErrorMessages.NOT_FOUND,
			}));
			break;
	}
};
