/* eslint-disable react-refresh/only-export-components */
import React from 'react';

type PauseButtonProps = {
  onClick: () => void;
};

function PauseButton({ onClick }: PauseButtonProps) {
  return (
    <button type="button" className="player__play" onClick={onClick}>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </button>
  );
}

export default React.memo(PauseButton);
