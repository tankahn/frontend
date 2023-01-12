// console.log('Hello JavaScript!');

/*
 *** 데이터 타입 ***
 String, Number, Boolean, Null, Undefined, BigInt
*/

/*
  1 String (문자열)
  연속된 문자를 나타낸다. ''(홑따옴표), ""(쌍따옴표) 안에 작성한다
*/

// console.log('foo');
// console.log("foo");
// console.log(typeof 'foo'); // string
// console.log('foo bar baz')
// console.log(""); // 빈 문자열
// console.log('2022')
// console.log(typeof '2022') // string

// 개별 문자에 접근하기
// var foo = 'bar';
// console.log(foo)

// console.log(foo[0]) // b
// console.log(foo[1]) // a
// console.log(foo[2]) // r
// console.log(foo.length); // 3

/*
  2 Number
  숫자를 나타낸다
  값: 정수, 소수, NaN(Not a Number), +Infinity, -Infinity
*/

// console.log(2022)
// console.log(typeof 2022) // number
// console.log(3.14)
// console.log(0)
// console.log(-2)
// console.log(2 - 'foo') // NaN

// console.log(-Number.MAX_VALUE); // 그 이하는 -Infinity -(2^1024)
// console.log(Number.MAX_VALUE); // 그 이상은 +Infinity (2^1024)

/*
  3 Boolean
  참 또는 거짓(true or false)의 값을 갖는다
*/

// console.log(true)
// console.log(false)
// console.log(typeof true) // boolean
// console.log(1>0)

/*
  4 Null
  의도적으로 '없음', '무효'를 나타낼 때 사용한다
*/

// console.log(null);
// console.log(typeof null); // object

// var foo = null;
// console.log(foo);

// var homeForStreetCats = null;

/*
  5 Undefined
  정의되지 않음을 나타낸다
*/

// console.log(undefined);
// var x;
// console.log(x); // undefined
// console.log(typeof x) // undefined

/*
  6 BigInt
  safe integer (안전한 정수) 밖의 정수를 나타낼 때 사용한다
  -(2^53 -1) ~ +(2^53 -1) 밖의 정수가 Big integer라고 한다
  약 -9000조 ~ 9000조
*/

// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(9999999999999999)
// console.log(9999999999999999n)
// console.log(typeof 9999999999999999n) // bigint

/*
  Q. 데이터 타입 문제
  1 Number 타입의 범위
            [-(2^1024)]            [2^1024]
  -Infinity <---------- 0 ----------> +Infinity
  2 safe integer(안전한 정수)의 범위
                [-(2^53-1)]             [2^53-1]    
  Big integer(-) <---------- 0 ----------> Big integer(+)
  3 없음, 무효를 나타내는 데이터 타입은? null
  4 정의되지 않음을 나타내는 데이터 타입은? undefined
*/


/*
  *** 연산자 ***
  1 할당 연산자
  2 수리 연산자
  3 비교 연산자
  4 논리 연산자
  5 타입 연산자
*/

/*
  1 수리 연산자
  + - * / (사칙연산)
  ++(증가), --(감소)
  **(제곱), %(계수, 나머지)
*/

// > 사칙연산
// console.log(1 + 2);
// console.log('foo' + ' bar');
// console.log(1 + 'foo') // 1foo (string)
// console.log(2*2)
// console.log(3/2)

// > 증가, 감소
// var year = 2022;
// year++
// console.log(year)

// var x = 1;
// x--;
// console.log(x)

// > 제곱, 나머지
// console.log(2**7) //2^7, 128
// console.log(5%2) // 1


/*
  2 할당연산자
  = += -= *= /= %= **=
*/

// > =
// var foo = 'bar'

// > +=
// var year = 2022;
// year += 1; // year = year + 1
// console.log(year)

// > *=
// var x = 1;
// x *= 2;
// console.log(x)

/*
  3 비교 연산자
  == === != !==
  > < >= <=
*/

// > == (동등연산자)

// console.log(1 == 1) 
// console.log(1 == 0)
// console.log(2022 == '2022') // true

// > === (엄격 동등 연산자)
// 값과 타입 모두 비교한다

// console.log(1 === 1)
// console.log(2022 === '2022') // false

// > !=

// console.log(1 != 1) // false
// console.log(2 != 1) // true

// > !== 
// 값과 타입 모두 비교한다

// console.log(1 != '1') // false
// console.log(1 !== '1') // true

