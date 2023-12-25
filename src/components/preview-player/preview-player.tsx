import { useEffect, useRef, useState } from 'react';
import { FilmType } from '../../types/film-types.ts';

type VideoPlayerProps = {
  film: FilmType;
  activeFilm: string | null;
};

export default function ReviewPlayer({ film, activeFilm }: VideoPlayerProps) {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = playerRef.current;
    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);
    return () =>
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
  }, []);

  useEffect(() => {
    const playerElement = playerRef.current;

    if (!playerElement || !isLoaded) {
      return;
    }

    if (activeFilm === film.id) {
      playerElement.play();
      return;
    }

    playerElement.pause();
    playerElement.src = film.previewVideoLink;
  }, [activeFilm, film.id, film.previewVideoLink, isLoaded]);

  return (
    <video style={{ borderRadius: '5px' }} width="280" height="175" poster={film.previewImage} ref={playerRef} src={film.previewVideoLink} muted loop />
  );
}
