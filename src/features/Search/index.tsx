import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon, CardsList, SubHeader } from '../../components';
import { styles } from './styles';
import { CardsListMock } from '../../mock/Cards';
import { navigate, Routes } from '../../navigation';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackIcon />
        <View style={styles.subHeaderContainer}>
          <SubHeader
            title="Popular this week"
            subTitle="Show all"
            onPressSubTitle={() => {
              navigate(Routes.PRODUCTS);
            }}
          />
        </View>
        <CardsList cards={CardsListMock} direction="horizontal" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Search;
