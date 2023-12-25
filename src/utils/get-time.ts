import { HOUR_MINUTES_COUNT, TWO_HOUR_MINUTES_COUNT } from '../const.ts';

export const getFormattedDate = (date: string): string => {
  const formattedDate = new Date(date).toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
  return formattedDate;
};

export const getRunTime = (time: number) => {
  const hours = Math.floor(time / HOUR_MINUTES_COUNT);
  const minutes = time % HOUR_MINUTES_COUNT;
  return `${hours}h ${minutes}m`;
};

export const getTimeLeft = (timeLeft: number) => {
  const hours = Math.floor(timeLeft / TWO_HOUR_MINUTES_COUNT);
  const minutes = Math.floor((timeLeft % TWO_HOUR_MINUTES_COUNT) / HOUR_MINUTES_COUNT);
  const seconds = Math.floor(timeLeft % HOUR_MINUTES_COUNT);
  if (hours) {
    return `-${hours}:${minutes}:${seconds}`;
  }
  return `-${minutes}:${seconds}`;
};
