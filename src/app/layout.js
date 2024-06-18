import Link from 'next/link';
import Image from "next/image";
import styles from "./globals.css";

const Home = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <title>portfolio</title>
        </head>
        <body>
          <header>
            <h1>next.js 홈페이지</h1>
            <nav>
              <ul>
                <li className="current"><a href="index.html">홈으로</a></li>
                <li><a href="https://finalweb-z373.vercel.app/">개인 프로젝트</a></li>
                <li><a href="https://web-demo2-qvh9-faeb30csx-yunhyeonsiks-projects.vercel.app/">HCJ</a></li>
                <li><a href="https://team-indol-zeta.vercel.app/">Team</a></li>
              </ul>
            </nav>
          </header>
          <section id="main">
            <h2>My</h2>
            <h3>Portpolio</h3>
            <div className="a_button"><a href="#profile_pic">살펴보기</a></div>
          </section>
          <section>
            <article id="profile_pic">
            <Link href="https://github.com/YHs1k">
                <Image src="/assets/img/git.png" alt="GitHub Image" width={100} height={100} />
              </Link>
              <Link href="https://www.instagram.com/y__hyuns1k/">
                <Image src="/assets/img/instar.jpg" alt="Instar Image" width={100} height={100} />
              </Link>
            </article>
            <article id="profile_desc">
                <h2>JS 프로젝트</h2>
              <div className="button_area">
                <button><a href="https://finalweb-z373.vercel.app/gallery/">갤러리</a></button>
                <button><a href="https://finalweb-z373.vercel.app/booklist/">책 등록</a></button>
                <button><a href="https://finalweb-z373.vercel.app/users/">사용자 관리</a></button>
                <button><a href="https://finalweb-z373.vercel.app/menu/">중국집 메뉴 관리</a></button>
                <button><a href="https://finalweb-z373.vercel.app/pingpong/">탁구 스코어</a></button>
              </div>
              <footer>
            <b>
              <a href="#main">2024 My Portfolio. 92113748 윤현식.</a>
            </b>
          </footer>
            </article>
          </section>
        </body>
      </html>
    </>
  );
};

export default Home;