// > > < <= >=
// console.log(2<2) 
// console.log(2<=2)

/*
  4 논리 연산자
  조건 1 && 조건 2 (그리고)
  조건 1 || 조건 2 (또는)
  !조건 (부정)
*/

// > && (그리고)
// console.log(2>0 && 2>1)
// console.log(2>0 && 2<1)

// > || (또는)
// console.log(2>0 || 2<1)
// console.log(2<0 || 2<1)

// > ! (부정)

// console.log( !(1>0) )
// console.log(!false)
// console.log(!"")
// console.log(!undefined)
// console.log(!null)
// console.log(!'foo')

/*
  5 타입 연산자
  typeof + 값
  instanceof + 값 
*/

// console.log(typeof 'foo')
// console.log(typeof null)


// Q. 연산자 문제 

// var likes = 999;
// // 증가연산자를 사용하여 좋아요 수를 1 증가시켜 보세요
// likes++;
// console.log(likes)

// var beers = 'Heineken(Netherlands)'
// // 다음을 += 연산자를 사용하여 beers값을 바꾸어보세요
// // beers = beers + ' Guinness(Ireland)'
// beers += ' Guinness(Ireland)'
// console.log(beers)

// 십대: 13세 이상 19세 이하를 십대라고 합니다
// 논리연산자 'AND(그리고)'를 사용하여 코드로 작성해보세요

// var joAge = 24

// // 조규성은 십대가 아니다
// console.log(joAge >= 13 && joAge <= 19)

/*
  *** 조건문 ***
  1 if 조건문
  2 switch 조건문
  3 ? (삼항연산자)
*/

/*
  1 if 조건문
  if (조건) {
    조건이 참일 경우 실행되는 코드
  }
*/

// > if 조건문
// if (1>0) {
//   console.log('foo')
// }

// if (1 > 2) { // 실행되지 않음
//   console.log('foo')
// }

// > if/else

// if (1 > 2) {
//   console.log('foo')
// } else {
//   console.log('bar')
// }

// > if/elseif/else
// var year = 2022;

// if (year === 2021) {
//   console.log('Last year')
// } else if (year === 2022) {
//   console.log('This year')
// } else {
//   console.log('Next year')
// }

// if 조건문에서 조건이 boolean 타입이 아닌 경우
// if (true) {
//   console.log('foo')
// }

// if ('foo') {
//   console.log('bar')
// }

// if ('') {
//   console.log('foo')
// }

// if (null) {
//   console.log('foo')
// }

// if (undefined) {
//   console.log('bar')
// }

// if (!null) {
//   console.log('foo')
// }

/*
  2 Switch 조건문

  엄격 동등 연산(===)을 수행한다
*/

// var year = 2022;

// switch (year) {
//   case 2021:
//     console.log('작년')
//     break;

//   case 2022:
//     console.log('이번 년도')
//     break;

//   case 2023:
//     console.log('내년')
//     break;
    
//   default:
//     console.log('.')
// }

/*
  3. ? (삼항연산자)
  조건문을 간단한 문법으로 구현할 수 있다.

  조건 ? 값1 : 값2
  조건이 참인경우 값1을 리턴한다
  조건이 거짓인 경우 값2를 리턴한다
*/

// var year = 2022;

// console.log(r = year === 2022 ? '올해' : '올해가 아닙니다')

// console.log(r)

// Q1. 다음 변수를 활용해서 나이가 십대이면 '그는 십대입니다'
//     십대가 아니면 '그는 십대가 아닙니다'를 출력하는 조건문을 만들어보세요
//     if조건문, ? (삼항연산자) 두 경우를 모두 만들어 보세요.

// if 조건문
// var joAge = 24;

// if (joAge <= 19 && joAge >= 13) {
//     console.log ('그는 십대입니다')
//   } else {
//     console.log('그는 십대가 아닙니다')
//   }


// 삼항연산자
// 성인/성인이 아닌지 (18세 기준)

// var joAge = 24;


// var r = ( joAge > 18 ? '그는 성인 입니다' : '그는 성인이 아닙니다')

// console.log(r)

/*
 *** 반복문 ***

 1. For 반복문
 2. While 반복문
*/

// 1 For 반복문

// 0에서 3 사이의 숫자를 출력한다
// for (var i=0; i<3; i++) {
//   console.log(i);
// }

// # 반복문을 사용해서 1에서 10까지의 합 구하기

