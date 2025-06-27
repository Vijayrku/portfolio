import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header items={[
         { label: 'Home', href: '/' },
      { label: 'About', href: '/about'},
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
      ]} logoImage="" logoText="Logo" logoUrl="/" />
    </>
  );
}

export default Home;