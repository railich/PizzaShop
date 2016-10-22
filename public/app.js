

function something() {
    const COUNTER = 'counter';
    var counter = 1;

    if(!!localStorage.getItem(COUNTER)) {
        counter = localStorage.getItem(COUNTER);
    }

    localStorage.setItem(COUNTER,  ++counter);
    alert(counter);
}
