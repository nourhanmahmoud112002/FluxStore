import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import { ISheetProps } from './types';
import { styles } from './styles';
import Button from '../Button';

const Sheet = ({
  bottomSheetRef,
  icon,
  title,
  subTitle,
  buttonLabel,
  onButtonPress,
}: ISheetProps) => {
  const handleSheetChanges = useCallback((index: number) => {
    console.log('BottomSheet index changed to:', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      enableDynamicSizing={true}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.iconContainer}>
            <Image source={icon} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <Button label={buttonLabel} onPress={onButtonPress} size="medium" />
      </BottomSheetView>
    </BottomSheetModal>
  );
};
export default Sheet;
