import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/Search.css'
const Search = () => {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState('css');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = () => {
      axios.get(`http://hn.algolia.com/api/v1/search?query=${msg}`)
          .then( res => {
              setData(res.data)
              setLoading(false)
              setError('')
          })
          .catch( error => {
              setData( [] )
              setLoading(true)
              setError('에러')
          })
  }

  useEffect( ()=> {
      getData()
  },[msg])

  return (
    <article className="ShArti">
        <div className="divinput">
          <input id="Shinput" type="text" placeholder="Search" onChange={e => setMsg(e.target.value)} />
        </div>
      <div className="srch">
        <ul>
            {/*data.hits.map 페이지 안의 경로를 하나더 추가해야됨  https://hn.algolia.com/api/v1/search?query=title  */}
              {data && loading ? '데이터 로딩중.' : data.hits.map( item => 
                  <li key={item.objectID}>
                      {item.title}
                  </li>
                )
              }
        </ul>
      </div>
    </article>
  );
};

export default Search;
