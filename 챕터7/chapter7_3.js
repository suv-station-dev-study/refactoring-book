// 7.3 기본형을 객체로 바꾸기

// 리팩토링 전
orders.filter((o) => "high" === o.priority || "rush" === o.priority);

// 리팩토링 후
orders.filter((o) => o.priority.higherThan(new Priority("normal")));

//
class Order {
  constructor(data) {
    this.priority = data.priority;
    // 나머지 초기화 코드 생략
  }
}

// 클라이언트:
const highPriority = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;

// 1. 데이터 값을 다루기 전에 변수부터 캡슐화 하기 (6.6 변수 캡슐화)
class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  get priority() {
    return this._priority;
  }
  set priority(aString) {
    // 내 코드:
    // this._priority = new Priority(aString);

    // 책 코드:
    this._priority = aString;
  }
}

// 2. Priority 클래스를 생성하기
class Priority {
  constructor(aString) {
    this.value = aString;
  }
  // 책코드
  aString() {
    return this.value;
  }
}

// Priority 클래스를 만들고 나면  Order클래스의 게터가 이상해진다
// 함수 이름을 바꿔주면 된다 (6.5 함수 선언  바꾸기)
class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

// 클라이언트
const highPriorityCount = orders.filter(
  (o) => "high" === o.priorityString || "rush" === o.priorityString
).length;
