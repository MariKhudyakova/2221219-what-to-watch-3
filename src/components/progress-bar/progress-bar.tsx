/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { getTimeLeft } from '../../utils/get-time.ts';

type PlayButtonProps = {
  duration: number;
  currentTime: number;
};

function ProgressBar({ duration, currentTime }: PlayButtonProps) {
  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress
          className="player__progress"
          value={currentTime}
          max={duration}
        />
        <div className="player__toggler" style={{left: `${(currentTime / duration) * 100}%`}}>
          Toggler
        </div>
      </div>
      <div className="player__time-value">
        {getTimeLeft(duration - currentTime)}
      </div>
    </div>
  );
}

export default React.memo(ProgressBar);
