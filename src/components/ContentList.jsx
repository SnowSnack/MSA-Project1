
import {Link} from 'react-router-dom';
import '../css/ContentList.css';

const ContentList = () =>
{
    return (
        <>
            <aside className='content-list'>
                <h3>목차</h3>
                <ul>
                    <li><Link to="/">개요</Link></li>
                    <li><Link to="/">유치</Link></li>
                    <li><Link to="/">개막</Link></li>
                    <li><Link to="/">매달</Link>
                        <ul>
                            <li><Link to="/">메달디자인</Link></li>
                            <li><Link to="/">순위</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">대한민국 선수단 : 아깝네 올림픽</Link></li>
                    <li><Link to="/">대한민국 하계올림픽 성적</Link></li>
                    <li><Link to="/">한국측 중계진</Link>
                        <ul>
                            <li><Link to="/">KBS</Link></li>
                            <li><Link to="/">MBC</Link></li>
                            <li><Link to="/">SBS</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">평가</Link></li>
                </ul>  

            </aside>
        </>
    );
};

export default ContentList;