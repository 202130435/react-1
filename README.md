# 허동민 학번: 202130435

## 3월 27일 4주차

### 리액트 시작

### 1. 개요
- 이번 장을 통해서 React 개념의 80%를 학습하게 됩니다.
- React 개발의 흐름을 이해 하면서 전체 개념을 한 번에 정리합니다.

- [학습 내용]
- component 생성 및 중첩 방법
- 마크업과 스타일을 추가하는 방법
- 데이터를 표시하는 방법
- 조건부 렌더링과 목록 렌더링 방법
- 이벤트에 응답하고 화면을 업데이트하는 방법
- component 간에 데이터를 공유하는 방법
▲ 공식 사이트의 "학습 하기 (Learn)"을 참고하세요.  


### 2. Component의 생성 및 nesting(중첩)
- 2장에서 살펴본 것과 같이 React 앱은 component로 만들어집니다.
- component는 고유한 로직과 모양을 가진 UI의 일부입니다.
- component는 버튼처럼 작을 수도 있고, 전체 페이지처럼 클 수도 있습니다.
- component는 마크업을 반환(return)하는 JavaScript 함수입니다.

- Nesting은 CSS 선택자의 중첩 구조를 생각하면 쉽게 이해할 수 있습니다.
    - CSS 중첩 구조는 2023년 부터 자체 지원합니다. 이전에는 Sass나 Lass 등을 이용할 때 사용했습니다.
    ![Image](https://github.com/user-attachments/assets/235967d5-1e10-4a66-b7ba-b225542d4a6f)

[실습]
- MyApp이라는 함수형 component를 만들어 보겠습니다.
- 먼저 무엇부터 해야 할지 생각해 보세요.
    1. 어떤 디렉토리에 파일을 만들지?
    2. 파일 이름은 뭐라고 할지?
    3. 함수는 어떻게 구성할지?

- 생각이 끝났으면 직접 만들어 봅니다.
    1. 우리가 사용할 component는 src/ 아래 만들어야 합니다.
    2. 이번에는 MyApp을 만들지 않고 기존의 App.js를 이용하도록 합니다. 3. App.js에 MyButton component를 만들고 중첩해 보도록 하겠습니다.


* 먼저 프로젝트를 실행하여 잘 동작하는지 확인 합니다. $ npm start
* Appjs의 내용을 모두 삭제하고 이곳에 코딩합니다.
* 다음과 같이 코드를 작성하고, 정상적으로 실행되는지 확인합니다.
```
function App() {
    return (
        <div>
            <h1>Welcome to my app</h1>
        </div>
    );
}

export default App 
```


* App component 위에 MyButton component를 작성합니다.
* 실행 화면을 확인해 봅니다.
* MyButton을 아직 중첩하지 않았기 때문에 아직 화면에는 변화가 없습니다.
* App component안에서 <MyButton>을 호출해서 중첩해 줍니다.
* 이제 화면에서 버튼을 확인할 수 있습니다.
```
function MyButton() {
  return (
    <button>I'm My button component</button>
  )
}
```


* 완성된 App component는 다음과 같습니다.
```
function MyButton() {
  return (
    <button>I'm My button component</button>
  )
}
export default function App() {
  return ( 
    <div>
    <h1>Hello React</h1>
    <MyButton />
    </div>
  )
};

export default App 
```



* export default 선언의 위치는 어디가 좋을까요?
* VS Code에서 자동 완성을 하면 위와 같이 맨 아래 선언되는 것을 확인할 수 있습니다.
* 하지만 공식 문서처럼 main component의 function 키워드 왼쪽에 선언하는 것이 좋습니다.
* 특히 한 파일에 여러 개의 component가 있을 경우라면 이렇게 하는 것이 가독성에 유리합니다.

import MyB from "./MyButton"

export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyB />
    </div>>
  )
}


* export default 키워드는 파일내의 component중 기본 component를 지정합니다.
* 이 키워드의 사용도 JavaScript 문법입니다.
* 좀더 구체적으로 알고 싶다면 사이트의 MDN 혹은 javascript.info 링크를 확인하세요.

- [export default export의 차이]
* Named Exports (export)
    * 하나의 파일안에 여러 개의 component가 있을 때 사용합니다.
    * component를 사용하는 쪽에서는 component 정확한 이름을 반드시 명시해야 합니다.
    * (Ex) import { add, subtract, multiply, divide ) from/math'
