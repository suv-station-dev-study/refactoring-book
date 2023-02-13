// emitPhotoData 앞에 title을 호출하는 코드가 중복되므로 emitphotoData 안에 넣어보자.
function renderPerson(outStream: any, person: any) {
  const result: any = [];
  result.push(`<p>${person.name}</p>`);
  result.push(photoDiv(person.photo));
  // result.push(`<p>제목: ${person.photo.title}</p>`);

  // result.push(emitPhotoData(person.photo));
  result.push(zznew(person.photo));

  return result.join("\n");
}

function photoDiv(p: any) {
  return ["<div>", zznew(p), "</div>"].join("\n");
}

function zznew(p: any) {
  return [`제목: ${p.title}`, emitPhotoData(p)].join("\n");
}

function emitPhotoData(aPhoto: any) {
  const result: any = [];
  result.push(`제목: ${aPhoto.title}`);
  result.push(`${aPhoto.location}`);
  result.push(`${aPhoto.date.toDateString()}`);
  return result.join("\n");
}
