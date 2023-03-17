import Link from 'next/link';
import LowerNav from './LowerNav';
import UpperNav from './UpperNav';

function NavBar() {
  return (
    <>
      {/* <LowerNav /> */}
      <UpperNav />
      {/* <nav className="px-2 py-1 text-sm">
        <ul className="flex gap-2">
          <li className="text-lg font-extrabold">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
    </>
  );
}

export default NavBar;
