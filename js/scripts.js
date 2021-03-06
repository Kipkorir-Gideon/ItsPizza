function Order(size, crust, toppings) {
    this.sizeCost = size;
    this.crustCost = crust;
    this.toppingsCost = toppings;
}

Order.prototype.orderCost = function () {
    return this.sizeCost + this.crustCost + this.toppingsCost;
}







$(document).ready(function () {
    $("#submitOrder").click(function (event) {
        event.preventDefault();

        var size = $("#selection1").val();
        var crust = $("#selection2").val();
        var toppings = $("#selection3").val();
        var quantity = $("#quantities").val();
        var sizeCost = 0;
        var crustCost = 0;
        var toppingsCost = 0;
        if (size == "small") {
            sizeCost += 320;
        } else if (size == "medium") {
            sizeCost += 440;
        } else if (size == "large") {
            sizeCost += 600;
        }

        if (crust == "crispy") {
            crustCost += 120;
        } else if (crust == "stuffed") {
            crustCost += 150;
        } else if (crust == "gluten-free") {
            crustCost += 100;
        }

        if (toppings == "cheese") {
            toppingsCost += 60;
        } else if (toppings == "mushroom") {
            toppingsCost += 70;
        } else if (toppings == "pepperoni") {
            toppingsCost += 80;
        }
        if (toppings == "onion") {
            toppingsCost += 50;
        }
        if (toppings == "sausage") {
            toppingsCost += 80;
        }

        var newOrder = new Order(sizeCost, crustCost, toppingsCost);


        $("#displayOrder").append('<table class="table">' + 
            '<tbody>' + '<tr><td id="size">' + size +
            '</td><td id="crust">' + crust +
            '</td><td id="toppings">' + toppings +
            '</td><td id="quantity">' + quantity +
            '</td><td id="total">' + newOrder.orderCost()*quantity +
            '</td></tr>' + 
            '</tbody>' + 
            '</table>')
        
        $("#displayOrder").show();
        $("#new-order").hide();
        
        
    })

    $("#location").click(function(event) {
        event.preventDefault();

        var delivery = $("#delivery").val();
        if(delivery == "yes"){
            $(".deliveryYes").show();
            $(".delivery").hide();
        }
        else if(delivery == "no"){
            $(".deliveryNo").show();
            $(".delivery").hide();
        }
    })

    $("#locationYes").click(function(event) {
        event.preventDefault();

        $("#displayOrder").hide();
        $(".deliveryYes").hide();
        var name = $("input#name").val();
        var phone = $("input#phone").val();
        var location = $("input#userLocation").val();
        
        function totalAmount() {
            var totalCost = (newOrder() * quantity )+ 200;
            return totalCost;
        }


        $("#forDelivery").append("Hello " + name + ", we have received your order and it will be delivered to " + location + " at an extra cost of Ksh 200.");
        $("#checkout").show();

        $("#checkout").click(function(event) {
            event.preventDefault();

            $("#yourName").text(name);
            $("#yourPhone").text(phone);
            $("#orderPrice").text();
            $("#deliveryLocation").text(location);
            $("#totalAmount").text();
            $("#checkoutAlert").show();
            $("#locationYes").hide();
            $(this).hide();
        })
    })

    $("#locationNo").click(function(event) {
        event.preventDefault();

        $("#displayOrder").hide();
        $(".deliveryNo").hide();
        var name = $("input#name1").val();
        var phone = $("input#phone1").val();

        $("#forDelivery").append("Hello " + name + ", thank you for shopping with us. You can pick your order at our store.");
        $("#checkout").show();

        $("#checkout").click(function(event) {
            event.preventDefault();

            $("#yourTotal").text();
            $("#nameOne").text(name);
            $("#phoneOne").text(phone);
            $("#checkoutOne").show();
            $("#locationNo").hide();
            $(this).hide();
        });
    })
})