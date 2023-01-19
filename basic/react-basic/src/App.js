import React, {
  createContext,
  useContext,
  useState
}

  from 'react';

export default App;

// function App() {
//   return <h1>Hello React</h1>
// }

/*
  1 리액트란 ?
    - UI를 개발하기 위해 사용되는 자바스크립트 라이브러리
      UI(User Interface) : 유저가 앱과 소통하기 위한 도구 / 예) 뷰
      라이브러리: 자주 사용되는 코드의 묶음
    - 페이스북이 개발
    - 가장 인기있는 프론트엔드 프레임워크

  2 리액트의 특징
    - 컴포넌트 기반
      컴포넌트 : 뷰를 구성하는 부품
      합성, 재사용등이 가능하다

    - 선언적인 문법
    
  3 리액트의 구조
    - 싱글페이지 구조
    - 가상의 DOM(virtual DOM)을 HTML에 주입한다
*/

/*
  JSX

  JSX : JavaScript Extension
  자바스크립트의 확장문법이다
  가상의 DOM을 만들 때 사용된다
  선언적인 문법으로 사용하기 편리하다

  1 JSX 개념
  2 JSX 문법
  3 JSX 에서 연산결과 출력하기
  4 JSX 에서 조건문
  5 JSX 에서 반복문 사용하기
*/

// 1 JSX 개념

// function App() {
//   //JSX 를 사용하지 않음
//   let h1 = React.createElement('p', {}, 'Hello React');

//   return h1;
// }

// function App() {
//   // JSX를 사용함
//   let h1 = <h1>Hello React</h1>;

//   return h1;
// }

/*
  2 JSX 문법
  - React Fragment
  - 엘리먼트 attribute
  - inline style
*/

// React Fragment
// <div></div> 에서 div 를 없애고 <> </> 와 같이 빈테그를 사용하여도 된다.

// function App() {

//   return (
//     <>  
//       <h3>React Fragment</h3>
//       <ul>
//         <li>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//       </ul>
//     </>
//   )
// }

// 엘리먼트 attribute

// function App() {
//   return (
//     <>
//       <h3>JSX 엘리먼트 attribute</h3>
//       <ul>
//         <li>
//           <a herf="https://google.com" target="_blank">Foo</a>
//         </li>
//         <li>
//           <img src="/" alt="Bar" />
//         </li>
//         <li>
//           <input type="text" placeholder="Baz" autoComplete="off" />
//         </li>
//       </ul>
//     </>
//   )
// }

// inline style

// function App() {

//   return (
//     <>
//      <h3>JSX inline style</h3>

//      <ul style={{border: "1px solid"}}>
//         <li style={{textDecoration: "underline"}}>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//      </ul>
//     </>
//   )
// }

// Q.

// function App() {

//   const st = {
//     textDecoration: "line-through",
//     color: "#f00"
//   }

//   return (
//     <>
//     <h3>Q. 스타일 객체를 사용하여 맥주리스트를 출력해보세요</h3>

//      <ul>
//       <li style={st}>Guiness Irish</li>
//       <li>Heineken Netherlands</li>
//       <li>Budwiser USA</li>
//      </ul>
//     </>
//   )
// } 

// JSX 에서 연산결과 출력하기

// function App() {

//   let cat = {
//     name : 'Kitty',
//     age : 2,
//     home : null,
//     sound : function () {
//       return "meow" ;
//     }
//   }

//   return (
//     <>
//       <h3>{cat.name}</h3>
//       <ul>
//         <li>이름 : {cat.name}</li>
//         <li>나이 : {cat.age}</li>
//         <li>집 : {cat.home}</li>
//         <li>울음 : {cat.sound()}</li>
//       </ul>
//     </>
//   )
// }

/*
  4 JDX 에서 조건문 사용
    논리연산자와 삼항연산자를 사용한다

    && (그리고)
    || (또는)
    ! (부정)
    ? (삼항연산자)
*/

// function App() {

//   return (
//     <>
//       <h3>JSX 조건문</h3> 
//       <p>조건1 &amp;&amp;(그리고) 조건2</p>
//       <ul>
//       <li>{'lol' && 'Foo'}</li>
//       <li>{false && 'Bar'}</li>
//       <li>{'lol' && false}</li>
//       </ul>
//     </>
//   )
// }
// 둘다 참일때 뒷 문자가 실행됨

