import { SyntheticEvent } from 'react';
import { TabType } from '../../const.ts';

type TabLinkProps = {
  tabType: TabType;
  activeTab: TabType;
  onClick: (evt: SyntheticEvent) => void;
};

export default function TabLink({ tabType, activeTab, onClick }: TabLinkProps) {
  return (
    <li
      className={`film-nav__item ${
        tabType === activeTab ? 'film-nav__item--active' : ''
      }`}
      onClick={onClick}
      id={tabType}
    >
      <a className="film-nav__link">{tabType}</a>
    </li>
  );
}
