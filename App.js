import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { SafeArea } from './src/components/utility/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
// import { restaurantsRequest } from './src/services/restaurants/restaurants.service';

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

const Map = () => (
    <SafeArea>
        <Text>Map</Text>
    </SafeArea>
);

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
                component={RestaurantsScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
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

export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <LocationContextProvider>
                    <RestaurantsContextProvider>
                        <NavigationContainer>
                            <MyTabs />
                        </NavigationContainer>
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"></ExpoStatusBar>
        </>
    );
}