// var sum = 0

// for (var i=1; i<=10; i++) {
//   sum += i; // sum = sum + i
// }

// console.log(sum);

// # 문자열 순회하기
// var foo = 'bar';

// for (var i=0; i<foo.length; i++) {
//   console.log(foo[i])
// }

// # break 와  continue

// for (var i=0; i<=10; i++) {
//   // if (i === 5) {
//   //   break;
//   // }
//   console.log(i)
// }

// for (var i=0; i<=10; i++) {
//     if (i === 5) {
//       continue;
//     }
//     console.log(i)
//   }

// 2 While 반복문
// 0 과 3 사이의 숫자 출력하기

// var i = 0;

// while(i<3) {
//   console.log(i);
//   i++
// }

// Q. for 반복문을 사용해서 a 에서 c 까지만 출력해보세요
// var alphabets = 'abcdefg'

// for ( var i=0; i < 3; i++ ) {
//   console.log(alphabets[i])
// }

// Q2. 10, 20, 30 ..... 100 까지의 합을 구해보세요

// var sum = 0;

// for(var i=1; i<=10; i++) {
//   sum += (i*10) 
// } console.log(sum)

// var sum = 0;

// for(var i=10; i<=100; i+=10) {
//   sum += i;
// }
// console.log(sum);


/*
  *** 변수와 상수 ***

  1 var (변수, variables)
  2 let (변수)
  3 const (상수, constant)
*/

// 1 var
// var foo = 'bar'
// console.log(foo)

// var foo = 'bar'
// foo = 'baz'

// console.log(foo)

// var foo = 'bar'
// var foo = 'baz' //foo변수 재선언

// console.log(foo)

// var foo;     //선언
// foo = 'bar'  //정의 

// console.log(foo)

// 2 let  -var 변수보다는 좀더 엄격하게 쓰임

// let foo = 'bar'
// console.log(foo)

// let foo = 'bar' //초기화(initialization)
// foo = 'baz' //재정의

// console.log(foo);

// let foo;      // 선언
// foo = 'bar'   // 정의

// console.log(foo)

// let foo = 'bar'
// let foo = 'baz'  //재선언 불가

// console.log(foo) // errer

// 3 const  재선언 재할당 불가능 , 초기 선언만 할수 있음

// const foo ='bar'

// foo = 'baz'    // 재선언 하면 오류

// console.log(foo)

// # let과 const는 블록(block) 범위를 갖는다

// {
//   var foo = 'Foo'
//   let bar = 'Bar'
//   const baz = 'Baz'

//   // console.log(foo)  // 블록 안에서는 세변수 모두 접근이 가능
//   // console.log(bar)
//   // console.log(baz)
// }

//   console.log(foo)  // 블록 안에서 선언된 별수에 접근이 가능함
//   console.log(bar)  // 블록 안에서 선언된 별수에 접근이 불가능함
//   console.log(baz)  // 블록 안에서 선언된 별수에 접근이 불가능함

/*
  *** 함수 ***
  호출될 때만 실행되는 코드

  1 함수 정의하기
    > 함수선언식
    > 함수표현시과 화살표 함수
  2 Hoisting
  3 전역변수와 지역변수
  4 'return' 키워드
  5 함수의 인자
  6 콜백
*/

// 1 함수 정의하기
// > 함수선언식

// function f() {
//   console.log('foo')
// }

// // 함수 실행
// f()

// >함수 표현식

// 변수에 익명함수를 할당한다
// const f = function () {  //괄호앞에 변수이름이 없음(익명함수)
//   console.log('foo')
// }

// f()

// > 화살표 함수
// const f = () => {
//   console.log('foo')
// }

// f()

// 2 Hoisting (계양) 
// 함수의 정의가 실행시점보다 위로 간다 (정의가 아래위치함)
// 함수선언식 에서만 적용된다

// f()
// function f() {
//   console.log('foo')
// }


// f()                         //errer 선언식외 에서는 에러발생 
// const f = () => {
//   console.log('foo')
// }

// 3 전역변수 와 지역변수

// > 전역(global)변수
// 함수 밖에서 선언된 변수

// const foo = 'bar'

// function f() {
//   //함수 안에서 접근 가능
//   console.log(foo)
// }
// f()

// > 지역(local) 변수
// 함수 안에서 선언된 변수

