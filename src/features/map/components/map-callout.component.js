import React from 'react';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.component';
import { Text } from '../../../components/typography/text.component';
import { RestaurantCardCover } from '../../restaurants/components/restaurant-info-card.styles';

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => {
    console.log(restaurant.photos[0]);
    return (
        <>
            <CompactRestaurantInfo restaurant={restaurant} />
        </>
    );
};
