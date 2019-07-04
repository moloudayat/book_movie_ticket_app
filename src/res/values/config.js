import {
	DEVELOPMENT_LOCALHOST,
} from '../types/Env';

const env = process.env.ENV || DEVELOPMENT_LOCALHOST;

const config = {
	[DEVELOPMENT_LOCALHOST]: {
		serverURL: 'http://192.168.128.105:6001/',
	},
};

const finalConfig = {
	...config[env],
};

export default finalConfig;
