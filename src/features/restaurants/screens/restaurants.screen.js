import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { isPropertySignature } from 'typescript';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';

// margin-top: ${StatusBar.currentHeight}px;
const RestaurantListContainer = styled.View`
    flex: 1;
    ${({ theme }) => `
        padding: ${theme.space.md};
        background-color: ${theme.colors.brand.secondary};
    `}
`;

const Loading = styled(ActivityIndicator)`
    flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

export const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    //console.log(restaurants);

    return (
        <SafeArea>
            <Search />
            <RestaurantListContainer>
                {isLoading && (
                    <Loading
                        animating={true}
                        size="large"
                        color={({ theme }) => theme.colors.ui.primary}
                    />
                )}
                {!isLoading && (
                    <RestaurantList
                        data={restaurants}
                        renderItem={({ item }) => {
                            //console.log(item);
                            return (
                                <Spacer
                                    position="bottom"
                                    size="md"
                                >
                                    <RestaurantInfoCard restaurant={item} />
                                </Spacer>
                            );
                        }}
                        keyExtractor={(item) => item.name}
                    />
                )}
            </RestaurantListContainer>
        </SafeArea>
    );
};
