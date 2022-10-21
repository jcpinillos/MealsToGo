import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { SafeArea } from '../../components/utility/safe-area.component';
import { theme } from '../theme';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

// restaurantsRequest();

const TAB_ICON_FOCUSED = {
    Restaurants: 'restaurant',
    Settings: 'list',
    Map: 'map',
};

const TAB_ICON = {
    Restaurants: 'restaurant-outline',
    Settings: 'list-outline',
    Map: 'map-outline',
};

const Settings = () => {
    return (
        <SafeArea>
            <Text>Settings!</Text>
        </SafeArea>
    );
};

const createScreenOptions = ({ route }) => {
    return {
        tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
                name={
                    focused
                        ? TAB_ICON_FOCUSED[route.name]
                        : TAB_ICON[route.name]
                }
                size={size}
                color={color}
            />
        ),
        tabBarActiveTintColor: theme.colors.ui.primary,
        tabBarInactiveTintColor: theme.colors.ui.secondary,
    };
};

const MyTabs = () => {
    return (
        <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
                name="Restaurants"
                component={RestaurantsNavigator}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export const AppNavigator = () => (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
);
