import { ImageSourcePropType } from 'react-native';

export interface IOnBoardingItemProps {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType;
}