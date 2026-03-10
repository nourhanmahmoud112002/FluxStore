import { Text, View } from 'react-native';
import { CardsList, Header } from '../../components';
import { CardsListMock2 } from '../../mock/Cards';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTranslation } from '../../translation';
import { AppImages } from '../../assets/images';
import { goBack } from '../../navigation';

const Products = () => {
  const { t } = useAppTranslation();
  const resultsCount = CardsListMock2.length;
  const title = 'Dresses';
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={title}
        leftIcon={AppImages.InternalBack}
        onLeftIconPress={() => {
          goBack();
        }}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.foundResultsText}>
          {t('Products.foundResults', { count: resultsCount })}
        </Text>
      </View>
      <CardsList cards={CardsListMock2} direction="vertical" />
    </SafeAreaView>
  );
};
export default Products;
