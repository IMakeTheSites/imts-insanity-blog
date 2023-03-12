import Link from 'next/link';

function NavBar() {
  return (
    <nav className="px-2 py-1 text-sm flex">
      <ul className="gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
