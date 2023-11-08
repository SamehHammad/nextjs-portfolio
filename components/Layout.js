// fonts
import { Open_Sans } from '@next/font/google';

// font settings
const opensans = Open_Sans({
  subsets: ['cyrillic'],
  variable: '--font-opensans',
  weight: ['300', '400', '500', '600', '700'],
});

// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${opensans.variable} font-opensans relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
