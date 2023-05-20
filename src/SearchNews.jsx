import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

let array = new Array();
const SearchNews = () => {

    const [title, setTitle] = useState([]);
    const location = useLocation();
    const searchTerm = location.state.result;
    const [data,setData]=useState([]);
    
    useEffect(() => {
        

        console.log(searchTerm);
        async function getData() {
            const id = '94fGFH09Kp151eWNW9h8';
            const secret_id = 'YvsfmSVRlf';

            const response =
                await axios.get(
                    "/v1/search/news.json",  // 불러올 api 주소
                    {

                        params: { query: searchTerm, display: 5, sort: "date" },  // query는 필수값
                        // dispplay : 몇 개 기사를 나열할건지
                        headers: {
                            "X-Naver-Client-Id": '94fGFH09Kp151eWNW9h8',
                            "X-Naver-Client-Secret": 'YvsfmSVRlf',
                        },
                    }
                );
            //response.data.items.map((item)=>console.log(item.title));
            
            response.data.items.map((item) => array.push(item.title));
            setTitle(array);
            console.log(response.data.items);

        }
        getData();

    }, []);

    <return>
        <div>
            {title.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </div>
    </return>



}

export default SearchNews;