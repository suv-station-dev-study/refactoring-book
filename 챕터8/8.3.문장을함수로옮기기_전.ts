// 특정 함수를 호출하는 코드가 나올 때마다 그 앞이나 뒤에서 똑같은 코드가 추가로 실행되는 모습을 보면
// 그 반복되는 부분을 피호출 함수로 합치는 방법을 궁리해본다.

// 나중에 이 코드의 동작을 여러 변형들로 나눠야 하는 순간이 오면 (반대 리팩터링인) 문장을 호출한 곳으로 옮기기 (8.4.)

// 피호출 함수와 한 몸은 아니지만 여전히 함께 호출돼야 하는 경우라면 단순히 해당 문장들과 피호출 함수를 통째로
// 하나의 함수로 추출한다 (6.1.함수 추출하기)
export {};

function renderPerson(outStream: any, person: any) {
  const result: any = [];
  result.push(`<p>${person.name}</p>`);
  result.push(photoDiv(person.photo));
  result.push(`<p>제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(p: any) {
  return ["<div>", `제목: ${p.title}`, emitPhotoData(p), "</div>"].join("\n");
}

function emitPhotoData(aPhoto: any) {
  const result: any = [];
  result.push(`${aPhoto.location}`);
  result.push(`${aPhoto.date.toDateString()}`);
  return result.join("\n");
}
