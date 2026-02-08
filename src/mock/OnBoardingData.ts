import { AppImages } from "../assets/images";
import { IOnBoardingItemProps } from "../features/OnBoarding/components/onboardingItem/types";

export const OnBoardingData:IOnBoardingItemProps[] = [
  {
    id: 1,
    title: 'Onboarding.title1',
    description: 'Onboarding.subTitle1',
    image: AppImages.OnBoarding1,
  },
  {
    id: 2,
    title: 'Onboarding.title2',
    description: 'Onboarding.subTitle2',
    image: AppImages.OnBoarding2,
  },
  {
    id: 3,
    title: 'Onboarding.title3',
    description: 'Onboarding.subTitle3',
    image: AppImages.OnBoarding3,
  },
];