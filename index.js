/** @format */

import { AppRegistry } from 'react-native'; // AppRegistry se insere apenas uma vez na aplicação. Serve para registrar um arquivo para ser o inical da aplicação. E o arquivo que ele está setando para ser o inicial é o App.js
import App from './src';
import { name as appName } from './app.json'; // importa o nome do projeto para ser exibido na tela

AppRegistry.registerComponent(appName, () => App);