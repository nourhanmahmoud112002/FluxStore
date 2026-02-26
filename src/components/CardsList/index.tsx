import { FlatList, View } from 'react-native';
import { ICardsListProps } from './types';
import Card from '../Card';
import { styles } from './styles';
import { px } from '../../common';

const HorizontalSeparator = () => <View style={{ width: px(20) }} />;
const VerticalSeparator = () => <View style={{ height: px(29) }} />;

const CardsList = ({ cards, direction = 'horizontal' }: ICardsListProps) => {
  return (
    <FlatList
      data={cards}
      horizontal={direction === 'horizontal'}
      renderItem={({ item }) => <Card {...item} />}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={
        direction === 'horizontal'
          ? undefined
          : styles.verticalContainer
      }
      ItemSeparatorComponent={
        direction === 'horizontal' ? HorizontalSeparator : VerticalSeparator
      }
      columnWrapperStyle={
        direction === 'vertical' ? styles.columnWrapper : undefined
      }
      numColumns={direction === 'vertical' ? 2 : undefined}
    />
  );
};
export default CardsList;
