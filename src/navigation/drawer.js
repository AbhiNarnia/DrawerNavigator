import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import Home from '../screens/home';
import Search from '../screens/search';
import DrawerContent from '../screens/drawercontent';
import Settings from '../screens/Settings';
import AboutUs from '../screens/AboutUs';


const Drawer = createDrawerNavigator();
const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName=""
      headerMode={false}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
};
export default Main;