// function App() {

//   return (
//     <>
//       <h3>JSX 조건문</h3>
//       <p>조건1 || (또는) 조건2</p>

//       <ul>
//        <li>{'lol' || 'Foo'}</li>
//        <li>{false || 'Bar'}</li>
//        <li>{'lol' || false}</li>
//       </ul>
//     </>
//   )
// }

// function App() {

//   return (
//     <>
//       <h3>JSX 조건문</h3>
//       <p>!(부정), ? (삼항연산자)</p>

//       <ul>
//         <li>{!'Foo'}</li>
//         <li>{true ? 'Bar' : ''}</li>
//         <li>{false ? '' : 'Baz'}</li>

//       </ul>
//     </>
//   )
// }

/*
  5 JSX 에서 반복문 출력하기
*/

// function App() {
//   const arr=['foo', 'bar','baz'];

//   // const r = arr.map((item,index, arr) => {
//   //   return item.toUpperCase();
//   // })

//   // console.log(r);

//   return (
//     <>
//     <h1>JSX 반복문</h1>
//     <ul>
//       {arr.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//     </>
//   )
// }


// function App() {
//   const beers = [
//     {name: 'Heineken', origin: 'Netherlands'},
//     {name: 'Guiness', origin: 'Irelands'},
//     {name: 'Asahi', origin: 'Japan'}
//   ]

//   return (
//     <>
//     <h1>세계맥주</h1>
//     <ul>
//       {beers.map((beer,index) => (
//         <li key={index}>{beer.name} {beer.origin}</li>
//         // <li key={index}>{beer.name + ', ' + beer.origin}</li>
//       ))}
//     </ul>
//     </>
//   )
// }

/*
  컴포넌트

  1 컴포넌트란
  UI를 설계하는데 쓰이는 독립적이고 재사용가능한 부품

  2 컴포넌트의 종류
    함수 컴포넌트
    클래스 컴포넌트

  3 컴포넌트의 합성
    컴포넌트 내에서 다른 컴포넌트를 호출한다 

*/

// function App () {

//   return (
//     <>
//       <h1>Youtube</h1>
//       <Content />

//       <h2>Comments</h2>
//       <Comments />

//       <hr />

//       <h2>Suggested</h2>
//       <Suggested />
//     </>
//   )
// }

// function Content() {
//   return (
//     <div>
//       <h2>고양이는 액체일까?</h2>
//       <img src="https://img.insight.co.kr/static/2018/04/12/700/6qw69046p89mc04erkcx.jpg"
//            art=""
//            width="100%"
//            />
//     </div>
//   )
// }

// function Comments() {
//   return (
//     <ul>
//       <li>유치하게 등수는...3빠</li>
//       <li>2빠</li>
//       <li>1빠</li>
//     </ul>
//   )
// }

// function Suggested() {
//   return (
//     <ul>
//       <li>고양이는 정말 폭력적일까?</li>
//       <li>고양이는 정말 자기가 신이라고 생각할까?</li>
//       <li>냥냥펀치는 얼마나 아플까?</li>
//     </ul>
//   )
// }

// function App() {

//   return (
//     <>
//     <h1>Instagram</h1>
//     <Profile />   

//     <h2>Suggested</h2>
//     <Suggested />

//     <h2>Timeline</h2>
//     <Timeline />
//     </>
//     )

// }



// function Profile() {
//   return(
//   <div>
//     <img src="https://blog.kakaocdn.net/dn/kTVSt/btrRQig7IHH/yFvdRQsLzWEsKyNukhvFS1/img.png"
//          style={{width:'100px', height:'100px', objectFit:'cover', borderRadius:'50%'}}
//          />
//     <h3>다나카상</h3>
//     <p>안녕하세요 여러봉구, 다나카입니다</p>
//   </div>

//   )
// }

// function Suggested () {
//   return (
//     <ul>
//     <li>나몰라 패밀리 공식계정</li>
//     <li>나몰라 패밀리 김태환</li>
//     <li>아싸 최우선</li>
//   </ul>
//     )
// }

// function Timeline () {
//   return (
//     <ul>
//       <li>시그니처 아르마니 티셔츠 입고 왔어요~</li>
//       <li>웃찾사 때보다 인기도 수입도 10배</li>
//       </ul>
//   )
// }

