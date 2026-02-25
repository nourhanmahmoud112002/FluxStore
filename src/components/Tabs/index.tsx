import { FlatList } from 'react-native';
import { ITabProps } from './types';
import CategoryIcon from '../CategoryIcon';
import { styles } from './styles';
import { useState } from 'react';
import { useAppTranslation } from '../../translation';

const Tabs = ({ items }: ITabProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useAppTranslation();
  return (
    <FlatList
      horizontal
      data={items}
      renderItem={({ item, index }) => (
        <CategoryIcon
          {...item}
          selected={index === selectedIndex}
          onPress={() => setSelectedIndex(index)}
          label={t(item.label)}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

export default Tabs;
