import Link from "next/link";
import Logo from './logo'

import classes from './main-navigatoin.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul className={classes.navlist}>
          <li>
            <Link className={classes.navlink} href="/posts">Posts</Link>
          </li>
          <li>
            <Link className={classes.navlink} href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
