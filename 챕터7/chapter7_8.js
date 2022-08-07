// 7.8 중개자 제거하기
// 클라이언트가 위임 객체의 또 다른 기능을 사용하고 싶을 때마다 서버에 위임 메서드를 추가해야 하는데
// 이렇게 기능을 추가하다 보면 단순히 전달만 하는 위임 메서드들이 점점 성가셔간다.
// 그러면 서버 클래스는 그저 중개자 (middleman) 역할로 전락하여, 차라리 클라리언트가 위임 객체를 직접 호출하는게 낫다

// 클라이언트 코드
const manager = aPerson.manager;

// Person 클래스
class Person {
  // ...
  get manager() {
    return this._department.manager;
  }
}

// Department 클래스
class Department {
  // ...
  get manager() {
    return this._manager;
  }
}

// 이런 위임 메서드가 많아지면 Person 클래스의 상당 부분이 그저 위임하는 데만 쓰일 것이다.
// 이럴 땐 중개자를 제거하는 것이 좋다.
// 1. department 위임 객체를 얻는 게터를 만든다:
class Person {
  // ...
  get department() {
    return this._department;
  }
}

const manager2 = aPerson.department.manager;

// 끝으로 Person 클래스의 manager() 메서드를 제거한다.