* Default Exports (export default)
    * 하나의 파일안에서 하나의 component만 내보내는 경우 사용합니다.
    * component를 사용하는 쪽에서는 어떤 이름을 사용해도 상관 없습니다. 
    * (Ex) import calc from './calculator'


2. Component의 생성 및 nesting(중첩)
- 예제 코드에서 MyButton component만 분리 합니다.
- 어떤 과정을 거쳐야 하는지 생각 하면서, 예제 코드와 같은 결과가 나오도록 수정합니다.

- Default Exports이기 때문에 import할 때는 어떤 이름을 사용해도 상관없습니다.
- 다만 convention을 달리할 경우 가독성이 떨어지기 때문에 대문자로 시작하는 것이 좋습니 다.
- 테스트를 끝내고 원래대로 복원해 주세요.


2. Component의 생성 및 nesting(중첩)
- 다음은 ButtonLib라는 component를 새로 만듭니다.
- 내용은 Named Exports의 button component 3개 만듭니다.
- ButtonLib에 선언한 component를 2개만 App으로 중첩해 봅니다.

App.js
```
function Button1() {
    return (
        <button>Button1</button>
    )
}

function Button2() {
    return (
        <button>Button2</button>
    )
}
function Button3() {
    return (
        <button>Button3</button>
    )
}

export { Button1, Button2, Button3}
```

Buttonlib.js
```
function Button1() {
    return (
        <button>Button1</button>
    )
}

function Button2() {
    return (
        <button>Button2</button>
    )
}
function Button3() {
    return (
        <button>Button3</button>
    )
}

export { Button1, Button2, Button3}
```

codesandbox 참고


### 3. JSX로 마크업 작성하기
- 앞에서 작성한 코드의 마크업 문법을 JSX라고 합니다.
- 반드시 사용해야 하는 것은 아니지만, React 프로젝트에서는 편의성을 위해 JSX를 사용합
니다.
- JSX는 HTML보다 더욱 엄격한 문법을 적용합니다.
- JSX에서는 <br/>같이 싱글 태그라도 태그를 닫아야 합니다.
- React 에서는 여러 개의 component를 JSX 태그로 반환할 수 있습니다.
- 다만 여러 개의 component를 <div>..</div> 또는 빈 <>...</> wrapping해 줘야 합니다.

- AboutPage component를 작성합니다.
- 이 component를 화면에서 확인하려면 어떻게 해야 할까요?
    - App.js에서 불러오면 되겠죠!
    - 수정하고 출력을 확인해 보세요.

AboutPage
```
    export default function AboutPage() {
    return (
        <>
          <h1>About Page</h1>
          <p>Hello!!!</p>
        </>
    )
}
```

리액트 사용할 때는
```
export default {
    return (
        <>
    )
}
```
export default {
    return (
        <>
    )
}
필수 !! 특히 <> wrapping 추가


### 4. 스타일 추가하기
- React에서는 className으로 CSS 클래스를 지정합니다. 
- className은 HTML의 class 속성과 동일한 방식으로 동작합니다.
- CSS 규칙은 별도의 CSS 파일에 작성합니다. 그런데 React는 CSS 파일을 추가하는 방법을
규정하지는 않습니다.
    - 정적 페이지를 작성할 때와 동일한 방법을 지원합니다.
- 가장 간단한 방법은 HTML에 <link> 태그를 추가하는 것입니다.
    - 그러나 link를 추가하면 정적 페이지를 수정해야 하기 때문에 추천하지 않습니다.
    - React 사용할 수 있는 여러가지 방법은 뒤에서 알아보도록 하겠습니다.
- 만일 빌드 도구나 프레임워크를 사용한다면 해당 문서를 참고하여 프로젝트에 CSS 파일을
추가합니다.

- 다음 절에서 데이터를 표시한 후에 스타일을 적용하는 방법을 알아 보겠습니다.



### 5. 데이터 표시하기
- JSX를 사용하면 자바스크립트에 마크업을 넣을 수 있습니다.
    - 반대 아닌가? JS안의 마크업 안에 JS를 넣는 다는 것이 더 정확합니다.
- JSX 코드 내에서 JavaScript로 "탈출하여 변수나 표현식을 사용하는 것입니다.
- 이 방법을 "Escape Back"이라고 합니다.
- {}중괄호를 사용해서 변수나 표현식을 사용자에게 표시하도록 하는 것입니다.

