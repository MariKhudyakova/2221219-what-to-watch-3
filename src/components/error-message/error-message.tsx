import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks.ts';
import { getHasError } from '../../redux/films-slice/selectors.ts';
import { dropError } from '../../redux/films-slice/films-slice.ts';
import './error-message.css';

export default function ErrorMessage() {
  const hasError = useAppSelector(getHasError);
  const dispatch = useAppDispatch();

  return hasError ? (
    <div className="error-message">
      An error has occurred. Please try again later
      <button className="close-button" onClick={() => dispatch(dropError())}>
        Close
      </button>
    </div>
  ) : null;
}
