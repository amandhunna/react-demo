import { createContext } from 'react';
import config from '../config';

const LoginContext = createContext(config.DEFAULTLOGINFLAG);

export { LoginContext }