import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <main className="App">
      <Navbar />
      {children}
      <footer>Footer</footer>
    </main>
  );
};

export default Layout;
