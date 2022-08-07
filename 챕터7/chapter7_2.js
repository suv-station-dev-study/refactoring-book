// 7.2 컬렉션 캡슐화 하기

class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;

const basicCoursesName = readBasicCoursesNames(filename);
aPerson.courses = basicCoursesName.map((name) => new Course(name, false));

for (const name of readBasicCoursesNames(filename)) {
  aPerson.courses.push(new Course(name, false));
}

// 캡슐화: 클라이언트가 course를 하나씩 추가하고 제거하는 메서드 넣기
class Person {
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  // 내 코드:
  // removeCourse(aCourse) {
  //     this._courses = this._courses.filter((c) => c !== aCourse);
  // }

  // 책코드:
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    // FIND INDEX OF ELEMENT TO REMOVE
    const index = this._courses.indexOf(aCourse);
    // IF ELEMENT NOT FOUND, THROW ERROR
    if (index === -1) {
      fnIfAbsent();
    }
    // REMOVE ELEMENT
    this._courses.splice(index, 1);
  }
}

// 변경자를 직접 호출하던 코드를 모두 찾아서 방금 추가한 추가, 제거 메서드를 사용하도록 바꾼다
for (const name of readBasicCoursesNames(filename)) {
  aPerson.addCourse(new Course(name, false));
}

// 이렇게 개별 원소를 추가하고 제거하는 메서드를 제공하기 때문에 setCourses()를 사용할 필요가 없어졌다.
// (11.7 세터 제거하기)
class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  //   get name() {
  //     return this._name;
  //   }
  //   get courses() {
  //     return this._courses;
  //   }

  //   복제본을 만덜어서 메서드들을 사용하지 않고서는 아무도 목록을 변경할 수 없게 만든다:
  get courses() {
    return this._courses.slice();
  }

  set courses(aList) {
    this._courses = aList.slice();
  }
  //   addCourse(aCourse) {
  //     this._courses.push(aCourse);
  //   }
  //   removeCourse(aCourse) {
  //     this._courses = this._courses.filter((c) => c !== aCourse);
  //   }
}
