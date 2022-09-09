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
// 리팩터링 후 코드:
//
function renderPerson(outStream: any, person: any) {
  outStream.write(`${person.name}`);
  renderPhoto(outStream, person.photo);

  //   2. 피호출 함수를 호출자들로 인라인 (6.2)
  //   emitPhotoData(outStream, person.photo);
  zztmp(outStream, person.photo);
  outStream.write(`<p>위치: ${person.photo.location}</p>\n`);
}

function listRecentPhotos(outStream: any, people: any) {
  photos
    .filter((p: any) => p.date > recentDateCutoff())
    .forEach((p: any) => {
      outStream.write("<div>\n");

      //   3. 다음도 인라인 (6.2)
      //   emitPhotoData(outStream, p);
      zztmp(outStream, p);
      outStream.write(`<p>위치: ${p.location}</p>\n`);

      outStream.write("</div>\n");
    });
}

// 4. 원래 함수를 지운다:
// function emitPhotoData(outStream: any, photo: any) {
//   //   outStream.write(`<p>제목: ${photo.title}</p>\n`);
//   //   outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
//   outStream.write(`<p>위치: ${photo.location}</p>\n`);
// }

// 1. 함수 추출하기(6.1)
function zztmp(outStream: any, photo: any) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}