// function f() {
//   const foo = 'bar'
// }
// f();
// //지역변수는 함수 밖에서 접근이 불가능하다
// console.log(foo)

// 4 함수의 인자 (parameter 와 argument 를 합쳐서 인자라고 함)

// function add(x,y) {     //parameter : x,y
//   console.log(x + y);
// }

// add(1,2)               //argument : 1,2

// 5 'return' 키워드

// function add(x,y) {
//   return x + y ;
// }

// const r = add(1,2);

// console.log(r)

// function add(x,y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     return '인자는 Number 타입이어야 합니다'
//   }

//   // 실행되지 않음
//   return x + y;
// }

// let r = add(1, ' foo');
// let t = add(1, 2);

// console.log(r)
// console.log(t)

// 6 콜백(callback)
// 다른 함수의 인자가 되는 함수

// function f(callback) {
//   let r = callback()
//   console.log(r)
// }

// function cb() {             //callback
//   return "foo"
// }

// f(cb);

// # 콜백으로 익명함수 사용하기

// function f(callback) {
//   let r = callback()
//   console.log(r);
// }

// f(function () {
//   return "foo"
// })

// 시계 만들기

// function getTime() {
//   let time = new Date().toLocaleTimeString();
//   console.log(time)
// }

// // setInterval(callback, ms)
// // ms(milliseconds)마다 callback을 실행하는 함수이다

// setInterval(getTime, 1000);

// Q. 나이를 인자로 전달 받아서 성인이면 ' 성인입니다' or '성인이 아닙니다'를
//    출력하는 함수를 만들어 보세요
//    인자가 숫자가 아닌 경우 연산을 중단하고 메시지를 출력하는 기능도 추가해보세요.

// function (age) {
//   if (typeof age !== 'Number') {
//     return ('숫자를 입력해주세요')
//   } 
// } 

// function age(my) {
//   if (typeof my !== 'number') {
//     return '숫자를 입력하세요'
//   } else if (my >= 18) {
//     return '성인입니다' 
//   } else {
//     return '성인이 아닙니다'
//   }
// }

// const r = age(24)

// console.log(r)

/*

*** 에러와 에러처리 ***

1 에러의 정의

2 에러 처리
try / catch

3 에러의 종류
> RefrenceError
> SyntaxError
> TypeError
> RangeError
> URIError

4 커스텀 에러

*/


// 1 에러의 정의
// name, message, stack 으로 구성되어있다
// 에러는 프로그램을 중단시킨다
// 에러는 처리가 되어야 한다

// console.log(X)

// 2 에러 처리

// try {
//   //코드를 작성한다
//   let x = 'foo';
//   console.log(x)

// } catch(err) {
//   //에러를 처리한다
//   console.error(err)
// }

// try/catch.....finally

// try {

//   console.log(x)

// } catch (err) {
//   console.error(err)
// } finally {             //에러 발생 여부와 상관없이 항상 실행된다
//   console.log('.')
// }


// 3 에러의 종류
// >RefrerenceError

// try {
//   // 선언되지 않은 변수를 참조했을 때 
//   console.log(x)

// } catch (err) {
//   console.error(err)
// }

// > SyntexError (문법오류)
// 컴파일 에러를 발생시킨다
// 컴파일러가 코드를 이해하지 못해서 발생한다

// try {

//     console.log(2022));   //SyntaxError: Unexpected token ')'

// } catch (err) {
//   console.error(err);
// }

// > TypeError
//변수나 인자가 유효한 타입이 아닐 경우 발생한다
// try {
//   // setInterval(callback, ms)
//   setInterval(null, 1000); 
//TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received null

// } catch (err) {
//   console.error(err)
// }

// > RangeError
// 값이 허가된 범위를 벗어났을 때 발생한다

// try {
//   const pi = Math.PI;

//   console.log(pi.toPrecision(200)) 
//   //RangeError: toPrecision() argument must be between 1 and 100
//   } catch (err) {
//   console.error(err)
// }

// > URIError
// encodeURI() 또는 decodeURI() 함수가 유효하지 않은 인자를 전달받았을 때 발생한다

// try {

//   decodeURI('%');

// } catch(err) {
//   console.error(err)
// }

// 4 커스텀 에러

// try {
//   let age = 15;

//   console.log('기네스 한병 주세요');

//   if (age < 18) {
//     // throw 커스텀 에러
//     throw '미성년자는 술을 살 수 없습니다'
//   }
//     // throw 가 실행되면 아래 코드는 실행되지 않는다

