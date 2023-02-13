// 7.4 임시 변수를 질의 함수로 바꾸기
// 임시변수를 사용하면 값을 계산하는 코드가 반복되는 걸 줄이고 그 의미를 설명할 수도 있어서 유용하다.
// 긴 함수의 한 부분을 별도 함수로 추출하고자 할 때 먼저 변수들을 각각의 함수로 만들면 일이 수월해진다
// 변수 대신 함수로 만들어두면 비슷한 작업을 수행하는 다른 함수에서도 사용할 수 있어 코드 중복이 줄어든다

// 리팩토링 전:
// const basePrice = this._quantity * this._itemPrice;
// if (basePrice > 1000) {
//   return basePrice * 0.95;
// } else {
//   return basePrice * 0.98;
// }

// 리팩토링 후
class Order {
  constructor(quantity, item) {
    this._quantity = data.quantity;
    this._item = data.item;
  }
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get price() {
    if (this.basePrice > 1000) {
      return this.basePrice * 0.95;
    } else {
      return this.basePrice * 0.98;
    }
  }
}

//
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    var basePrice = this.quantity * this._item.price;
    var discountFactor = 0.98;

    if (basePrice > 1000) {
      discountFactor = 0.95;
      return basePrice * discountFactor;
    }
  }
}

// 여기서 임시변수인 basePrice와 discountFactor 를 메서드로 바꿔보자
// 내 코드
function basePrice(quantity, item) {
  return quantity * item.price;
}
function discountFactor(basePrice) {
  if (basePrice > 1000) {
    return 0.95;
  } else {
    return 0.98;
  }
}

// 책 코드
// basePrice를 게터로 추출한다.
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    const basePrice = this.basePrice;
    var discountFactor = 0.98;

    if (basePrice > 1000) {
      discountFactor = 0.95;
      return basePrice * discountFactor;
    }
  }

  get basePrice() {
    return this.quantity * this._item.price;
  }
}

// 변수 인라인하기
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    //   const basePrice = this.basePrice;
    var discountFactor = 0.98;

    if (this.basePrice > 1000) {
      discountFactor = 0.95;
      return this.basePrice * discountFactor;
    }
  }

  get basePrice() {
    return this.quantity * this._item.price;
  }
}

// 함수 추출하기
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    //   const basePrice = this.basePrice;
    var discountFactor = 0.98;

    if (this.basePrice > 1000) {
      discountFactor = 0.95;
      return this.basePrice * discountFactor;
    }
  }

  get basePrice() {
    return this.quantity * this._item.price;
  }
}

class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    //   const basePrice = this.basePrice;
    //   var discountFactor = 0.98;
    const discountFactor = this.discountFactor;

    if (this.basePrice > 1000) {
      discountFactor = 0.95;
      return this.basePrice * discountFactor;
    }
  }

  get basePrice() {
    return this.quantity * this._item.price;
  }

  get discountFactor() {
    var discountFactor = 0.98;
    if (this.basePrice > 1000) {
      discountFactor = 0.95;
    }
    return discountFactor;
  }
}
