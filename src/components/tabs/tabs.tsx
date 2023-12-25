import { TabType } from '../../const.ts';
import Overview from './overview.tsx';
import Details from './details.tsx';
import Reviews from './reviews.tsx';
import TabLink from './tab-link.tsx';
import { SyntheticEvent, useState } from 'react';
import { FilmCardType } from '../../types/film-types.ts';

type TabsProps = {
  filmCard: FilmCardType;
};
export default function Tabs({ filmCard }: TabsProps) {
  const [activeTab, setActiveTab] = useState(TabType.Overview);
  const tabs = {
    [TabType.Overview]: <Overview filmCard={filmCard} />,
    [TabType.Details]: <Details filmCard={filmCard} />,
    [TabType.Reviews]: <Reviews />,
  };
  const handleTabChange = (evt: SyntheticEvent) => {
    const targetId = evt.currentTarget.id as TabType;
    if (targetId) {
      setActiveTab(targetId);
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <TabLink
            tabType={TabType.Overview}
            activeTab={activeTab}
            onClick={handleTabChange}
            key={TabType.Overview}
          />
          <TabLink
            tabType={TabType.Details}
            activeTab={activeTab}
            onClick={handleTabChange}
            key={TabType.Details}
          />
          <TabLink
            tabType={TabType.Reviews}
            activeTab={activeTab}
            onClick={handleTabChange}
            key={TabType.Reviews}
          />
        </ul>
      </nav>
      {tabs[activeTab]}
    </div>
  );
}