//   console.log('여기 있습니다');

// } catch(err) {
//   console.error('에러:',err);
// }

/*
 *** Array(배열) ***
한개 이상의 값을 가지고 있는 데이터 타입

1 Array에 접근하기

2 Array의 메서드

3 Array 순회하기

*/

// 1 Array 에 접근하기

// let arr = ['foo', 'bar', 'baz']

// console.log(arr[0])   //foo
// console.log(arr[1])   //bar
// console.log(arr[2])   //baz
// console.log(arr.length)  // 3 (아이템의 갯수)

// 2 Array 메서드

// let arr = ['foo','bar']

// //arr.push(newItem)
// arr.push('baz')

// console.log(arr)

// let arr = ['foo', 'bar', 'baz']

// //가장 마지막 item 1개를 제거한다
// arr.pop()

// console.log(arr)

// let arr = ['foo', 'bar', 'baz']

// //Array.splice(시작 index,(갯수)) 시작인데스 1부터 2개를 제거 
// // 갯수를 안적으면 시작인덱스 부터 끝까지 모두 제거
// arr.splice(1,2)
// console.log(arr)

// Array.contac()               // 합치기
//  let arr1 = ['foo', 'bar']
//  let arr2 = ['baz']

//  let arr3 = arr1.concat(arr2);

//  console.log(arr3)

// Array.filter(callback)

// const arr = ['foo', 'bar', 'baz']

// const r = arr.filter(function (item, index, array) { // 현재 item 만 사용됨
//   if (item[0]==='b') { // 아이템 중에서 첫글자가 b로 시작하는 아이템
//     return item;
//   }
// })

// console.log(r)

// const arr = [1,2,3,4,5];

// const r = arr.filter(function (item, index, array) {
//   if (item>3) {
//     return item;
//   }
// })

// console.log(r);

// 3 Array 순회하기 (반복문)

// let arr = ['foo', 'bar', 'baz']

// for (let i=0; i<arr.length; i++) {
//   // Array의 아이템에 특정한 작업을 수행할 수 있다
//   console.log(arr[i].toUpperCase()) // toUpperCase 는 대문자로 바꿔주는명령어
// }

// Q. A,B,C 로만 구성된 Array 로 바꾸어보세요
// Array.splice()를 사용

// const alphabets = ['A', 'B', 'C','D','E','F','G']

// alphabets.splice(3)

// console.log(alphabets)

// Q. 각 아이템에 10을 곱한 값의 합을 구해보세요

// let arr = [1, 2, 3];
// let sum = 0;

// for (let i=0; i<arr.length; i++) {

//   sum += (arr[i]*10);
//   } 

// console.log(sum);

/*
  *** Object (객체) ***
  데이터와 함수의 집합
*/

// const cat = {
//   // 속성(property)
//   name: "키티",
//   home: null,
//   // 속성의 값이 함수인 경우 : 메서드
//   sound : function () {
//     return "야옹"
//   }
// }

// // // cat 객체에 접근하기
// // console.log(cat)
// // console.log(cat.name) //이름 속성에 접근
// // console.log(cat['name']) //이름 속성에 접근
// // console.log(cat.color) // 존재하지 않는 속성에 접근 ... undefine
// // console.log(cat.sound()) //sound 메서드에 접근 .. 함수이기 때문에 괄호를 적어야 함

// // # 객체에 새로운 속성을 추가하기
// cat.age = 2;
// console.log(cat);

// //# 객체의 속성을 업데이트하기
// cat.home = "평리단길"
// console.log(cat)

// // # 객체의 속성을 삭제하기

// delete cat.home;
// console.log(cat);

// Q. 객체문제

// Q1. for 반복문을 이용해서
// 맥주의 이름만 출력해보세요.

// const beers = [
//   {name : 'Guiness', origin: 'Ireland'},
//   {name : 'Heineken', origin: 'Netherland'},
//   {name : 'Budwiser', origin: 'USA'},
// ]

// for ( let i=0; i<beers.length; i++) {
//   console.log(beers[i].name)
// }

// Q2. 유럽맥주의 이름을 출력해보세요
// for 반복문을 이용해서

// const beers = {
//   europeanBeers : ['Guiness', 'Heineken', 'Krononbourg'],
//   asianBeers: ['Asahi', 'Kloud']
// }

// const europeanBeers = beers.europeanBeers;

