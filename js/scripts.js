function Order(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

Order.prototype.orderCost = function() {
    return this.size + this.crust + this.toppings;
}