// // 어떤 함수가 자신이 속한 모듈 A의 요소들보다
// 다른 모듈 B의 요소들을 더 많이 참조한다면 모듈 B로 옮기는 것이 좋다.

// 옮길지 말지는 대상 함수를 호출하는 함수들은 무엇인지,
// 대상 함수가 호출하는 함수들은 무엇인지,
// 대상 함수가 사용하는 데이터는 무엇인지 살펴봐야 한다.

// 예시: 중첩 함수를 최상위로 옮기기 (중첩 함수를 사용하다 보면 숨겨진 데이터끼리
// 상호 의존하기가 쉬우니 중첩 함수는 되도록 만들지 말자.)

export {};

function trackSummary(points: any) {
  const totalTime: any = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  // 총 거리 계산하는 중첩 함수
  function calculateDistance() {
    let result: any = 0;
    for (let i = 0; i < points.length - 1; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {}
  function radians(degrees) {}
  function calculateTime() {}
}