// for ( let europeanBeer of europeanBeers ) { // 변수명을 복수의 단수명을 사용을 주로 함
//    console.log(europeanBeer)
// }

// Q3. 판매중인 맥주(available: true)의 배열(array)를 만들어보세요
// filter 메서드를 사용해서

// const beers =[
//   {name: 'Guiness', origin: 'Ireland', available: false},
//   {name: 'Heineken', origin: 'Nethland', available: true},
//   {name: 'Budwiser', origin: 'USA', available: true},
// ]

// const availables = beers.filter(function (beer) { 
//   if (beer.available) { 
//     return beer;
//   }
// })

// console.log(availables)

/*
  *** Class ***

  객체를 생성하기 위한 템플릿

  1 클래스와 인스턴스
  2 정적(static) 속성과 정적 메서드
  3 미리정의된 클래스
  4 리터럴 표기법
*/

// class Cat {
//   // 생성자(함수)
//   // 인스턴스의 속성을 설정한다
//   constructor (name, age) {
//     this.name = name;
//     this.age = age ;
//   }

//   // 클래스의 속성
//   home = null;

//   // 클래스의 메서드
//   sound() {
//     return '야옹'
//   }
// }

// // Cat의 인스턴스
// const cat = new Cat('키티', 2)
// console.log(cat instanceof Cat) //true

// console.log(cat)
// // Cat 클래스의 home 속성을 상속받았다
// console.log(cat.home) //null
// // Cat 클래스의 sound메서드를 상속 받았다
// console.log(cat.sound()) //야옹

// 2 정적 속성과 정적 메서드
// 클래스와 관련된 유틸리티를 제공한다

// class Cat {

//   // 정적 속성(property) - static 을 사용
//   static personality = '폭력적'

//   // 정적 메서드
//   static isAdult(age) {
//     if (age<1) {
//       return '아기고양이'
//     } else {
//       return '어른고양이'
//     }
//   }
// }

// // 클래스 자체가 정적 속성을 호출한다
// console.log(Cat.personality);
// console.log(Cat.isAdult(2))

// // Math 클래스의 정적 속성
// const pi = Math.PI;
// console.log(pi);

// const pi = Math.PI;

//Number 클래스의 isNaN(Not a Number) 정적메서드
// console.log(Number.isNaN('foo'-1))


/* 
  3. 미리 정의된 클래스
  > 문자처리 : String
  > 숫자와 날짜 관련 : Number, Math, Date
  > 인덱스 컬렉션 : Array
  > 에러 : SyntexError, ReferenceError, TypeErro, ....
  > 기타 : Promise, JSON
*/

// 4 리터럴 표기법

// let foo = new String('Foo')
// console.log(foo);

// String 클래스의 인스턴스
// 리터럴 표기법(클래스를 호출하지 않는다)

// let foo = 'Foo'
// console.log(foo)
// console.log(foo.toUpperCase()) //String 클래스로부터 상속받은 메서드

//Number 클래스의 인스턴스
// let year = 2022;
// console.log(year.toString(2)); // Number 클래스로부터 상속받은 메서드

// let date = new  Date().toLocaleTimeString();
// // 날짜 객체는 리터럴 표기법을 사용할 수 없다.
// console.log(date)


/*
  Q. 클래스 
  다음을 클래스로 정의해보세요

  Beer 클래스

  > 인스턴스 속성
  이름, 원산지
  > 클래스 속성
  역사(History) : B.C 3000
  > 클래스 메서드
  만드는법(recipe) : 보리, 홉, 효모, 물로 만듭니다
  > 정적 속성
  주의(caution): 지나친 음주는 돈이 많이 듭니다
*/

// class Beer {
//   constructor (name, origin) {
//         this.name = name;
//         this.origin = origin ;
//       }

//   history = 'B.C 3000'
  
//   recipe () {
//     return '보리, 홉, 효모, 물로 만듭니다'
//   }


// static caution = '주의(caution) : 지나친 음주는 돈이 많이 듭니다'
// }

// // Beer 클래스의 인스턴스
// const irishBeer = new Beer('Guiness', 'Ireland')
// const dutchBeer = new Beer('Heineken', 'Nethdeland')

// // 클래스의 속성
// console.log(irishBeer)
// console.log(dutchBeer)

// // 클래스의 메서드
// console.log(irishBeer.recipe())
// console.log(dutchBeer.recipe())

