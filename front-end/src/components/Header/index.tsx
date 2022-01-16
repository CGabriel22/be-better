import { T } from '@components/T';
import Link from 'next/link';

import { Header_ } from './Header';

interface HeaderProps {
  // propriedades
  title: string;
  page: 'About' | 'Home';
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <Header_>
      <T type="h3" weight={700} as="h1">
        {props.title}
      </T>
      <nav>
        {props.page == 'Home' ? (
          <Link href="/about" passHref>
            <T type="link" as="a">
              About
            </T>
          </Link>
        ) : (
          <Link href="/" passHref>
            <T type="link" as="a">
              Home
            </T>
          </Link>
        )}
      </nav>
    </Header_>
  );
};

export default Header;
