import './global.sass';
import App from './components/app/app';
import { data } from './components/constants/data';

const APP = new App(data);
APP.start();
