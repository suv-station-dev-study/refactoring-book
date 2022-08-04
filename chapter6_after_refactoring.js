// 리팩토링 후 :
const printOwing = (invoice) => {
  const outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);
};

const calculateOutstanding = (invoice) => {
  let result = 0;

  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result;
};

const recordDueDate = (invoice) => {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

const printDetails = (invoice, outstanding) => {
  console.log(
    `${invoice.customer} 고객님께서 
       ${invoice.dueDate}까지 
       총 ${outstanding}원이 납부되어야 합니다.`
  );
};

export default printOwing;

// 리팩토링 후:
// 매개변수를 customer -> stateCode로 변경하 고객에 대한 의존성 제거, 더 넓은 문맥에 활용 가능
const inNewEngland = (stateCode) => {
  // 6.1. 함수 추출하기
  return xxNewEngland(stateCode);
};

// 6.3. 변수 추출하기
const stateCode = customer.address.state;

const xxNewEngland = (stateCode) =>
  ["MA", "CT", "ME", "NH", "RI", "VT"].includes(stateCode);

//6.2 함수 인라인하기
const newEnglanders = customers.filter((c) => xxNewEngland(c.address.state));

/**
 * HANDLERS (6.1 함수 추출하기)
 */
const onEmailVerified = () => setEmailVerified(true);
const goToPreviousPage = () => history.goBack();
const handleErrorModalOpen = () => setErrorModalOpen(true);
const handleSuccessModalOpen = () => setSuccessModalOpen(true);
const handleErrorModalClose = () => setErrorModalOpen(false);
const handleSuccessModalClose = () => setSuccessModalOpen(false);
const closeWindow = () => window.close();