/*
 Props

 1 Props 개념
 2 사용방법
 3 children props
 4 Context Hook

*/

/*
 1 props 개념
 컴포넌트에 전달되는 인자
*/

// function App() {
//   const irishBeer = {name:'Guiness', origin:'Ireland', available: false}

//   return (
//     <>
//       <h1>맥주</h1>
//       <Beer beer={irishBeer} />
//      </>
//   )
// }

// function Beer(props) {
//   console.log(props) //properties (속성의 집합) = 객체

//   console.log(props.beer);

//   const beer = props.beer;

//   return (
//     <ul>
//       <li>이름 : {beer.name}</li>
//       <li>원산지 : {beer.origin}</li>
//       <li>판매중 : {beer.available ? '예' : '아니오'}</li>
//     </ul>
//   )
// }


// 서버로부터 응답받은 데이터
// const video = {
//   title: '고양이는 액체일까?',
//   src: "https://img.insight.co.kr/static/2018/04/12/700/6qw69046p89mc04erkcx.jpg"
// }

// const suggestedVideo = [
//   {id:'a0', title:'고양이는 정말 폭력적일까?'},
//   {id:'a1', title:'고양이는 정말 자기가 신이라고 생각할까?'},
//   {id:'a2', title:'냥냥펀치는 얼마나 아플까?'},
// ];

// const comments = [
//   {id:'c0', content:'1빠'},
//   {id:'c1', content:'2빠'},
//   {id:'c2', content:'유치하게 등수는... 3빠'},
// ];

// function App() {
//   return (
//     <>
//       <h1>Youtube</h1>
//       <Content video={video} />

//       <Comments comments={comments} />

//       <hr />

//       <Suggested suggestedVideos={suggestedVideo} />
//     </>
//   )
// }

// function Content(props) {

//   const video=props.video;

//   return (
//     <div>
//       <h2>{video.title}</h2>
//       <img
//       src={video.src}
//       alt=""
//       width="100%"
//       />
//     </div>
//   )
// }

// function Comments(props) {

//   const comments = props.comments;

//   console.log(comments);

//   return (
//     <>
//       <h1>Comments</h1>
//       <ul>
//         {comments.map(comment => (
//           <li key={comment.id}>{comment.content}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// function Suggested(props) {
//   const suggestedVideos = props.suggestedVideos;

//   console.log(suggestedVideos);

//   return (
//     <>
//     <h2>Suggested</h2>
//     {suggestedVideos.map(suggestedVideo => (
//       <li key={suggestedVideo.id}>{suggestedVideo.title}</li>
//     ))}
//     </>
//   )
// }

// const profile = {
//   username: '다나카',
//   image: "https://blog.kakaocdn.net/dn/kTVSt/btrRQig7IHH/yFvdRQsLzWEsKyNukhvFS1/img.png",
//   bio: '안녕하세요 여러봉구, 다나카입니다'
// };

// const accounts = [
//   { id: 's0', username: '나몰라 패밀리 공식계정' },
//   { id: 's1', username: '나몰라 패밀리 김태환' },
//   { id: 's2', username: '아싸 최우선' },
// ];

// const articles = [
//   { id: 'a0', username: '시그니처 아르마니 티셔츠 입고 왔어요~' },
//   { id: 'a1', username: '웃찾사 때보다 인기도 수입도 10배' }
// ];

// function App() {
//   return (
//     <>
//       <h1>Instagram</h1>

//       <Profile profile={profile} />

//       <Suggested accounts={accounts} />

//       <Timeline articles={articles} />

//     </>
//   )
// }

// function Profile(props) {
//   const Profile = props.profile;

//   return (
//     <>
//       <img
//         src={profile.image}
//         style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
//         width="100%"
//       />
//       <h3>{profile.username}</h3>
//       <p>{profile.bio}</p>
//     </>

//   )
// }

// function Suggested(props) {
//   const accounts = props.accounts;

//   return (

//     <>
//       <h1>Suggested</h1>
//       {accounts.map(account => (
//         <li key={account.id}>{account.username}</li>
//       ))}
//     </>
//   )
// }

// function Timeline(props) {
//    const articles = props.articles;

//    return (

