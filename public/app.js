function something() {
    const COUNTER = 'counter';
    var counter = 1;

    if(!!localStorage.getItem(COUNTER)) {
        counter = localStorage.getItem(COUNTER);
    }

    localStorage.setItem(COUNTER,  ++counter);
    alert(counter);
}

function add_to_cart(id) {
    var key = 'product_' + id;
    var x = window.localStorage.getItem(key);

    x = x * 1 + 1;
    window.localStorage.setItem(key, x);

    update_orders_input();
}

function cart_get_number_of_items() {
    var itemCount = 0;

    for(var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        if(key.indexOf('product_') == 0) {
            itemCount += localStorage.getItem(key) * 1;
        }
    }

    return itemCount;
}

function cart_get_orders()
{
    var orders = '';

    for(var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        if(key.indexOf('product_') == 0) {
            orders += key + '=' + value * 1 + ',';
        }
    }

    return orders;
}

function update_orders_input() {
    var orders = cart_get_orders();
    $('#orders_input').val(orders);
}