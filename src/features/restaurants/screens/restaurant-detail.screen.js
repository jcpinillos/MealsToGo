import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const icon = (name, props) => {
    return (
        <List.Icon
            {...props}
            icon={name}
        />
    );
};

export const RestaurantDetailScreen = ({ route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);
    const { restaurant } = route.params;
    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props) => icon('bread-slice', props)}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Classic Breakfast" />
                </List.Accordion>
                <List.Accordion
                    title="Lunch"
                    left={(props) => icon('hamburger', props)}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Burger w/ Fries" />
                    <List.Item title="Steak Sandwich" />
                    <List.Item title="Mushroom Soup" />
                </List.Accordion>
                <List.Accordion
                    title="Dinner"
                    left={(props) => icon('food', props)}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Spaghetti Bolognese" />
                    <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                    <List.Item title="Steak Frites" />
                </List.Accordion>
                <List.Accordion
                    title="Drinks"
                    left={(props) => icon('cup', props)}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="Coffee" />
                    <List.Item title="Tea" />
                    <List.Item title="Modelo" />
                    <List.Item title="Coke" />
                    <List.Item title="Fanta" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    );
};
