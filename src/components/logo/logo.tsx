import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

type LogoProps = {
  additionalClass?: string;
};

export default function Logo({ additionalClass }: LogoProps) {
  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={`logo__link ${additionalClass || ''}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
