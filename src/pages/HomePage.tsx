import { Header } from "../components/Header/Header.js";
import { Posts } from "../components/Posts/Posts.js";
import { Footer } from "../components/Footer/Footer.js";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Posts />
      </main>
      <Footer />
    </>
  );
};
