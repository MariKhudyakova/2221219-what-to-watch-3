import { useNavigate } from 'react-router-dom';
import { ChangeEventHandler, useState } from 'react';
import Rating from '../rating/Rating.tsx';
import { useAppDispatch } from '../../hooks/app-hooks.ts';
import { sendComment } from '../../redux/api-actions.ts';
import { CommentLength } from '../../const.ts';

export type ReviewFormProps = {
  id: string;
};

const ReviewForm = ({ id }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRatingChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setRating(parseInt(evt.target.value, 10));
  };

  const validate = () => rating !== 0 && comment.length <= CommentLength.MAX && comment.length >= CommentLength.MIN;

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (
    evt,
  ) => {
    setComment(evt.target.value);
  };

  const handleSubmit = () => {
    dispatch(sendComment({ comment, rating, id }));
    navigate(`/films/${id}`);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating setRating={handleRatingChange} />

        <div className="add-review__text">
          <textarea
            onChange={handleCommentChange}
            className="add-review__textarea"
            name="comment"
            id="comment"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="button" onClick={handleSubmit} disabled={!validate()}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
