function Order(size, crust, toppings) {
    this.sizeCost = size;
    this.crustCost = crust;
    this.toppingsCost = toppings;
}

Order.prototype.orderCost = function() {
    return this.sizeCost + this.crustCost + this.toppingsCost;
}





$(document).ready(function() {
    $("#submitOrder").submit(function(event) {
        event.preventDefault();

        var size = $("#selection1").val();
        var crust = $("#selection2").val();
        var toppings = $("#selection3").val();
        var quantity = $("#quantities").val();
        var sizeCost = 0;
        var crustCost = 0;
        var toppingsCost = 0;
        if(size == "small") {
            sizeCost += 320;
        }
        else if(size == "medium") {
            sizeCost += 440;
        }
        else if(size == "large") {
            sizeCost += 600;
        }

        if(crust == "crispy") {
            crustCost += 120;
        }
        else if(crust == "stuffed") {
            crustCost += 150;
        }
        else if(crust == "gluten-free") {
            crustCost += 100;
        }

        if(toppings == "cheese") {
            toppingsCost += 60;
        }
        else if(toppings == "mushroom") {
            toppingsCost += 70;
        }
        else if(toppings == "pepperoni") {
            toppingsCost += 80;
        }
        if(toppings == "onion") {
            toppingsCost += 50;
        }
        if(toppings == "sausage") {
            toppingsCost += 80;
        }

        var newOrder = new Order(sizeCost, crustCost, toppingsCost);
    })
})