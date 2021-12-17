import { Link, Outlet } from "react-router-dom";
import "../css/Article.css";
// import './'
const Article = () => {
  return (
    <div>
      <article className="art1">
        <ul>
          <li>
            <Link to="/">TestHome</Link>
            <Link to="./test">Test</Link>
          </li>
        </ul>
        <Outlet />
      </article>
    </div>
  );
};

export default Article;
