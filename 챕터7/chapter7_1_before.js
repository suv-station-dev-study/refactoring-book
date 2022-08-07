// 7.1 레코드 캡슐화하기 (중첩되지 않은 레코드 캡펼화 예시)
const organization = {
  name: "애크미 구스베리",
  country: "GB",
};
// 읽기 예제
const result = `<h1>${organization.name}</h1>`;
// 쓰기 예제
organization.name = newName;

// 변수 캡슐화하기
function getRawDataOfOrganization() {
  return organization;
}
const result2 = getRawDataOfOrganization().name;
getRawDataOfOrganization().name = newName;

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  get country() {
    return this._country;
  }
  set country(newCountry) {
    this._country = newCountry;
  }
}
const organization2 = new Organization("애크미 구스베리", "GB");
function getRawDataOfOrganization() {
  return organization2.name;
}
function getOrganization() {
  return organization2;
}