//     <>
//       <h2>Timeline</h2>
//       {articles.map(article => (
//         <li key={article.id}>{article.username}</li>
//       ))}
//     </>
//    )

// }

/*
3 children props

컴포넌트에 자식 컴포넌트를 추가한다
*/

// function App() {

//   return (
//     <Layout>
//       <Article />
//     </Layout>
//   )
// }

// function Layout(props) {

//   return (
//     <>
//       <h1>Instagram</h1>

//       <nav>
//         <ul>
//           <li>홈</li>
//           <li>소개</li>
//           <li>게시물</li>
//         </ul>
//       </nav>

//       {props.children}
//     </>
//   )
// }
// function Article() {

//   return(
//     <>
//       <img 
//        src="https://blog.kakaocdn.net/dn/kTVSt/btrRQig7IHH/yFvdRQsLzWEsKyNukhvFS1/img.png"
//        art=""
//        width="300px"
//        />
//        <p>
//         <b>danaka</b>
//         다나카상 라디오 스타 출연했어요 ^00^
//        </p>

//        <small>1일 전</small>
//     </>

//   )
// }

/*
 4 useContext Hook
 chindren 컴포넌트에 데이터를 전달하는 Hook 이다
*/

// const AuthContext = createContext();

// function App() {

//   return (
//     <AuthProvider>
//       <Layout>
//         <Article />
//       </Layout>
//     </AuthProvider>
//   )
// }

// function AuthProvider(props) {

//   const value = { username: 'bunny' }

//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }


// function Layout(props) {

//   const auth = useContext(AuthContext);

//   console.log(auth);

//   return (
//     <>
//       <h1>Instagram</h1>

//       <nav>
//         <ul>
//           <li>홈</li>
//           <li>소개</li>
//           <li>게시물</li>
//         </ul>
//       </nav>

//       <p>안녕하세요 {auth.username}님</p>

//       {props.children}
//     </>
//   )
// }
// function Article() {

//   const auth = useContext(AuthContext);

//   console.log(auth);

//   return (
//     <>
//       <img
//         src="https://blog.kakaocdn.net/dn/kTVSt/btrRQig7IHH/yFvdRQsLzWEsKyNukhvFS1/img.png"
//         art=""
//         width="300px"
//       />
//       <p>
//         <b>danaka</b>
//         다나카상 라디오 스타 출연했어요 ^00^
//       </p>

//       <small>1일 전</small>
//     </>

//   )
// }

/*

  리액트에서 이벤트 처리하기

*/

// function App() {

//   function handleClick(e) {
//     alert('lol');
//   }

//   return (
//     <>
//     <h1>Basic</h1>
//     {/* onEventName=eventHandler */}
//     <button onClick={handleClick}>Button</button>
//     </>
//   )
// }

/*
  리액트에서 HTML 업데이트하기
*/

// function App() {

//   /*
//     const [state, setState] = useState(initialValue)

//     state : 컴포넌트에서 관리되는 변수
//     setState : state를 업데이트하는 메서드
//     initialValue : state 의 초기값
//   */

//   const [count, setCount] = useState(0);

//   return (
//     <>
//     <h1>Count</h1>
//     <p>{count}</p>
//     <button onClick={() => setCount(count + 1)}>Add</button>
//     </>
//   )
// }

/*
 -----위와 비슷하지만 작동안되는 예 -----
*/

// function App() {
//   let count = 0;

//   /*
//     HTML을 업데이트하기 위해서는 DOM을 다시 리턴해야 한다
//     DOM을 다시 리턴하기 위해서는 컴포넌트를 다시 실행해야 한다.
//     setState는 컴포넌트를 다시 실행한다
//     HTML이 업데이트 된다
//   */

//   function handleClick(e) {
//     count ++;
//   }

//   return (
//     <>
//     <h1>Count</h1>
//     <p>{count}</p>
//     <button onClick={handleClick}>Add</button>
//     </>
//   )
// }

/*
Q. 구독하기 버튼 만들기 
*/

function App() {

  /*
   const [subscribed, setSubscribed] = useState(false);
  */

   const [gu, noGu] = useState(false);
    console.log(gu)

  return (
        <>
        <h1>구독버튼</h1>
        
        <button onClick={() => noGu(!gu)}>
         {gu ? '구독취소' : '구독하기'}
         </button>
        </>
      )

}