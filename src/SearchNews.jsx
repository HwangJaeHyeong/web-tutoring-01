import { useState, useEffect } from "react";
import axios from "axios";
import * as cheerio from "cheerio";
import { useLocation } from "react-router-dom";

let array = new Array();
const SearchNews = () => {
  const [title, setTitle] = useState([]);
  const location = useLocation();
  const searchTerm = location.state.result;
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    console.log(searchTerm);
    async function getData() {
      const id = "94fGFH09Kp151eWNW9h8";
      const secret_id = "YvsfmSVRlf";

      const res = await axios.get(
        "/v1/search/news.json", // 불러올 api 주소
        {
          params: { query: searchTerm, display: 5, sort: "date" }, // query는 필수값
          // dispplay : 몇 개 기사를 나열할건지
          headers: {
            "X-Naver-Client-Id": id,
            "X-Naver-Client-Secret": secret_id,
          },
        }
      );
      setResponse(res.data.items);
    }
    getData();
  }, []);

  // const getHtml = async (item_link) => {
  //   try {
  //     const res = await axios.get(item_link);
  //     return res.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   console.log(response);
  //   response.forEach((dataa) => {
  //     getHtml(dataa.originallink)
  //       .then((htmlData) => {
  //         let result = "";
  //         const $ = cheerio.load(htmlData.toString()); // html 데이터 파싱
  //         const $contents = $("div#contents");
  //         const $content = $("div#content");
  //         const $pTagList = $("p");
  //         const $article = $("article");
  //         const data = [$pTagList, $article, $contents, $content];

  //         dataa.forEach((item) => {
  //           if (item.length !== 0) {
  //             // 요소가 존재하면
  //             console.log(item.length);

  //             item.each(function (i, elem) {
  //               // 텍스트 추출
  //               result = result + $(this).text();
  //             });
  //           } else {
  //             console.log("data 없음");
  //           }
  //         });
  //         array.push(result);
  //         setContent(array);
  //       })
  //       .then((res) => {
  //         console.log(dataa.link);
  //         console.log(res + "\n");
  //       });
  //   });
  // }, [response]);

  return (
    <div>
      {/* {content.map((item) => (
        <p key={item}>{item}</p>
      ))} */}
      {
        JSON.stringify(response)
      }
    </div>
  );
};

export default SearchNews;
