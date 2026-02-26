import { ICardProps } from '../Card/types';

export interface ICardsListProps {
  cards: ICardProps[];
  direction?: 'horizontal' | 'vertical';
}
