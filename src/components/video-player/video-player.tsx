import { useEffect, useRef, useState } from 'react';
import { FilmType } from '../../types/film-types.ts';

type VideoPlayerProps = {
  film: FilmType;
};

export default function VideoPlayer({film}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);

    return () => {
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
    };
  }, []);

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!isLoaded || !playerElement) {
      return;
    }

    if (film.previewVideoLink) {
      playerElement.play();
      return;
    }

    playerElement.load();
  }, [film.previewVideoLink, isLoaded]);

  return (
    <video poster={film.previewImage} width="327" height="218" ref={videoRef} muted>
      <source src={film.previewVideoLink} />
    </video>
  );
}
