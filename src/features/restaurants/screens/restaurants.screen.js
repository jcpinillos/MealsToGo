import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
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

export const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    const [isToggled, setIsToggled] = useState(false);
    //const { favourites } = useContext(FavouritesContext);
    //console.log(favourites);

    return (
        <SafeArea>
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggled={() => setIsToggled(!isToggled)}
            />
            {isToggled && <FavouritesBar />}
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
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate(
                                            'RestaurantDetail',
                                            { restaurant: item }
                                        )
                                    }
                                >
                                    <Spacer
                                        position="bottom"
                                        size="md"
                                    >
                                        <RestaurantInfoCard restaurant={item} />
                                    </Spacer>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item) => item.name}
                    />
                )}
            </RestaurantListContainer>
        </SafeArea>
    );
};