// // 정적 속성
// console.log(Beer.caution)

/*
  *** 비동기 작업 (Asynchronous) ***
  블로킹을 방지하기 위해 사용된다
  예시) 서버에 데이터를 요청하는 등

  1 동기 작업
  2 비동기 작업
  3 실제 사용 예시
*/

// 1 동기 작업

// function f() {
//   console.log('foo')
// }

// f()                 // 동기 함수 : 호출되었을 때 실행된다
// console.log('bar')  

// 2 비동기 작업

// function f() {
//   setTimeout(() => {
//     console.log('foo')
//   }, 0)
// }

// f()                   // 비동기 함수 : 호출순서와 상관없이 가장 마지막에 실행된다
// console.log('bar')

// function f() {
//   setTimeout(() => {
//     console.log(x)
//   }, 0)
// }

// try {

//   f()                  // try/catch 에서 비동기함수의 에러를 처리할 수 없다
//   console.log('bar');
// } catch (err) {
//   console.error(err)
// }

// 3 실제 사용 예시

// function fetchData(callback) {
//   let data = {foo: 'bar'}

//   setTimeout(() => {
//     callback(null, data)
//   }, 1000)
// }

// // 서버에 데이터를 요청하는 함수, 비동기 함수
// // 서버에서 데이터를 응답받는데 1초가 걸린다고 가정

// fetchData(function (err, data) {
// // 비동기 함수 내부에서 에러 처리(try/catch)

//   try {
//     if (err) {
//       throw err;
//     }

//     console.log('서버의 응답:', data)

//   } catch (err) {
//     console.error(err)
//   }
// });

// console.log("다음 작업");

/*
  *** Promise  객체 ***
  비동기 작업의 성공/실패 여부 및 결과를 나타낸다
  비동기 작업의 가독성을 향상시키기 위해 사용한다

  1 Primise 객체의 구조
  2 실제 사용 예시
  3 async/await
*/

// 1 구조

// const o = new Promise((res, rej) => {

//   // 비동기 작업이 성공함
//   // res('foo') // res(resolve, 성공)
//   // res ('foo')

//   // 비동기 작업이 실패함
//   rej('bar'); //rej(rejected, 실패)
// })

// 상태 : pending 은 비동기 작업이 보류중임을 의미한다
// 상태 : fullfilled은 비동기 작업이 성공함을 의미한다
// 상태 : rejected는 비동기 작업이 실패함을 의미한다
// console.log(o)

// 2 실제 예시

// function fetchData() {
//   const promise = new Promise((res,rej) => {
//     res({foo: 'bar'})
//   })

//   //  Promise 객체를 리턴한다
//   return promise;
// }

//   // 서버에 데이터를 요청하는 함수
// fetchData()
// .then(data => {      //데이터를 처리하는 부분
//   console.log(data)
// })
// .catch(err => {
//   console.error(err)  // 에러를 처리하는 부분
// })

// console.log("다음 작업")

// 3 async / await

// function fetchData() {
//   const promise = new Promise((res,rej) => {
//     res({foo: 'bar'})
//   })

//   //  Promise 객체를 리턴한다
//   return promise;
// }

// f()
// async function f() {
//   try {

//     const data = await fetchData(); //비동기 작업이 끝날때까지 기다린다
//     // 비동기 작업이 많을때 사용한다
//     console.log(data);

//     console.log("다음작업")

//   } catch (err) {
//     console.error(err)
//   }
// }

/*
  *** ES6 (2015) ***
  새로운 문법이 많이 나온 버전

  1. 새로나온 문법
  > 삼항연산자
  > let, const
  > 화살표 함수
  > Array.map() 메서드
  > 구조분해할당 (destructing)
  > 전개구문 (spread syntax)
  > 클래스
  > Promise
*/

// 1 Array.map() 메서드

// const arr = ['foo', 'bar', 'baz']

// // 배열을 순회하면서 아이템에 특정한 작업을 할 수 있다
// // 새로운 배열을 리턴한다

// const r = arr.map((item,index,array) => {
//   return item.toUpperCase()
// })

// console.log(r)

// 2 구조분해할당 (desrtucting assignment)
// 간단한 문법으로 객체/배열의 속성/아이템을 변수에 할당할 수 있다


// const arr = ['foo', 'bar', 'baz']

// // const foo = arr[0]
// // const bar = arr[1]
// // const baz = arr[2]

