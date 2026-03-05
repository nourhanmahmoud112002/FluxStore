import { AppImages } from '../assets/images';
import { ICategoryIconProps } from '../components/CategoryIcon/types';

export const HomeTabs: ICategoryIconProps[] = [
  {
    icon: AppImages.Women,
    label: 'Home.tab1',
    selected: false,
    onPress: () => {},
  },
  {
    icon: AppImages.Men,
    label: 'Home.tab2',
    selected: false,
    onPress: () => {},
  },
  {
    icon: AppImages.Accessories,
    label: 'Home.tab3',
    selected: false,
    onPress: () => {},
  },
  {
    icon: AppImages.Beauty,
    label: 'Home.tab4',
    selected: false,
    onPress: () => {},
  },
];
