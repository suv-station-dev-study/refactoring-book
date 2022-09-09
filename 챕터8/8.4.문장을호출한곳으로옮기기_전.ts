// 함수는 프로그래머가 쌓아 올리는 추상화의 기본 빌딩 블록이다
// 초기에는 응집도 높고 한 가지 일만 수행하던 함수가 어느새 둘 이상의 다른일을 수행하게 바뀔 수도 있다.

// 여러 곳에서 사용하던 기능이 일부 호출자에게는 다르게 동작하도록 바뀌어야 한다면
// 달라진 동작을 함수에서 꺼내 해당 호출자로 옮겨야 한다.
// 우선 문장 슬라이드하기 (8.6)을 적용해 달라지는 동작을 함수의 시작 혹은 끝으로 옮긴 다음
// 이어서 "문장을 호출한 곳으로 옮기기" 리팩터링을 적용한다.
// 달라지는 동작을 호출자로 옮긴 뒤에는 필요시마다 독립적으로 수정할 수 있다.
export {};
const photos = [
  {
    date: "2020-01-01",
    title: "첫 번째 사진",
    location: "서울",
  },
];
function renderPhoto(outStream: any, photo: any) {
  outStream.write(`<img src="${photo.url}" alt="${photo.title}">\n`);
}
function recentDateCutoff() {
  return new Date(
    new Date().getTime() - 1000 * 60 * 60 * 24 * 7
  ).toDateString();
}

//
// 리팩터링 전 코드:
//
function renderPerson(outStream: any, person: any) {
  outStream.write(`${person.name}`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream: any, people: any) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      emitPhotoData(outStream, p);
      outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream: any, photo: any) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}
