// 예시: 중첩 함수를 최상위로 옮기기
function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  // 총 거리 계산하는 중첩 함수
  function calculateDistance() {
    let result = 0;
    for (let i = 0; i < points.length - 1; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {}
  function radians(degrees) {}
  function calculateTime() {}
}

//
// 위 함수에서 중첩함수 calculateDistance() 를 최상위로 옮겨서 독립적으로 놓기:
//
