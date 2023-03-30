import React from 'react';
import cl from 'classnames';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from 'react-icons/ai';
import styles from './SocialNetworks.module.scss';
import ScreenEgg from '../ScreenEgg/ScreenEgg';

const socialNetworks = [
  {
    id: 1,
    href: 'https://www.facebook.com/imakethesites',
    icon: AiFillFacebook,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/company/i-make-the-sites/',
    icon: AiFillLinkedin,
  },
  {
    id: 3,
    href: 'https://twitter.com/imakethesites',
    icon: AiFillTwitterSquare,
  },
  {
    id: 4,
    href: 'https://github.com/IMakeTheSites',
    icon: AiFillGithub,
  },
];

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg type="left">
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id} className={styles.listItem}>
            <a
              href={socialNetwork.href}
              target="_blank"
              className={styles.listLink}
              rel="noreferrer"
            >
              {React.createElement(socialNetwork.icon, {
                color: 'black',
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
