import React from 'react';
import { useState,useEffect } from 'react'
import axios from "axios";
import styled from 'styled-components';
import cheerio from 'cheerio'

import { useNavigate } from 'react-router-dom';

//data 입력을 지우고 localstorage에 있는 값들을 불러오는 형식 
const FilterSearch = () => {
  
  
    const [data,setData]=useState([]);
    const [filterData,setFilterData] =useState([]);
    const [wordEntered,setWordEntered]=useState("");
    const [submitted,setSubmitted]=useState(false); 
    const navigate=useNavigate();

    const move = () =>{
      navigate('/result',{state:{
        result:wordEntered}})
    }
    

    // useEffect -> 처음 렌더링 후에 localStorage에 있는거 getItem 할 수 있도록
    useEffect(()=>{
      const savedData=localStorage.getItem('searchList');
      if(savedData){
        setData(JSON.parse(savedData).result); //
      }
      
      
    },[]);

    const handleFilter = (e) =>{
        const searchWord=e.target.value;
        setWordEntered(searchWord);

        const newFilter = data.filter((value)=>{
            return value.toLowerCase().includes(searchWord.toLowerCase());
        })

        if(searchWord === ""){
            setFilterData([]);
        }else{
            setFilterData(newFilter);
        }
    }

    const clearInput = () =>{
        setFilterData([]);
        setWordEntered("");
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      setSubmitted(true);
      

     
    }
    useEffect(()=>{
      if(submitted){
        //console.log(wordEntered);
        const newData=[...data,wordEntered];
        
        setData(newData);
        console.log('submitted가 true',data);
        localStorage.setItem("searchList",JSON.stringify({result:newData}));
        handleFilter({target:{value:wordEntered}})
        
      setSubmitted(false);
      
      move();

    }
    },[submitted,data,wordEntered]);

    return(
        <>
       
        <Search>
            <SearchInput>
                <form id='search-form' className='form' onSubmit={handleSubmit}>
                  <input type="text" placeholder="검색어 입력" onChange={handleFilter} value={wordEntered}/>
                  <button type='submit' form='search-from'>검색</button>
                </form>
                
              </SearchInput>
              
             
            {
                filterData.length!==0 && (
                    <DataResult>
                        {filterData.slice(0,15).map((searchTerms,key)=>{
                            return(
                                <a key={key} className='dataItem' target='_blank'>
                                    <p>{searchTerms}</p>
                                </a>
                            )
                        })}
                    </DataResult>
                )
            }
        </Search>
        </>
        
    )
    


}

export default FilterSearch

const Search = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInput = styled.div`
  margin-top: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 400px;
  height: 30px;
  padding: 20px;

  input{
    border: none;
  }
  input:focus{
    outline: none;
  }

  .icon{
    cursor: pointer;
  }
`;

const DataResult = styled.div`
  width: 396px;
  height: 200px;
  background-color: #fff;
  box-shadow: rgba(0,0,0,.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  margin-top: 5px;
  border-radius: 5px;

  .dataItem{
    padding: 0 10px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .dataItem:hover{
    background-color: gray;
    color: #fff;
  }
`;