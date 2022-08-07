// 7.1 중첩된 레코드 캡슐화 예시
// 중첩 정도가 심할수록 읽거나 쓸 때 데이터 구조 안으로 더 깊이 들어가야 한다

// 쓰기 예
customerData[customerID].usages[year][month] = amount;

// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

// 전체 데이터 구조를 표현하는 클래스를 정의하고, 이를 반환하는 함수 만들기:
class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

// 내코드:
// function getCustomerData() {
//   return new CustomerData(customerData);
// }
// 책코드:
function getCustomerData() {
  return customerData;
}
function getRawDataOfCustomers() {
  return customerDAta._data;
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

// 데이터 구조 안으로 들어가는 코드를 세터 함수로 추출한다 (6.1 함수 추출하기):
function setUsage(customerID, year, month, amount) {
  return (
    getRawDataOfCustomers()[customerID].usages[year][month] = amount
  )
}

// 이 함수를 클래스로 옮긴다 (8.1 함수 옮기기):
getCustomerData().setUsage(customerID, year, month, amount);
function setUsage(customerID, year, month, amount) {
  this._data[customerID].usages[year][month] = amount;
}

// 데이터를 깊은 복사하여 반환하여 캡슐화 과정 중 빠진 건 없는지 확인한다:
function getCustomerData() {
  return customerData
}
function getRawDataOfCustomers() {
  return customerData.rawData
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

get rawData() {
  return _.cloneDeep(this._data);
}

