import Link from 'next/link';

function NavBar() {
  return (
    <nav className="px-2 py-1 text-sm">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
