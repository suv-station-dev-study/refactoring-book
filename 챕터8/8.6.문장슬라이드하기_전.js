// 관련된 코드들이 가까이 모여 있다면 이해하기가 더 쉽다.
// 하나의 데이터 구조를 이용하는 문장들은 한데 모여 있어야 좋다.

// 관련 있는 코드들을 명확히 구분되는 함수로 추출하는 게 그저 문장들을 한데로 모으는 것보다 나은 분리법이다.

// 다음 간섭이 있다면 이 리팩터링을 포기한다:
// - 코드 조각에서 참조하는 요소를 선언하는 문장 앞으로는 이동할 수 없다.
// - 코드 조각을 참조하는 요소의 뒤로는 이동할 수 없다.
// - 코드 조각에서 참조하는 요소를 수정하는 문장을 건너뛸 수 없다.
// - 코드 조각이 수정하는 요소를 참조하는 요소를 건너뛰어 이동할 수 없다.

// 테스트가 실패한다면 더 작게 나눠 다시 시도하라.
// 이동 거리를 줄이거나, 한 번에 옮기는 조각의 크기를 줄인다.

// 요소를 선언하는 곳과 사용하는 곳을 가까이 두기를 선호한다.

// 함수 추출하기 (6.1) 하기 전에 코드들을 한데 모을 때 사용하는 리팩터링이다.

const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
const chargePerUnit = pricingPlan.unit;

const order = retrieveOrder();
const units = order.units;

let charge;
charge = baseCharge + units * chargePerUnit;

let discount;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);
