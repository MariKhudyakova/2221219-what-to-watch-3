import { ChangeEventHandler } from 'react';
import Star from './Star.tsx';

type RatingProps = {
  setRating: ChangeEventHandler<HTMLInputElement>;
};

export default function Rating({ setRating }: RatingProps) {
  return (
    <div className="rating">
      <div className="rating__stars">
        {Array(10).fill(0).map((_item, index) => (
          <Star key={`star-${index + 1}`} value={index + 1} onChange={setRating} />
        )).reverse()}
      </div>
    </div>
  );
}
