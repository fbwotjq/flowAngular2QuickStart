
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
설명 : 앵귤러 2 어플리케이션에서 코어는 컴포턴트들이긴 하지만 대부분 개발자들은 동적으로 설정하여 컴포넌트에 어떻게 데이터를 넣어줄지 필요할것이다. (컴포넌트 동적 프로퍼티 변경)
@Input
컴포넌트에 'input'을 정의하기 위해서 '@Input'표시자를 써야 한다 .

# ANGULAR 2 OUTPUTS ==> http://learnangular2.com/outputs/
설명 : 특별한 이벤트를 바인딩 할때 앵귤러 2에서는 이벤트 문법을 사용하여 처리 할 수 있지만. 필요한 커스텀 이벤트를 작성할때 @Output 지시자를 사용하면 된다. ( 이벤트 동적 바인딩 )

# ANGULAR 2 APP LIFECYCLE ==> http://learnangular2.com/lifecycle/
설명 : ANGULAR는 다단계에 걸친 기동과 lifecycle 과정을 통해 시작되며 어플리케이션이 시작/동작 컴포넌트의 생성과 소멸시 될떄 다양한 이벤트를 받을수 있다. 
BOOTSTRAP
 - Angular 2 어플리케이션들은 the root component를 통해 기동된다. 

COMPONENT INIT
 - 컴포넌트가 생성될떄 그것에 생성자는 호출된다. 이것은 우리에 컴포넌트를 위한 초기화 영역이다. 그러나 자식 컴포넌트부터 데이터나 속성에 의존되어 있다면 자식 컴포넌트가 먼저 초기화 하는 것을 기다려야 한다. 컴포넌트는 설정이나 어플리케이션 코드에 들어갈수 있다 컴포넌트들의 템플릿들은 전체 어플리케이션에 연결이 생성 되는 곳에 있다. 

COMPONENT LIFECYCLE
 - 

# ANGULAR 2 TEMPLATES  ==> http://learnangular2.com/templates/
설명 : 템플릿은  좀더 명확하게 작지만 많은 문법 변화가 일어났지만  앵귤라1 과 아주 흡사하다
 - {}: RENDERING
 - []: BINDING PROPERTIES
 - (): HANDLING EVENTS
 - [()]: TWO-WAY DATA BINDING
 - *: THE ASTERISK

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

# ANGULAR 2 FORMS ==> http://learnangular2.com/forms/
설명 : 
 1) 폼은 어떤 어플리케이션에서도 기초이다. ANGULAR 2에서 ANGULAR 1에 비해서 아주 조금 변경 되었다. 
 2) 'ngModel'을 쓰거나 내부 값들을 매칭 할떄  Angular 2에서 명확하게 폼을 만들고 컨트롤 할수 있다. 
 3) While it feels like more code to write, in practice it’s easier to reason about than with v1, and we no longer have to deal with frustrating ngModel and scope data problems.

 - SIMPLE FORM

 - FORMBUILDER

 - CONTROLGROUP

 - FORM DIRECTIVES

 - CUSTOM VALIDATORS

 - HANDLING FORM VALUES

# ANGULAR 2 VIEWCHILD ==>  http://learnangular2.com/viewChild/
설명 : ANGULAR 2에서 모든 컴포넌트들이 클래스를 가지기 떄문에 클래스 안에 메소드를 호출한다.  