// import React, {useState, useEffect} from 'react'

// function fetchData() {
//   const promise = fetch("https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?serviceKey=O9LgAKxzZj3cJj949bIMCERmM1tsOGq4BbZ%2BR%2BdleIHB%2BiSsEdmADXsEwKPfB7zNBIDusKvcFUw6%2Fjlx77kHJg%3D%3D&searchYearCd=2021&siDo=11&guGun=110&type=json&numOfRows=10&pageNo=1")
//     .then(res => {
//       if(!res.ok) {
//         throw res;
//       }
//       return res.json()
//     })
//     return promise
// }

// export default function App() {
//   const [error, setError] = useState(null)
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [data, setData] = useState(null)

//   console.log(data)
  
//   useEffect(() => {
//     fetchData()
//       .then(data => {
//         setData(data)
//       })
//       .catch(error => {
//         setError(error)
//       })
//       .finally(() => setIsLoaded(true))
//   }, [])

//   if(error) {
//     return <p>failed to fetch</p>
//   }

//   if(!isLoaded) {
//     return <p>fetching data...</p>
//   }
//   return <h1>호로로로로로로로로로로로</h1>
// }

import React, {useState, useContext, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, MapMarker, MapInfoWindow, Roadview, CustomOverlayMap, RoadviewMarker} from 'react-kakao-maps-sdk';
import {
  Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  LineChart, Line,
  ComposedChart, Area,
  PieChart, Pie,
  ResponsiveContainer,
} from "recharts";

function fetchData(searchYearCd) {
  const endPoint = 'https://apis.data.go.kr/B552061/frequentzoneOldman/getRestFrequentzoneOldman'
  const serviceKey = process.env.REACT_APP_SERVICE_KEY;
  const siDo = 28;
  const goGun = 237;
  const type = 'json';
  const numOfRows = 10
  const pageNo = 1

  const promise = fetch(`${endPoint}?serviceKey=${serviceKey}&searchYearCd=${searchYearCd}&siDo=${siDo}&guGun=${goGun}&type=${type}&numOfRows=${numOfRows}&pageNo=${pageNo}`)
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
  return promise;
}

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [searchYearCd, setSearchYearCd] = useState(2015);

  console.log(data);

  useEffect(() => {  
    setIsLoaded(false);

    fetchData(searchYearCd)
    .then(data => {
      setData(data);
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [searchYearCd])

  if (error) {
    return <p>failed to fetch</p>
  }

  if (!isLoaded) {
    return <p>fetching data...</p>
  }

  return (
    <div style={{margin: "1rem"}}>
      <h1 className="text-2xl tx-red center">인천광역시 부평구 보행노인 사고조회 &#128561;</h1>

      <h2 className="mt-4">조회하실 연도를 선택하십시오</h2>
      <div className="background-red">
        <button className="p-1 border-2 border-black" onClick={() => setSearchYearCd(searchYearCd - 1)} >&#10094; 이전년도</button>{searchYearCd}
        <button className="p-1 border-2 border-black" onClick={() => setSearchYearCd(searchYearCd + 1)}>다음년도 &#10095;</button>
      </div>

      {data.totalCount > 0 ? (
        <>
          <h2>요약</h2>
          <p>총 {data.totalCount}건의 사고가 발생했습니다</p>

          <h2>사고발생현황</h2>
          <Rechart accidents={data.items.item} />

          <h2>지도</h2>
          <p>지도를 확대 또는 축소할 수 있습니다</p>
          <KakaoMap accidents={data.items.item} />

          <h2>지도</h2>
        </>
      ) : (
        <p>해당 년도 자료가 없습니다</p>
      )}
    </div>  
  )
}

function Rechart({ accidents }) {
  const chartData = accidents.map(accident => {
    return {
      name: accident.spot_nm.substring(9),
      발생건수: accident.occrrnc_cnt,
      중상자수: accident.se_dnv_cnt,
      사망자수: accident.dth_dnv_cnt
    }
  })

  return (
    <>
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="발생건수" stroke="orange"/>
            <Line type="monotone" dataKey="중상자수" stroke="green" />
            <Line type="monotone" dataKey="사망자수" stroke="black" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

function KakaoMap({ accidents }) {
  const [toggle, setToggle] = useState("map")
  return (
    <div style={{ width: "100%", height: "500px", position: "relative" }}>
      <Map // 로드뷰를 표시할 Container
        center={{ lat: accidents[0].la_crd, lng: accidents[0].lo_crd }}
        style={{
          display: toggle === "map" ? "block" : "none",
          width: "100%",
          height: "100%",
        }}
        level={3}
      >
        {accidents.map((accident) => (
          <MapMarker
            key={accident.spot_nm}
            position={{ lat: accident.la_crd, lng: accident.lo_crd }} // 마커를 표시할 위치
            title={accident.spot_nm} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))}
        {toggle === "map" && (
          <input
            style={{ position: "absolute", top: "5px", left: "5px", zIndex: 10 }}
            type="button"
            onClick={() => setToggle("roadview")}
            title="로드뷰 보기"
            value="로드뷰"
          />
        )}
      </Map>

      {accidents.map((accident) => (
        <Roadview // 로드뷰를 표시할 Container
          key={accident.spot_nm}
          position={{ ...{ lat: accident.la_crd, lng: accident.lo_crd }, radius: 30 }}
          style={{
            display: toggle === "roadview" ? "inline-block" : "none",
            margin: "10px",
            width: "33.3%",
            height: "100%",
          }}
        >
          <RoadviewMarker position={{ lat: accident.la_crd, lng: accident.lo_crd }} />
          {toggle === "roadview" && (
            <input
              style={{ position: "absolute", top: "5px", left: "5px", zIndex: 10, }}
              type="button"
              onClick={() => setToggle("map")}
              title="지도 보기"
              value="지도"
            />
          )}
        </Roadview>
      ))}
    </div>
  )
}