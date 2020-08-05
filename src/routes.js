import { createStackNavigator } from 'react-navigation';
// createStackNavigator faz com que possamos fazer uma navegação por botões. Existe por outras tbm.

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator(
    {
        Main, Product
    }, 
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#DA552F' // cor do background do header
            },
            headerTintColor: '#FFF' // cor do texto dentro do header
        },
    });
