import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CardsList,
  Header,
  ImageBackgroundCard,
  SubHeader,
  Tabs,
} from '../../components';
import { useAppTranslation } from '../../translation';
import { AppImages } from '../../assets/images';
import { styles } from './styles';
import { HomeTabs } from '../../mock/HomeTabs';
import { View, ScrollView } from 'react-native';
import { CardsListMock } from '../../mock/Cards';
import { navigate, Routes } from '../../navigation';

const Home = () => {
  const { t } = useAppTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title={t('Home.title')}
          leftIcon={'Menu'}
          onLeftIconPress={() => {}}
          rightIcon={'BellPin'}
          onRightIconPress={() => {}}
        />

        <View style={styles.tabsContainer}>
          <Tabs items={HomeTabs} />
        </View>
        <View style={styles.backgroundOneContainer}>
          <ImageBackgroundCard imageUri={AppImages.Banner} />
        </View>
        <View style={styles.subHeaderContainer}>
          <SubHeader
            title={t('Home.featuredProducts')}
            subTitle={t('Home.showAll')}
            onPressSubTitle={() => {
              navigate(Routes.PRODUCTS);
            }}
          />
        </View>
        <CardsList cards={CardsListMock} direction="horizontal" />
        <View style={styles.subHeaderContainer}>
          <SubHeader
            title={t('Home.topCollections')}
            subTitle={t('Home.showAll')}
            onPressSubTitle={() => {}}
          />
        </View>
        <View style={styles.banner}>
          <ImageBackgroundCard imageUri={AppImages.Banner} />
          <ImageBackgroundCard imageUri={AppImages.Banner} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
