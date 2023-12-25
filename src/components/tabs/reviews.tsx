import UserReview from './review.tsx';
import { useAppSelector } from '../../hooks/app-hooks.ts';
import { getComments } from '../../redux/films-slice/selectors.ts';

export default function Reviews() {
  const comments = useAppSelector(getComments);
  return (
    <div className="film-card__reviews-col">
      {comments.map((comment) => (
        <UserReview key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
