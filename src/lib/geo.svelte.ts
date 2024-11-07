import ridingShapes from './ridingShapes.json';

type FeatureType = string;

type RidingShape = {
    [key: string]: {
        type: FeatureType;
        geometry: {
            type: string;
            coordinates: number[][][][];
        };
        properties: {
            district_name: string;
        };
    };
};

export const ridingShapeData: RidingShape = ridingShapes;