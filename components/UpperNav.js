import React, { useState } from 'react';
import classes from '../styles/UpperNav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/IMTSlogo.png';
import { AiOutlineMail } from 'react-icons/ai';

function UpperNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav className="bg-light-green w-full min-h-1 px-4 py-5 justify-between relative ">
        <div className="flex flex-row gap-1">
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
              <Link href="/">
                <Image
                  src={Logo}
                  alt="I Make the Sites Logo"
                  width={45}
                  height={56}
                />
              </Link>
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
            <li className="text-white text-md font-bold">
              <a href="mailto: imakethesites@gmail.com">
                {React.createElement(AiOutlineMail, {
                  color: 'black',
                  size: 40,
                })}
              </a>
            </li>
            {/* <li>
              <a href="https://www.facebook.com/imakethesites" target="_blank">
                <svg
                  className={classes.Uppernav__icons__icon}
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53945 2.65667H8V0.112667C7.74802 0.078 6.88143 0 5.87218 0C3.76635 0 2.32381 1.32467 2.32381 3.75933V6H0V8.844H2.32381V16H5.1729V8.84467H7.40272L7.75669 6.00067H5.17224V4.04133C5.1729 3.21933 5.39422 2.65667 6.53945 2.65667Z"
                    fill="white"
                  />
                </svg>{' '}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/i-make-the-sites/"
                target="_blank"
              >
                <svg
                  className={classes.Uppernav__icons__icon}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.58143 16H0.264286V5.31762H3.58143V16ZM1.92107 3.86044C0.860357 3.86044 0 2.98185 0 1.92111C7.59214e-09 1.4116 0.202398 0.92296 0.562669 0.562681C0.92294 0.202403 1.41157 0 1.92107 0C2.43057 0 2.9192 0.202403 3.27947 0.562681C3.63974 0.92296 3.84214 1.4116 3.84214 1.92111C3.84214 2.98185 2.98143 3.86044 1.92107 3.86044ZM15.9964 16H12.6864V10.7999C12.6864 9.56057 12.6614 7.97125 10.9618 7.97125C9.23714 7.97125 8.97286 9.31771 8.97286 10.7106V16H5.65929V5.31762H8.84071V6.77479H8.88714C9.33 5.93549 10.4118 5.04976 12.0257 5.04976C15.3829 5.04976 16 7.26052 16 10.132V16H15.9964Z"
                    fill="white"
                  />
                </svg>{' '}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/imakethesites" target="_blank">
                <svg
                  className={classes.Uppernav__icons__icon}
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1498 3.48905C16.1612 3.64217 16.1612 3.79532 16.1612 3.94844C16.1612 8.61873 12.4493 14 5.66499 14C3.57488 14 1.63326 13.4203 0 12.4141C0.296966 12.4469 0.582471 12.4578 0.890863 12.4578C2.61546 12.4578 4.20305 11.9 5.47083 10.9485C3.84899 10.9156 2.48985 9.89845 2.02156 8.49844C2.25001 8.53123 2.47842 8.55311 2.71829 8.55311C3.0495 8.55311 3.38074 8.50934 3.6891 8.43282C1.99875 8.10467 0.730936 6.68281 0.730936 4.96562V4.92189C1.22204 5.18439 1.79315 5.34845 2.39844 5.3703C1.40478 4.73591 0.753788 3.65311 0.753788 2.4281C0.753788 1.77186 0.936496 1.1703 1.25631 0.645296C3.07232 2.78904 5.80203 4.18902 8.86293 4.34217C8.80583 4.07967 8.77155 3.80626 8.77155 3.53282C8.77155 1.58592 10.4162 0 12.4607 0C13.5228 0 14.4822 0.426561 15.1561 1.11562C15.9898 0.962507 16.7893 0.66718 17.4975 0.262502C17.2233 1.08283 16.6409 1.7719 15.8756 2.20937C16.618 2.13284 17.3376 1.93592 18 1.66251C17.4975 2.36248 16.8693 2.9859 16.1498 3.48905Z"
                    fill="white"
                  />
                </svg>{' '}
              </a>
            </li>
            <li>
              <a href="https://github.com/IMakeTheSites" target="_blank">
                <svg
                  className={classes.Uppernav__icons__icon}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.01714 12.078C5.01714 12.14 4.94758 12.1896 4.85988 12.1896C4.76008 12.1989 4.69052 12.1493 4.69052 12.078C4.69052 12.0159 4.76008 11.9663 4.84778 11.9663C4.93851 11.957 5.01714 12.0066 5.01714 12.078ZM4.07661 11.9384C4.05544 12.0004 4.11593 12.0718 4.20665 12.0904C4.28528 12.1214 4.37601 12.0904 4.39415 12.0283C4.4123 11.9663 4.35484 11.895 4.26411 11.8671C4.18548 11.8454 4.09778 11.8764 4.07661 11.9384ZM5.41331 11.8857C5.3256 11.9074 5.26512 11.9663 5.27419 12.0377C5.28327 12.0997 5.3619 12.14 5.45262 12.1183C5.54032 12.0966 5.60081 12.0377 5.59173 11.9756C5.58266 11.9167 5.50101 11.8764 5.41331 11.8857ZM7.40323 0C3.20867 0 0 3.26608 0 7.56812C0 11.0079 2.11089 13.9514 5.12601 14.9874C5.5131 15.0587 5.64919 14.8137 5.64919 14.6121C5.64919 14.4198 5.64012 13.359 5.64012 12.7076C5.64012 12.7076 3.52319 13.1729 3.07863 11.7833C3.07863 11.7833 2.73387 10.8807 2.2379 10.6481C2.2379 10.6481 1.54536 10.1611 2.28629 10.1704C2.28629 10.1704 3.03931 10.2325 3.45363 10.9707C4.11593 12.1679 5.22581 11.8236 5.65827 11.6189C5.72782 11.1227 5.9244 10.7784 6.14214 10.5737C4.45161 10.3814 2.74597 10.1301 2.74597 7.14629C2.74597 6.29333 2.97581 5.86529 3.45968 5.3194C3.38105 5.11779 3.12399 4.28653 3.53831 3.21335C4.17036 3.01174 5.625 4.05081 5.625 4.05081C6.22984 3.87711 6.88004 3.78716 7.52419 3.78716C8.16835 3.78716 8.81855 3.87711 9.42339 4.05081C9.42339 4.05081 10.878 3.00864 11.5101 3.21335C11.9244 4.28964 11.6673 5.11779 11.5887 5.3194C12.0726 5.8684 12.369 6.29643 12.369 7.14629C12.369 10.1394 10.5877 10.3783 8.89718 10.5737C9.1754 10.8187 9.41129 11.2839 9.41129 12.0128C9.41129 13.0581 9.40222 14.3515 9.40222 14.6059C9.40222 14.8075 9.54133 15.0525 9.9254 14.9812C12.9496 13.9514 15 11.0079 15 7.56812C15 3.26608 11.5978 0 7.40323 0ZM2.93952 10.6977C2.9002 10.7287 2.90927 10.8001 2.96069 10.859C3.00907 10.9086 3.07863 10.9304 3.11794 10.89C3.15726 10.859 3.14819 10.7877 3.09677 10.7287C3.04839 10.6791 2.97883 10.6574 2.93952 10.6977ZM2.6129 10.4465C2.59173 10.4868 2.62198 10.5364 2.68246 10.5675C2.73085 10.5985 2.79133 10.5892 2.8125 10.5457C2.83367 10.5054 2.80343 10.4558 2.74294 10.4248C2.68246 10.4062 2.63407 10.4155 2.6129 10.4465ZM3.59274 11.5507C3.54435 11.591 3.5625 11.6841 3.63206 11.743C3.70161 11.8143 3.78931 11.8236 3.82863 11.774C3.86794 11.7337 3.8498 11.6406 3.78931 11.5817C3.72278 11.5104 3.63206 11.5011 3.59274 11.5507ZM3.24798 11.0947C3.1996 11.1258 3.1996 11.2064 3.24798 11.2777C3.29637 11.3491 3.37802 11.3801 3.41734 11.3491C3.46573 11.3088 3.46573 11.2281 3.41734 11.1568C3.375 11.0854 3.29637 11.0544 3.24798 11.0947Z"
                    fill="white"
                  />
                </svg>{' '}
              </a>
            </li> */}
            {/* </div> */}
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
        </div>
      </nav>
    </>
  );
}

export default UpperNav;
