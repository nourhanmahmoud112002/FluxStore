import { Animated, FlatList, View } from 'react-native';
import { OnBoardingData } from '../../mock/OnBoardingData';
import { styles } from './styles';
import OnboardingItem from './components/onboardingItem';
import { Paginator, Button } from '../../components';
import { useRef, useState } from 'react';
import { useAppTranslation } from '../../translation';
import { navigate, Routes } from '../../navigation';
import { MMKV_KEYS, storeData } from '../../common';

const OnBoarding = () => {
  const { t } = useAppTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      setCurrentIndex(viewableItems[0].index);
    },
  ).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <View style={styles.topBackground} />
      <View style={styles.bottomBackground} />
      <FlatList
        data={OnBoardingData}
        renderItem={item => <OnboardingItem {...item.item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => item.id.toString()}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      <Paginator data={OnBoardingData} currentIndex={currentIndex} />
      <Button
        onPress={() => {
          if (currentIndex < OnBoardingData.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
          } else {
            navigate(Routes.SIGNUP);
            storeData(MMKV_KEYS.FINISH_ONBOARDING, true);
          }
        }}
        label={t('Onboarding.button')}
        size="medium"
        variant="secondary"
      />
    </View>
  );
};
export default OnBoarding;
