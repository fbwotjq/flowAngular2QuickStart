
# 해석 ==> https://angular.io/docs/ts/latest/guide/architecture.html

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

- Components
- Templates
- Metadata
- Data binding
- Directives
- Services
- Dependency injection