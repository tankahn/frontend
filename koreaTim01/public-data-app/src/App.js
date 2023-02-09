import React, {createContext, useState, useContext, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";
import './App.css';
import {Map, MapMarker, Roadview, RoadviewMarker} from 'react-kakao-maps-sdk';
import {
  Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line,
  ComposedChart, Area,
  ResponsiveContainer,
  LineChart, 
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

  return (
    <Router>
      <AuthProvider >
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />


            <Route path="posts" element={
              <AuthRequired>
            <Posts />
              </AuthRequired>
            } />
              <Route
                path="post/:postId"
                element={
                  <AuthRequired>
                  <Post />
                  </AuthRequired>
                }
                />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

function Main() {
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
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red">인천광역시 부평구 보행노인 사고조회</h1>

        <h2 className="mt-4 text-xl">조회하실 연도를 선택하십시오</h2>
        <div className="flex justify-center mx-6 mt-5">
          <button className="p-1 border-2 border-black mr-10" onClick={() => setSearchYearCd(searchYearCd - 1)} >&#10094; 이전년도</button>
          <span className='text-2xl font-bold'>{searchYearCd}</span>
          <button className="p-1 border-2 border-black ml-10" onClick={() => setSearchYearCd(searchYearCd + 1)}>다음년도 &#10095;</button>
        </div>
      </div>

      <div>
        {data.totalCount > 0 ? (
          <>
            <p className='text-xl text-center mt-5'>{searchYearCd}부평구 <span className='text-2xl text-red-500 font-bold'>총 {data.totalCount}건의 사고</span>가 발생했습니다</p>

            <h2 className="mt-4 ">Chart</h2>
            <Rechart accidents={data.items.item} />

            <h2 className="mt-4">지도</h2>
            <p>지도를 확대 또는 축소할 수 있습니다</p>
            <KakaoMap accidents={data.items.item} />
          </>
        ) : (
          <p>해당 년도 자료가 없습니다</p>
        )}
      </div>

    </>
  )
}




const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState(null);
  // 로그인
  function signIn(username) {
    setUser(username);
  }
  // 로그아웃
  function signOut() {
    setUser(null);
  }
  const value = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

function Layout() {
  const auth = useContext(AuthContext);

  return (
    <>
      <nav className="block">
        <ul className='flex mt-2'>
          <li className='border p-2 ml-2 hover:bg-green-300'>
            <Link to="/">메인</Link>
          </li>
          <li className="border p-2 ml-2 hover:bg-green-300">
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      {auth.user ? (
        <span className='flex justify-end'>
          Hi. {auth.user} <button onClick={auth.signOut}>Logout</button>
        </span>
      ) : (
        <span className='flex justify-end'>Not logged in</span>
      )}
      <Outlet />
      {/* 경로가 바뀌면 아웃렛 컨텐츠가 바뀐다 */}
    </>
  );
}


function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link to="/post/p1">Post 1</Link>
        </li>
      </ul>
      <div>
      <p className='mt-2'>
      교통사고분석시스템(TAAS)에 따르면 지난해 우리나라의 보행사상자의 59%가 65세 이상 고령자로 나타났다. 아울러 OECD의 65세 이상 노인 인구 10만 명당 보행 중 사망자수 통계에서도 압도적 1위로, 전체 회원국 평균(2.5명)보다 4배에 가까운(9.7명) 수치를 기록했다.
      </p>
      <p className='mt-4'>
        이에 노인의 무단횡단 등이 문제로 지적되기도 했으나, 행정안전부가 발표한 ‘2017 노인 보행자 교통사고 다발지역 교통사고 특성’ 통계 등을 보면 안전운전 불이행(68%)이 가장 큰 이유로 꼽혔다. 그밖에 교통사고가 지속 발생하는 장소 역시 시장, 병원 등 노인 유동인구가 많은 곳으로 나타나며, 노인 보행자의 안전을 위한 노력이 촉구되는 시점이다.</p>
      <p className='mt-4'>
        그 노력의 일환으로 ‘노인보호구역’(실버존, Silver Zone)을 예로 들 수 있다. 노인 보행자 사고가 증가함에 따라 이들의 안전한 통행을 보장하기 위해 2008년부터 도입된 교통약자 보호 제도 인데, 노인들의 통행량이 많은 구역을 선정해 차량 속도 제한 및 일정 시설을 설치하는 형태다. 주로 경로당, 노인복지시설, 공원, 시장 인근을 지정하는데, 사실상 그 존재가 미미하다.</p>
      <p className='mt-4'>
        어린이보호구역(스쿨존)과 비교해 살펴보면, 먼저 그 숫자가 턱없이 부족하다(2021년 기준 스쿨존 1만 6700여 곳, 실버존 2600여 곳). 또 두 곳 모두 해당 구역에서는 주정차가 금지되고 차량 운행 속도는 시속 30km로 제한되지만, 실버존의 경우 12대 교통사고 중과실에 포함되지 않아 사고가 났더라도 무조건 형사 처벌 대상이 되지는 않는다(어린이보호구역 안전운전의무 위반의 경우 포함).</p>
      <img />
      </div>
    </>
  );
}

function AuthRequired(props) {
  const auth = useContext(AuthContext);
  console.log(auth);
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.get('username'))
    auth.signIn(formData.get("username"));
  }
  if (!auth.user) {
    return (
      <form onSubmit={handleSubmit} className="flex justify-end">
        <h1>Login</h1>
        <input type="text" name="username" required />
        <button type="submit">Login</button>
      </form>
    );
  }
  return props.children;
}

function Post() {
  const params = useParams();
  const postId = params.postId;

  return (
    <>
      <h1>Post</h1>
      <p>{postId}</p>
    </>
  );
}

function NotFound() {
  return <h1>404 NotFound</h1>;
}

// 리차트
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
      <div style={{ height: "500px"}}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"
            fontSize="10px"
            />
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
          position={{ ...{ lat: accident.la_crd, lng: accident.lo_crd }, radius: 50 }}
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