import { Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/TestHome.css'
const Test = () => {
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
    <article className="hi">
        <div className="ip">
          <Input placeholder="영어로검색하시오" onChange={e => setMsg(e.target.value)}/>
          {/* <input type="text" placeholder="단어 검색" onChange={e => setMsg(e.target.value)}/> */}
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

export default Test;
