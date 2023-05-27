import { useState, useEffect } from "react";

import SearchNews from "./FilterSearch.jsx";
import axios from "axios";

// 데이터의 title -> 검색어 자동완성
// 검색어 입력 -> localStorage에서 저장된 검색어들을 기반으로 자동완성, submit (localstorage에 저장, useEffect에서 불러옴)
const App = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function getData() {
      const id = "94fGFH09Kp151eWNW9h8";
      const secret_id = "YvsfmSVRlf";

      const response = await axios.get(
        "/v1/search/news.json", // 불러올 api 주소
        {
          params: { query: "경제", display: 5, sort: "date" }, // query는 필수값
          // display : 몇 개 기사를 나열할건지
          headers: {
            "X-Naver-Client-Id": { id },
            "X-Naver-Client-Secret": { secret_id },
          },
        }
      );
      setResult(response.data.items);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <SearchNews data={result} />
    </div>
  );
};

export default App;
