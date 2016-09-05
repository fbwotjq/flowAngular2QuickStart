
# 해석 ==> https://angular.io/docs/ts/latest/guide/architecture.html
# 참조 
 # ==> https://angular.io/docs/ts/latest/guide/user-input.html
 # ==> http://learnangular2.com/events/

1 . angularjs 2는 javscript 및 typescript, dart와 같은 javascript로 컴파일 되는 언어로 HTML안에서 CLIENT APPLICATION을 만들기 위한 FRAMEWORK
2 . 몇개의 코어와 몇개의 부가 적인 라이브러리로 구성 되어 있다. 
3 . COMPONENT 클래스를 이용하여 앵귤라화 된 HTML 템플릿과 템플릿을 관리 하고, 컴포넌트를 관리하고 서비스의 로직을 추가 할수 있다.
4 . 최상위 모듈을 이용해 어플리케이션을 구동시킬 때 앵귤라는 브라우져에 어플리케이션을 출력하고 사용자에 행동에 따라 당신이 지정해 놓은 사용자 반응을 응답한다. 

---------------------- 아키 텍처 그림 ----------------------

5 . 아키텍쳐 그림에서 보여지는 것과 같이 8가지 주요 요소가 있다. 
- Modules
 Angular 어플리케이션은 모듈화 되어 있고 Angular modules 또는 NgModules이라고 불리는 모듈화 시스템을 가지고 있다. 
 Angular modules 큰 포인트 이고 Angular에서 적어도 하나 이상에  AppModule이라고 불리는 기본 모둘이 있다. 
 최상위 이건 일부이건 간에 엥귤러 모듈은 @NgModule라는 표현식을 클레스와 같이 쓴다. 
 NgModule은 해당 모듈에 기능을 표현하는 메타 데이터 properties 기능들이 있으며 아래와 같다. 
  1) declarations
    - 해당 module에 속하는 뷰 클래스를 가리킨다. (Angular는 3가지 view 클래스의 종류가 있다. :components, directives, and pipes.)
  2) exports
    - 다른 모듈의 component templates에서 사용 가능하거나 보여질수 있도록 하는 선언에 집합 
  3) imports 
    - 현재 모듈에서 다른 모듈에 필요 할때 쓰일수 있도록 쓰일수 있도록 component templates을 선언 
  4) providers
    - 전체 서비스 집합에서 모듈이 쓰일수 있도록 서비스를 생성, 어플리케이션에 모든 부분에서 이용가능하게 할수 있다.
  5) bootstrap
    -  root component라고 불리는 어플리케이션의 시작점으로 모든 뷰를 호출하며 root module는 여기에 bootstrap 속성을 지정해야 한다.

- Components
- Templates
- Metadata
- Data binding
- Directives
- Services
- Dependency injection

# ANGULAR 2 COMPONENT ==> http://learnangular2.com/components/
설명: 컴포넌트는 페이지에 로직과 페이지에 엘리먼트를 구체화할수 있는 주요한 방법이다. 앵귤라1에서 directives, controllers, and scope를 통해서 구현하였다면 앵귤러2 에서 
해당 컨셉은 Components로 통합되었다. 
A SIMPLE COMPONENT
#코드 + 설명  

# ANGULAR 2 INPUTS ==> http://learnangular2.com/inputs/

# ANGULAR 2 EVENTS ==> 'http://learnangular2.com/events/' 해석

설명 : Angular2 에서의 이벤트는 템플릿 안에서 괄호 표현식을 사용하며 컴포턴트 클래스 안에 메소드와 연결되어 있다. 
# 코드
# 템플릿
# 설명
DELEGATION (위임)
 - Angular2 에서의 이벤트는 일반적인 DOM이벤트와 비슷하게 동작한다. 이벤트를 상향으로 올리거나 아래로 전파할수 있으며 특별한게 없다.
EVENT OBJECT
 - 이벤트를 처리 할 때 '$event'라는 파라메터로 템플릿에 이벤트 콜백(함수)로 처리한다.
 #코드 
 #설명
 #템플릿