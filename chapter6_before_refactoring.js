// 6.1 함수 추출하기
// 언제 함수로 추출해야 하나? '목적과 구현을 분리'해야 할 때
// 리팩토링 전 :
const printOwing = (invoice) => {
  let outstanding = 0;

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  console.log(
    `${invoice.customer} 고객님께서
        ${invoice.dueDate.toLocaleDateString()}까지
        총 ${outstanding}원이 납부되어야 합니다.`
  );
};

export default printOwing;

// 6.5 함수 선언 바꾸기
// 이름이 좋은 함수는 구현 코드를 살펴볼 필요 없이 무슨 일을 하는지 파악할 수 있다
// 주석을 이용해 함수의 목적을 설명해보면 좋은 이름이 떠오를 수 있다
const inNewEngland = (customer) => {
  return ["MA", "CT", "ME", "NH", "RI", "VT"].includes(customer.address.state);
};

const newEnglanders = customers.filter((c) => inNewEngland(c));
