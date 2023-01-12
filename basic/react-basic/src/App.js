import React from 'react';

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

function App() {
  
  return (
    <>
      <h3>JSX 조건문</h3>
      <p>!(부정), ? (삼항연산자)</p>

      <ul>
        <li>{!'Foo'}</li>
        <li>{true ? 'Bar' : ''}</li>
        <li>{false ? '' : 'Baz'}</li>

      </ul>
    </>
  )
}