```return(
<h1>
{user.name} // 자바스크립트로 이스케이프
</h1>
)
```
```
return (
<img
className="avatar"
src=[user.imageUrl]
/>
);
```

- src 속성에 user.imageUrl 변수의 값을 전달하여 이미지의 경로를 설정하고 있습니다.
- 반면에 className="avatar"는 단순히 문자열을 전달하는 경우에는 중괄호 대신 큰 따옴표 를 사용합니다.



- 예제에는 App.js에 Profile component를 작성했지만, 별도의 component로 만들어 보겠습
니다.
- Profile component가 완성되면 App.js에서 호출하고, 출력을 확인 합니다.
- 예제에서 style={{ }}은 특별한 문법이 아니라, style={ }의 JSX 중괄호 안에 user 객체를 로 표시한 것입니다.

```
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  
```


- 그런데 출력된 결과를 보면 스타일지 적용되어 있지 않은 것을 확인할 수 있습니다.
- 당연한 일이지만 아직 스타일을 선언하지 않았기 때문입니다.
- "스타일 추가하기"에서 작성한 avatar class를 Profile.css라는 파일을 만들어 선언해 보세
요.
```
.avatar {
    border-radius: 50%;
}

```

- 다음으로 Profile component에 적용해 보도록 하겠습니다.
- 적용 방법은 간단합니다. import 키워드를 이용해서 파일 경로를 작성하면 됩니다.
```
import './Profile.css'

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  

.
.
.
  
```


- 이제 아바타의 사진이 동그란 모습으로 스타일링 된 것을 확인할 수 있습니다.
이 화면이 지금까지 우리가 작성한 코드의 결과물 입니다.


- 결과물이 화면 왼쪽에 있어서 보기가 불편하면 어떻게 해야 할까요?
- 만일 모든 데이터를 중앙으로 정렬하려면 어떻게 해야 할까요? Welcome to my app
- App.js에 스타일을 적용하면 됩니다.
- App.css도 이미 만들어져 있으니 이곳에 스타일을 추가 해서 적용해 보세요.

완성된 파일
```
import MyB from "./MyButton"
import { Button1, Button3 }  from "./ButtonLib"
import AP from "./AboutPage"
import Profile from "./Profile"
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

export default function App() {
  return (
    <div className="wrapper">
      <h1>Hello React</h1>
      <MyB /><br />
      <Button1 />&nbsp;
      <Button3 />
      <AP />
      <Profile />
    </div>
  )
}

```

