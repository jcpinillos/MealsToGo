import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
    background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${({ theme }) => theme.space.md};
    background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Address = styled.Text`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.ui.primary};
`;

export const Info = styled.View`
    padding: ${({ theme }) => theme.space.md};
`;

export const Rating = styled.View`
    flex-direction: row;
    padding-top: ${({ theme }) => theme.space.sm};
    padding-bottom: ${({ theme }) => theme.space.sm};
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Icon = styled.Image`
    height: 15px;
    width: 15px;
`;
