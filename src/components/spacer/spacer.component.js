import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const sizeVariant = {
    zero: 0,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
};

const positionVariant = {
    top: 'marginTop',
    left: 'marginLeft',
    right: 'marginRight',
    bottom: 'marginBottom',
};

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.spaceArray[sizeIndex];

    return `${property}:${value}`;
};

const SpacerView = styled.View`
    ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
    position: 'top',
    size: 'small',
};
