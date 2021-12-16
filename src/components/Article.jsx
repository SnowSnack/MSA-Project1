import { Link, Route, Routes } from "react-router-dom";
import "../css/Article.css";
import Home from "./Home";
import Test from "./Test";
const Article = () => {
  return (
    <div>
      <section className="se1">
        <article className="art1">
          <ul>
            <li>
              <Link to="home">Home</Link>
              <Link to="test">Test</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </article>
      </section>
    </div>
  );
};

export default Article;
