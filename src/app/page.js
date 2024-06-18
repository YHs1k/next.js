import Image from "next/image";

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
            <h1>개인 홈페이지</h1>
            <nav>
              <ul>
                <li className="current"><a href="index.html">홈으로</a></li>
                <li><a href="about.html">취미</a></li>
                <li><a href="ppt.html">성격</a></li>
                <li><a href="blog.html">블로그</a></li>
                <li><a href="contact.html">연락처</a></li>
                <li><a href="js.html">JAVASC</a></li>
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
              <h2>이제 그만 쉬고싶조</h2>
              <h3>팀원</h3>
            </article>
            <article id="profile_desc">
              <div className="button_area">
                <button><a href="about.html">취미</a></button>
                <button><a href="ppt.html">성격</a></button>
                <button><a href="blog.html">블로그</a></button>
                <button><a href="contact.html">연락처</a></button>
              </div>
            </article>
          </section>
          <footer>
            <b>
              <a href="#main">2024 My Portfolio. 92113748 윤현식.</a>
            </b>
          </footer>
        </body>
      </html>
    </>
  );
};

export default Home;
