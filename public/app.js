

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
}
