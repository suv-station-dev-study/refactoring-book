const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;

// 2. retrieveOrder() 함수 및 그 내부의 모든 함수들이 부수효과가 없다는 걸 체크한 후 슬라이드한다
const order = retrieveOrder();
const units = order.units;

charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);

// 1. 간단한 선언부터 슬라이드 한다.(부수효과 없기 때문)
let discount;
discount = discountableUnits * pricingPlan.discountFactor;
// 3. discount 값이 수정되기 때문에 더 아래로 슬라이드 할 수 없다. (바로 밑에서 discount를 참조하기 때문)
if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);