6. 조건부 렌더링
- React에서 조건문을 작성하는 데에는 특별한 문법이 필요 없습니다.
- 일반적인 자바스크립트 코드를 작성할 때 사용하는 것과 동일한 방법을 사용합니다.
![Image](https://github.com/user-attachments/assets/b0ea5b53-c694-4bb3-a227-92d08f4428d2)


### 7. 리스트 렌더링하기
- 컴포넌트 리스트를 렌더링하기 위해서는 for 문 및 map() 함수와 같은 자바스크립트 기능 을 사용합니다.
- <li>에 key 속성 (attribute)이 있는 것을 주목하세요.
- 목록을 사용할 때는 각 항목에 대해 고유하게 식별하는 문자열 또는 숫자를 전달해야 합니
다.
- 항목을 삽입, 삭제 또는 재정렬할 때 어떤 일이 일어났는지 알기 위해 key를 사용합니다.
- 이것을 key props라고 하는데, 자세한 내용은 props를 학습할때 다시 소개합니다.
니다.
![Image](https://github.com/user-attachments/assets/835b6b2b-3ad7-4d24-b2dd-d82e39aa68d5)

니콜라스 메모 



- 예제를 참고해서 ShoppingList component를 작성해 보세요.
- 그리고 App.js에 ShoppingList를 추가하고 출력을 확인해 보세요.
- 앞으로 실습을 할 때는 예제에 App.js라고 나와 있어도 코드의 component이름으로 파일을 만들어서 사용하고, App.js에서 component를 불러와서 출력하도록 하겠습니다.
```
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }
  ```
- 출력이 오른쪽 화면처럼 나오면 성공입니다!


## 3월 20일 3주차

### 이어서
* node_modules/
    * 초기 node_modules 및 새로 설치하는 패키지가 저장됩니다.
    * 초기 파일 37,352. 폴더 4,597/ 용량은 200MB로 엄청난 양의 파일이 존재합니다.
    * git으로 관리하지 않기 때문에 디렉토리 이름이 흐릿하게 나와있는 것을 확인할 수 있습니다.

* public/
    * 정적(static) 파일을 저장하는 디렉토리입니다.
    * build 후 배포할 html, css, JavaScript 등이 보관되는 곳입니다.
    * 개발하면서 특별히 수정할 코드는 없습니다.

* public/index.html
- React

* src/
    * React 프로젝트의 주요 코드가 위치하는 디렉토리 입니다.
    * 개발 하면서 대부분의 작업이 이루어지는 곳입니다.

* src/App.js
    * 메인 component 로 필요한 sub component를 모아서 관리합니다.
    * 출력을 위해서 index.js로 전달됩니다.

* src/index.js
    * React 앱의 진입점으로 최종 렌더링이 되는곳
    * ReactDOM.createRoot를 사용하여 App.js를 렌더링합니다.

* src/index.css
    * 전역 스타일을 정의하는 스타일 파일입니다.


### 의존형 관리와 package.json
* package.json은 패키지의 의존성을 관리하는 파일입니다.

* 의존성이란, 하나의 소프트웨어가 다른 소프트웨어(라이브러리, 패키지, 모듈 등)에 의존하여 동작하는  
관계를 말합니다

* 즉, 어떤 프로젝트에 사용된 각종 패키지 등의 버전을 동일하게 유지하기 위한것입니다.

* 협업을 할 때는 팀원들 각자의 컴퓨터에 같은 패키지 들을 설치해서 동일한 개발환경을 구성해야 한다.  
코드는 깃허브등 깃 서버를 이용하지만, 노드 패키지는 각 팀원들이 설치해야한다.
* 의존성을 무시하면 다른버전의 패키지를 설치하는 팀원 때문에 개발 프로젝트의 오류등이 발생할 수 있다.
* 개인의 경우도 깃허브에 있는 코드를 내려받은 후에 동일한 개발환경을 구성해야 할 떄가 있습니다.

### 의존성 관리와 package.json
- [의존성을 관리하는 이유]
* 손쉬운 설치 및 업데이트
    * npm install 또는 yarn install 한 줄로 모든 의존성을 자동 설치 가능.
    * 특정 버전의 라이브러리를 쉽게 업데이트 가능.
* 일관된 개발 환경 유지
    * 팀원들과 같은 라이브러리 버전을 유지할 수 있음.
    * package-lockjson을 활용하면 동일한 패키지를 정확한 버전으로 설치 가능.
* 중복 설치 방지
    * 필요 없는 라이브러리를 제거하여 프로젝트를 가볍게 유지할 수 있음.
* package.json은 이런 의존성을 체계적으로 관리하는 역할을 합니다.
* 프로젝트에 필요한 라이브러리를 쉽게 설치, 업데이트, 유지할 수 있도록 도와주는 시스템 입니다.

###  의존성 관리와 package.json [package.json의 의존성 내용의 종류]
* dependencies: 실제 코드에서 사용하는 라이브러리 (예: React, Express 등)
* devDependencies: 개발할 때만 필요한 라이브러리들 (예: Webpack, ESLint 등)
* peerDependencies: 필요한 라이브러리만, 직접 설치하지 않고 사용자에게 설치를 맡기는 경우
* optionalDependencies: 있어도 되고 없어도 되는 선택적 의존성.

### 의존성 관리와 package.json
[package.json과 package-lock.json 차이]
![Image](https://github.com/user-attachments/assets/16f0895f-e751-485c-bc37-4f64f400bf86)
.
* package.json에 "react":"^18.0.0"이라고 기록되어 있으면, 설치할 때 최신 18.xx 버전이 자동으로 설치될 수 있습니다.

* package-lock.json에는 "react": "18.2.0"처럼 정확한 버전이 기록되어 있고, npm install을 실행해도 같은 버전이 설치됩니다.

* 따라서, 팀 프로젝트에서는 package-lock.json을 유지하는 것이 중요합니다.

* package-lock.json만 유지하면 되지 않을까? package.json도 유지해야 하는 이유는 무엇일
까?

[package.json을 유지해야 하는 이유]
 1. 프로젝트의 의존성 정보 제공
    * 프로젝트에서 어떤 패키지를 사용하는지 정의하는 역할을 합니다.
    * 어떤 패키지를 설치해야 하는지 알 수 있는 기준이 됩니다.

2. 버전 범위 설정 가능
    * ^18.0.0처럼 최신 패치 버전을 허용할 수도 있고, 18.2.0처럼 정확한 버전만 고정할 수도  있습니다.
    * 개발자가 원하는 방식으로 유연하게 관리할 수 있습니다.
3. 스크립트와 메타데이터 저장
-"scripts" 속성을 이용해 빌드, 테스트, 실행 등의 명령어를 저장할 수 있습니다.
프로젝트 실행을 위해서는 반드시 필요 합니다.
4. 새로운 패키지 설치 및 관리
패키지를 설치하면 package.json에 추가되고, package-lock.json에는 정확한 버전이 기
록됩니다.
만약 package.json이 없으면, 새로운 패키지를 추가할 수 없습니다.

###  node module의 재설치
* node module을 다시 설치해야 하는 경우는 다음과 같은 3가지 정도의 상황이 있을 수 있습니다.
    * 팀 작업을 하면서 GitHub로 부터 프로젝트 파일을 clone 했을 경우.
    * 개인이 자신의 프로젝트를 다른 PC 등에서 clone을 받아 계속 개발해야 하는 경우.
    * 프로젝트에 문제가 생겨서 node module을 다시 설치해야 하는 경우.

[clone을 받은 프로젝트의 경우]
1. 다음 명령을 실행하면 package.json과 package-lock.json을 참고하여 패키지를 다시 설치 합니다.
2. node_modules 디렉토리는 자동으로 생성됩니다.
3. 설치가 끝나면 프로젝트를 실행시켜서 정상동작을 확인합니다.


* [프로젝트에 오류나 의존성 등의 문제가 생겼을 경우]
1. node modules 폴더와 package-lock.json 파일 삭제 합니다. 

2. npm 패키지의 임시 저장소인 cache를 초기화 합니다.  
    - cache가 오래되면 충돌이 발생할 수도 있기 때문에 문제 해결에 도움이 될 수 있는 작업입니다.  
    - force옵션으로 강제 삭제 합니다  
    ▲ 일반적으로 캐시 정리는 안 해도 되지만, 일존성 문제가 계속된다면 실행하는 것이 좋습니다.

3. 패키지를 다시 설치 합니다.   


### node module의 재설치
- [package-lock.json을 삭제하는 이유]
1. package-lock.json이 손상되었거나, 잘못된 의존성이 있을 때
    - 가끔씩 package-lockjson이 의존성 충돌 때문에 이상한 상태가 될 때가 있습니다.
    - 예를 들면 패키지를 여러 번 업데이트하면서 충돌이 발생하는 경우
    - 수동으로 package.json을 수정해서 package-lock.json에 영향을 미치는 경우
    - 이런 경우, package-lockjson을 삭제하고 새로 생성하면 충돌이 해결될 수도 있습니다.  

2. 최신 버전의 패키지를 다시 받고 싶을 때
    - 최신 버전의 패키지를 다시 다운로드하고 싶다면, 삭제하는 것이 효과적입니다. 
    - 재설치 하면 최신 버전의 종속성을 기반으로 새로운 package-lock.json이 생성됩니다.  

3. 팀 프로젝트에서 다른 팀원이 이상한 상태로 package-lock.json을 업데이트했을 때
    - 팀원 중 누군가가 로컬에서 이상한 상태로 package-lock.json을 변경했다면 파일을 삭제 하고 다시 설치하는 것이 더 깨끗할 수도 있습니다.

    - 문제가 없다면 package-lock.json을 유지하는 것이 좋지만, 의존성 충돌이나 패키지 문제 로 인해 에러가 발생한다면 삭제 후 재설치 하는 것이 좋습니다.  


### 개요
- React는 component 단위로 개발하여 레고를 조립하듯이 앱을 완성합니다.

- component는 작은 기능을 실행할 수 있는 하나의 모듈입니다.

- 공식 사이트의 홈에는 component가 어떻게 사용되는지 설명하고 있습니다.

- React가 compontent를 이용하여 어떻게 사용자 인터페이스를 구성하는지 살펴보도록 하겠습니다.

- 이해를 돕기 위해 React 코드가 나오지만 코드 자체를 이해할 필요는 없습니다.

- React component가 페이지로 변해가는 과정에 집중해 주세요.  

- React 사이트에 접속하여 예제 코드를 확인하세요.

- 사이트에서 자체 한글을 지원합니다.  "자동 번역 사용 금지"  

- 왼쪽 코드에 마우스를 hover하면, 오른쪽 출력에 어느 부분인지 확인할 수 있습니다.

- component의 조립과정에만 집중해주세요.

### Component를 사용한 유저 인터페이스 생성

- React를 사용하면 component라고 하는 개별 조각으로 사용자 인터페이스를 구축할 수 있습니다.

- Video, Thumbnail 및 LikeButton이라는 react component를 생성하고, 이 component를 결합하여  화면과 페이지 그리고 앱 전체를 구성합니다.

- 첫 번째 예제는 Video.js라는 함수형 component입니다.

- component의 이름은 파일 이름과 동일하게 하며, 영문 대문자로 시작합니다. PascalCase

- Video component는 Thumbnail과 LikeButton이라는 두 개의 component를 포함하고 있습니다.

- React는 개인, 팀, 조직에서 작성한 component를 원활하게 결합할 수 있도록 설계되었습니다.

### 3. Component를 작성하는 JavaScript Markup

- React component는 JavaScript 함수입니다.

- 조건에 따라 화면을 다르게 표시하고 싶다면 if문을 사용하면 됩니다.

- 목록을 표시하고 싶다면 map()함수를 이용하면 됩니다.

- 결국 React를 배우는 것은 프로그래밍을 배우는 것과 같습니다.

- JavaScript를 이미 알고 있다면 더 쉽게 배울 수 있습니다.

### 4. 필요한 곳에 상호작용 기능 추가

- React component는 데이터를 수신하고, 화면에 표시해야 하는 내용을 반환합니다.

- 사용자의 입력을 받아 새로운 데이터를 component에 전달할 수도 있습니다.

- 이때 React는 상호작용을 통해 얻은 새 데이터로 화면을 업데이트합니다.

- 이 것은 Searchinput과 VideoList 두 개의 component를 결합한 또 다른 component입니다.
- React 개발은 작은 component를 개발하고, 이렇게 개발된 component를 모아서 조금 더 큰 component
를 개발하는 것입니다.

### 5. full-stack App 개발을 도와주는 React Framework
- React는 라이브러리이기 때문에 component를 조합할 수는 있지만, 라우팅 및 데이터 가져 오기 방법 등을 규정하지는 않습니다.

- React로 전체 앱을 빌드하려면 Next.js 또는 Remix와 같은 full-stack React Framework을
사용하는 것이 좋습니다.

- 사이트의 confs/[slug].js는 Next.js에서 제공하는 routing 방법 중 하나입니다.

- React도 하나의 아키텍처입니다.
    - 소프트웨어 아키텍처(software architecture)는 소프트웨어의 구성요소들 사이에서 유기적 관계를 표현하고 소프트웨어 의 설계와 업그레이드를 통제하는 지침과 원칙 -wikipedia-

-  따라서 이를 구현하는 Framework을 사용하면, 서버에서 실행되거나 혹은 빌드 중에도 비동기 componen에서 데이터를 가져올 수도 있습니다.
- 또한 파일이나 데이터베이스에서 데이터를 읽어와서 대화형 componen에 전달할 수도 있습니다.

- full-stack App을 개발하는 것이라면 Framework을 사용하는 것이 생산성이 높습니다.

### 6. 모든 플랫폼에서 최고의 성능을 발휘하는 React
- React를 사용하면 동일한 기술을 사용하여, 웹 앱과 네이티브 앱을 모두 구축할 수 있습니 다.
- 각 플랫폼의 고유한 강점을 활용하여 모든 플랫폼 잘 어울리는 인터페이스를 구현할 수 있 습니다.

* [웹의 본질에 충실하기]
    * 사람들은 웹 앱 페이지가 빠르게 로드되기를 기대합니다.

    * React를 사용하면 서버에서 데이터를 가져오는 동안에도 HTML을 스트리밍을 시작할 수 있기 때문에, JavaScript 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수 있습니다.

    * 또한 클라이언트 측에서는 표준 웹 API를 사용해서, 렌더링 도중에도 UI를 반응하도록 할 수 있습니다.

    * 이런 동작들은 사람들이 원하는 빠른 렌더링을 도와줍니다.

### 6. 모든 플랫폼에서 최고의 성능을 발휘하는 React
[진정한 네이티브 UX를 실현]
- 사람들은 네이티브 앱이 자신의 플랫폼과 같은 모양과 느낌을 주기를 원합니다.

- React Native와 Expo를 사용하면 Android, iOS 등을 위한 앱을 React로 빌드할 수 있습니다.

- 앱이 네이티브처럼 보이고, 느껴지는 이유는 UI가 네이티브이기 때문입니다.

- 즉 Web View가 아니라 플랫폼에서 제공하는 Android 및 iOS View를 사용하기 때문입니다.

- React를 사용하면 웹 개발자도 네이티브 개발자도 될 수 있습니다.

- 사용자 경험의 희생 없이 다양한 플랫폼에 앱을 출시할 수 있습니다.

- 기업에서는 플랫폼 간의 장벽을 허물고, 전체 기능을 협업을 통해 개발할 수 있는 팀을 구성할 수 있습니다.

![Image](https://github.com/user-attachments/assets/7d1013ad-01db-4adc-af6c-a53ef45c8bb6)

### 새로운 기능에 맞춰 업그레이드 하기
- React는 변화에 신중하게 접근합니다.

- 모든 React commit은 10억 명 이상의 사용자에 의해 여러 환경에서 테스트를 거쳤습니다.

- Meta에 있는 10만개 이상의 React component는 모든 마이그레이션 전략의 검증을 지원 합니다.
    - 마이그레이션이란 데이터나 소프트웨어를 한 시스템에서 다른 시스템으로 이동하는 것.
- React 팀은 항상 React를 개선하는 방법을 연구합니다.

- 몇 년이 걸리는 연구도 있습니다.

- React는 연구 아이디어를 제품에 적용하는 데에 높은 기준을 가지고 있습니다.

- 검증된 접근 방식만이 React 일부가 됩니다.


## 3월 13일 2주차
### Node.js란 무엇인가?
- 2009년 발표된 Node.js를 개발한 라이언 달은 물리학 정공이나 개발에 흥미를 느껴 프리랜서로 개발자도 겸용.
- 아파치 서버는 요청을 처리할 때 블로킹(blocking) 방식으로 동작 한다는 문제가 있었다.
- 이를 해결하기 위해 비동기(Asynchronous)방식의 서버가 필요하다 판단하여 개발 시작  
- 개발을 시작할떄는 파이썬을 사용하다가 자바스크립트의 비동기 특성이 서버 개발에 더 적합하다 판단해 자바스크립트로 변경함
- 당시 크롬이 가장 빠른 브라우저였기 때문에 같은 엔진인 v8엔진을 사용하기로 함.
* Node.js의 활용
    * 웹서버(Express.js, Nest.js) > REST APT, GraphQL API 개발
    * 실시간 앱(Socket.io) > 채팅, 실시간 알림, 스트리밍
    * 서버리스(serverless)환경 > AWS Lambda 같은 FaaS(Fuction as a Service)

* Node.js가 인기를 끄는 이유
- 빠른 성능: v8엔진 기반 + 비동기 논 블로킹 방식으로 고성능 처리가능
- JavaScript 풀스택 개발: 프론트엔드와 백엔드를 같은 언어(자바스크립트)로 개발 가능
- 활발한 생태계 : npm을 통해 다양한 패키지 사용이 가능
- 실시간 애플리케이션에 강함: WebSocket, Socket.io 지원
- 마이크로 서비스 및 서버리스 환경과의 조화로운 연동

* Node.js는 앞으로도 계속 발전할까?
- Deno위 등장: Node.js의 창시자가 만든 Deno가 경쟁자로 떠오르고 있지만, Node.js의 생태계가 훨씬 크고 안정적입니다.
- ES 모듈 지원 강화: 기존의 CommonJs에서 Es모듈로의 전환 진행중
- 클라우드 및 서버리스 환경 확대: AWS, Azurem GCP 에서 Node.js지원 강화

* Node.js의 장단점
    * 장점
    - 비동기 논플로킹 I/O로 높은 성능 제공
    - 자바스크립트 풀스택 개발이 가능하여 생산성이 향상됨
    - npm의 방대한 생태계를 활용 가능
    - 경량 서버 개발에 적합(express.js 등)
    - 실시간 데이터 처리(WebSocket)가 강력함
    * 단점
    - CPU 집약적인 작업에 부적합: 싱글 스레드 기반이라 멀티 스레딩 성능이 부족함
    - 콜백 지옥 문제: 해결책으로 async/await와 Promise사용
    - 보안 취약점: npm패키지의 보안문제가 자주 발생

### React의 진화와 강의 진행 방향
- React는 자마스크립트 UI 라이브러리를 표방하며, 2013,05,29에 공개되었습니다
- 페이스북의 개발자중에 한명이었던 조던 월커가 개발하면 버전0.3.0으로 소개되었다.
- 18.2.0이전까지만 해도 React의 헤드카피는 자바스크립트 라이브러리임을 강조
- 2023년 리뉴얼된 공식사이트의 헤트 카피에서 React의 변화를 확인 가능
- 더 이상 자바스크립트의 라이브러리가 아닌 웹과 앱 UI의 표준라이브러리로 변신

- 2024년 12월 5일 19.0.0 버전이 공개되면서 다시 한번 많은 변화
- React의 주버전은 2,3년에 한번씩 부 버전은 1년에 수차례 업그레이드
- React는 이제 프론트엔드 개발자 필수과목이 됨

* 강의 진행 방향
    * React공식문서 기초, 이해를 돕기 위해 자세한 설명 추가
    * 공식문서에서는 codesandbox.io에서 테스트를 하도록 되어 있으나, 여기서는 모든 코드를 직접  
    local에서 테스트 할수 있도록 함
    * 로컬 테스트를 위해서 create react app(CRA)를 통해 프로젝트를 생성해서 사용하도록 함

### React 개발환경 구축
- 개발환경은 Node.js 설치만 하면 됨
- node를 검색하여 LTS버전을 다운로드 함
- 시스템에 설치 후 버전확인
- Node를 설치하면 npm과 npx가 함께 설치됨
    - npm(Node Package Manager)는 node 패키지 관리자.
    - npx(Node Package eXecute)는 npm에서 제공하는 패키지 실행 도구.
- 이전에는 별도로 설치해야 했기 때문에 인터넷의 오래된 자료를 보면 설치 방법이 나와있습니다.
- Node.js v0.6.3(2011.11.22 출시) 버전부터 npm이 포함되었으며, npx는 npmv5.2.0(2017.07.05출시)부터 npm에 포함되어 자동으로 설치
- 즉, Node.jv8.2.0 이상ㅇ를 설치하면 자동으로 npm,npx설치됨
- 이외에는 코드 에디터와 웹브라우저만 준비하면 개발 환경 구축은 끝

### React 프로젝트 생성
- working directory 생성
- vs code에서 working directory 오픈 하고 터미널도 오픈
- React Project 생성명령(CRA): npx create-react-app <project-name>
- 프로젝트 이름은 kabab-case를 사용합니다.
- 프로젝트 이픔(my-project 부분)은 자유롭게 합니다
![alt text](image.png)
- 명령 실행이 완료되면 프로젝트 이름의 디렉토리가 자동으로 생성됨.
- 현재 위치는 워킹 디렉토리기 떄문에 실행하려면 새로 생성됨 디렉토리로 이동해야함

### node 서버 접속 방법
- 터미널 오픈후 npm start 입력.
- localhost:3000 과 같이 주소가 뜸
- 여기서 ctrl+c 하면 서버가 닫힘

### React project 구조및 역할

* project-name
    * node_modules/
    * public/ 정적(static) 파일을 저장하는 폴더로, 빌드 시 그대로 유지됨.
        * favicon.ico : 라우저 맵에 표시되는 아이콘.
        * index.html : React 앱이 마운트되는 HTML 파일. <div     id="root"></div>가 포함되어 있음.
        * logo192.png: PWA(Progressive Web App)용 아이콘
        * logo512.png: PWA(Progressive Web App) 아이콘
        * manifestjson: PWA 본련 설정 파일
        * robots.txt: 검색 엔진 크롤러의 접근을 제어하는 파일
    * Src/React 앱의 주요 코드가 위치하는 폴더.
        * App.css: Appjs에 적용되는 스타일.
        * Appjs: 메인 컴포넌트
        ------------------
        * App.test.js: Jest를 사용한 기본 테스트 파일
        * index.css : 전역 스타일.
        * index.js: React 앱의 진입점(entry point). ReactDOM.createRoot를 사용하여 Appjs를 렌더링함
        * logo.svg : 기본 로고 이미지.
        * reportWebVitalsjs: 성능 측정 관련 코드(선택 사항)
        * setup Tests js: 테스트 환경 설정 파일.
        * gitignore: Git에 추가하지 않을 파일 목록을 정의.
        * package-lockjson: 설치된 패키지의 정확한 버전이 기록된 파일
        * package.json : 프로젝트의 의존성 목록과 실행 스크립트가 포함된 파일
        * README.md 프로젝트 설명 문서.  


