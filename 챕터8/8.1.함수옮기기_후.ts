export {};

// 예시: 중첩 함수를 최상위로 옮기기
function trackSummary(points: any) {
  const totalTime: any = calculateTime();
  // 4. 이 변수는 이제 남겨둘 필요가 없으니 변수 인라인 한다 (6.4)
  // const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace,
  };

  // 총 거리 계산하는 중첩 함수
  // function calculateDistance() {
  //   // let result: any = 0;
  //   // for (let i = 0; i < points.length - 1; i++) {
  //   //   result += distance(points[i - 1], points[i]);
  //   // }
  //   // return result;
  //   return top_calculateDistance(points);
  // }

  function calculateTime() {}
}

// 3. distance 함수를 글로벌 스코프로 꺼낸다 (calculateDistance()와 함께 옮김)
function distance(p1, p2) {}

function radians(degrees) {}

// 1. 위 함수에서 중첩함수 calculateDistance() 를 최상위로 복사하기:
// 2. points를 매개변수로 넘겨준다
function totalDistance(points) {
  let result: any = 0;
  for (let i = 0; i < points.length - 1; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}