// // console.log(foo,bar,baz);

// // 구조분해할당
// const [foo,bar, baz] = arr;

// console.log(foo,bar,baz);

// 객체에서 구조분해할당
// const o = {foo: 'foo', bar: 'bar', baz: 'baz'}

// // const foo = o.foo;
// // const bar = o.bar;
// // const baz = o.baz;

// // console.log(foo, bar, baz)

//--------------------------------------
// const {foo, bar, baz} = o;
// console.log(foo,bar,baz)
//---------------------------------------

// 함수의 파라미터의 구조분해할당

// const o = {foo: 'foo', bar: 'bar', baz: 'baz'};

// // function f(props) {
// //   const foo = props.foo;
// //   const bar = props.bar;
// //   const baz = props.baz;

// //   console.log(foo,bar,baz)
// // }

// // f(o)
// //--------------------------------------------
// function f({foo,bar,baz}) {
//   console.log(foo,bar,baz)
// }

// f(o)

/*
  Q. 구조분해할당 lol
*/

// Q1. 각 나라의 맥주를 변수에 담아보세요
// 구조분해할당을 사용해서
// irishBeer, dutchBeer, americanBeer

// const beers = [
//   {name: 'Guiness', origin: 'Ireland'},
//   {name: 'Heineken', origin: 'Netherland'},
//   {name: 'Budwiser', origin: 'USA'},
// ]

// const [irishBeer, dutchBeer,americanBeer] = beers;

// console.log(irishBeer)

// Q2. 객체의 속성을 변수에 담아보세요
// 구조분해 할당을 이용

// const irishBeer = {name: 'Guiness', origin: 'Ishland', available: false}

// const {name,origin,available} = irishBeer;

// console.log(name, origin, available)

// Q3. 함수의 파라미터를 객체분해할당 문법으로 작성해보세요

// const irishBeer = {name: 'Guiness', origin: 'Ishland', available: false}

// f(irishBeer);

// function f({name, origin, available}) {
//   console.log(name, origin)
// }

/*
  *** 전개구문 (spread syntax) ***
  객체/배열의 속성/아이템을 간편하게 복사할 수 있다
*/

// 배열

// const arr = ['foo', 'bar']
// const newItem = 'baz';

// const r = [...arr, newItem];

// console.log(r)

// const arr1 = ['foo', 'bar']
// const arr2 = ['baz']

// // const r = [...arr1, ...arr2];
// // console.log(r)

// const r = [...arr2, ...arr1]
// console.log(r)


// 객체 전개구문 

// const o = {foo:'foo', bar: 'bar'}
// // 새로운 속성 추가
// const r = {...o, baz:'baz'}

// console.log(r)

// const o = {foo: 'foo', bar: 'bar', baz: 'bar'}
// // 속성 업데이트
// const r = {...o, bar:null}

// console.log(r)

// Q. beers 배열에 일본 맥주를 추가해보세요
// 전개구문 이용

// const beers = [
//   {name: 'Guiness', origin: 'Ireland'},
//   {name: 'Heineken', origin: 'Netherland'},
//   {name: 'Kloud', origin: 'S.Korea'},
// ]

// const japaneseBeer = {name: 'Asahi', origin: 'Japan'}

// const beer = [...beers, japaneseBeer]
// console.log(beer)

// Q. 기네스가 재입고 되었다.
// 객체의 전개구문 이용

// const irishBeer = {name: 'Guiness', origin: 'Ireland', available : false}

// const r = {...irishBeer, available : true}
// console.log(r)

//******************************************************************************/
/*
  *** JSON (JavaScript Object Notation) ***

  자바스크립트 객체 표기법
  자바스크립트 객체를 저장하거나 전송하기 위한 텍스트 포멧

  1 객체와 JSON
  2 JSON.stringfy()
  3 JSON.parse()
*/

// // 1 객체와 JSON
// const o = {foo: 'bar'}
// const json = '{"foo":"bar"}'

// console.log(o)
// console.log(json)
// console.log(typeof json)   // String

// 2 JSON.stringify()
// 객체를 JSON 포멧으로 변환한다

// const o = {foo:'bar'}
// const r = JSON.stringify(o);

// console.log(r)

// 3 JSON.parse()
// JSON을 객체로 변환한다

// const json = '{"foo": "bar"}'
// const r = JSON.parse(json)

// console.log(r)
// console.log(typeof r)       // object
