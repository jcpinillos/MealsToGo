import { mockImages, mocks } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject('not found');
        }
        resolve(mock);
    });
};

export const restaurantsTransform = ({ results = [] }) => {
    const camelizedResults = camelize(results);
    const mappedResults = camelizedResults.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[
                Math.ceil(Math.random() * (mockImages.length - 1))
            ];
        });

        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow:
                restaurant.openingHours && restaurant.openingHours.openNow,
            isClosedTemporarily:
                restaurant.businessStatus === 'CLOSED_TEMPORARILY',
        };
    });
    return mappedResults;
};

// restaurantsRequest()
//     .then(restaurantsTransform)
//     .then((transformedResponse) => {
//         //console.log(transformedResponse);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
