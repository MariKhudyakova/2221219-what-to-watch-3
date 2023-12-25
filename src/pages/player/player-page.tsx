import { Helmet } from 'react-helmet-async';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks.ts';
import { getFilmCard } from '../../redux/films-slice/selectors.ts';
import { fetchFilmDataAction } from '../../redux/api-actions.ts';
import PlayButton from '../../components/buttons/play-button.tsx';
import PauseButton from '../../components/buttons/pause-button.tsx';
import ExitLink from '../../components/exit-link/exit-link.tsx';
import ProgressBar from '../../components/progress-bar/progress-bar.tsx';
import FullScreenButton from '../../components/full-screen-button/full-screen-button.tsx';

function PlayerPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilmCard);

  const playerRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setSeconds] = useState(0);

  const handleDataLoaded = () => {
    setIsLoaded(true);
    setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 200);
  };

  const handlePlayPauseClick = useCallback(() => {
    setIsPlaying((prevState) => !prevState);
  }, []);

  const handleFullScreenClick = useCallback(() => {
    const playerElement = playerRef.current;
    if (!playerElement || !isLoaded) {
      return;
    }
    playerElement.requestFullscreen();
  }, [isLoaded]);

  const getFilmDuration = () => {
    const playerElement = playerRef.current;
    if (!playerElement || !isLoaded) {
      return 0;
    }
    return playerElement.duration;
  };

  const getFilmCurrentTime = () => {
    const playerElement = playerRef.current;
    if (!playerElement || !isLoaded) {
      return 0;
    }
    return playerElement.currentTime;
  };

  useEffect(() => {
    const playerElement = playerRef.current;
    if (!playerElement || !isLoaded) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
    } else {
      playerElement.pause();
    }
  }, [isLoaded, isPlaying]);

  useEffect(() => {
    if (id && id !== film?.id) {
      dispatch(fetchFilmDataAction(id));
    }

    const playerElement = playerRef.current;
    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);
    return () =>
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
  }, [dispatch, film?.id, id]);

  if (!film) {
    return null;
  }

  const TITLE = `WTW. Watch the movie ${film?.name}`;

  return (
    <div className="player">
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>

      <video
        ref={playerRef}
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
      />
      <ExitLink />

      <div className="player__controls">
        <ProgressBar
          duration={getFilmDuration()}
          currentTime={getFilmCurrentTime()}
        />

        <div className="player__controls-row">
          {isPlaying ? (<PauseButton onClick={handlePlayPauseClick} />) : (<PlayButton onClick={handlePlayPauseClick} />)}
          <div className="player__name">{film.name}</div>
          <FullScreenButton onClick={handleFullScreenClick} />
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
