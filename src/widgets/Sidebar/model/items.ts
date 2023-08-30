import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutSvg from 'shared/assets/icons/about.svg';
import MainSvg from 'shared/assets/icons/main.svg';
import ProfileSvg from 'shared/assets/icons/profile.svg';
import ArticleSvg from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainSvg,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    icon: AboutSvg,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    icon: ProfileSvg,
    text: 'Профиль',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    icon: ArticleSvg,
    text: 'Статьи',
    authOnly: true,
  },
];
