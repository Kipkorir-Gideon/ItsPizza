function Order(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

Order.prototype.orderCost = function() {
    return this.size + this.crust + this.toppings;
}





$(document).ready(function() {
    $("form#new-order").submit(function(event) {
        event.preventDefault();

        var inputtedSize = $("select#selection1 option:selected").val();
        var inputtedCrust = $("select#selection2 option:selected").val();
        var inputtedTopping = $("#selection3 input:checked").val();
    })
})