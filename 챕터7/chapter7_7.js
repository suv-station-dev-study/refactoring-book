// 7.7 위임 숨기기
// 모듈화 설계의 핵심은 캡슐화이다
// 캡슐화는 "필드를 숨기는 것"이지만, 그 역할은 그보다 많다
//
manager = aPerson.department.manager;

// 의존성을 줄이기 위해 department 클래스를 볼 수 없게 숨긱, 대신 Person 클래스에 간단한 위임 메서드를 만든다
manager = aPerson.manager;
class Person {
  get manager() {
    return this.department.manager;
  }
}

// ///
class Person {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }

  set department(arg) {
    this._department = arg;
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }

  //   제거
  //   get department() {
  //     return this._department;
  //   }

  // 새로 추가:
  get manager() {
    return this._department.manager;
  }

  set department(arg) {
    this._department = arg;
  }
}
