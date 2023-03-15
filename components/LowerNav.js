import Image from 'next/image';
import Link from 'next/link';
import Logo from '../pages/IMTSlogo.png';
import classes from '../styles/LowerNav.module.scss';
import { useState } from 'react';

function LowerNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className={classes.LowerNav}>
      <div className={classes.LowerNav__logo}>
        <Link href="/">
          <Image
            src={Logo}
            alt="I Make the Sites Logo"
            width={99}
            height={111}
          />
        </Link>
      </div>
      <ul
        className={
          isNavOpen
            ? `${classes.LowerNav__list} ${classes.open}`
            : classes.LowerNav__list
        }
      >
        <li
          className={classes.LowerNav__list__item}
          onClick={(e) => setIsNavOpen(false)}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={classes.LowerNav__list__item}
          onClick={(e) => setIsNavOpen(false)}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={classes.LowerNav__list__item}
          onClick={(e) => setIsNavOpen(false)}
        >
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li
          className={classes.LowerNav__list__item}
          onClick={(e) => setIsNavOpen(false)}
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          className={classes.LowerNav__list__item}
          onClick={(e) => setIsNavOpen(false)}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <svg
        className={classes.LowerNav__menu__icon}
        width="27"
        height="17"
        viewBox="0 0 27 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={(e) => setIsNavOpen(!isNavOpen)}
      >
        <path
          d="M26 8.33337H1"
          stroke="black"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26 1H1"
          stroke="black"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26 15.6667H1"
          stroke="black"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </nav>
  );
}

export default LowerNav;
